this.default = function() {

    // ListView 
    var template = '<div class="e-list-wrapper e-list-multi-line e-list-avatar">' +
        '${if(avatar!=="")}' +
        '<span class="e-avatar e-avatar-circle">${avatar}</span>' +
        '${else}' +
        '<span class="${pic} e-avatar e-avatar-circle"> </span>' +
        '${/if}' +
        '<span class="e-list-item-header">${text}</span>' +
        '<span class="e-list-content">${contact}</span>' +
        '</div>';

    // Function to get data to replace the skeletons.
    function getData() {
        return new Promise(function(resolve){ 
            setTimeout(function() {
                var data = {};
                data.listdata = [
                    { text: "Jenifer", contact: "(206) 555-985774", id: "1", avatar: "", pic: "pic01" },
                    { text: "Amenda", contact: "(206) 555-3412", id: "2", avatar: "A", pic: "" },
                    { text: "Isabella", contact: "(206) 555-8122", id: "4", avatar: "", pic: "pic02" },
                    { text: "William ", contact: "(206) 555-9482", id: "5", avatar: "W", pic: "" },
                    { text: "Jacob", contact: "(71) 555-4848", id: "6", avatar: "", pic: "pic04" },
                    { text: "Matthew", contact: "(71) 555-7773", id: "7", avatar: "M", pic: "" },
                    { text: "Oliver", contact: "(71) 555-5598", id: "8", avatar: "", pic: "pic03" },
                    { text: "Charlotte", contact: "(206) 555-1189", id: "9", avatar: "C", pic: "" }
                ];
                data.name = 'Laura Callahan';
                data.time = new Date().toLocaleString();
                resolve(data);
            }, 3000);
        });
    }

    function loadData() {
        getData().then(function(data){
            document.querySelector("#skeletonCard").style.display = 'none';
            document.querySelector(".cardProfile .image").classList.add('profile-image');
            document.getElementById('name').textContent = data.name;
            document.getElementById('time').textContent = data.time;
            document.querySelector(".cardContent .image").classList.add('post-image');
            document.getElementById("cardLeftOptn").innerHTML = '<button class="e-btn e-outline e-primary" style="width: 100%;">Like</button>';
            document.getElementById("cardRightOptn").innerHTML = '<button class="e-btn e-primary" style="width: 100%;">Share</button>';
            document.getElementById("skeletondatacard").style.display = 'block';

            listObj = new ej.lists.ListView({
                dataSource: data.listdata,
                fields: { text: "text" },
                height: '420px',
                cssClass: 'e-list-template e-card',
                template: template,
                sortOrder: "Ascending"
            });
            listObj.appendTo("#skeleton-listview");
            listObj.element.style.display = 'block';            
            document.getElementById('skeleton-list').style.display = 'none';

            isDataLoading = false;
        });
    }

    var isDataLoading = true;

    // Reload button click event handler.
    document.getElementById('reloadSkeleton').onclick = function() {
        if (!isDataLoading) {
            isDataLoading = true;

            document.getElementById("skeletonCard").style.display = 'block';
            document.getElementById("skeletondatacard").style.display = 'none';

            listObj.element.style.display = 'none';
            document.getElementById('skeleton-list').style.display = 'block';
            listObj.destroy();
            loadData();
        }
    };

    loadData();
};
