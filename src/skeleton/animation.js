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
    getData().then(function(data) {
        // Check if each element exists before trying to modify it
        var skeletonCard = document.querySelector("#skeletonCard");
        var cardProfileImage = document.querySelector(".cardProfile .image");
        var nameElement = document.getElementById('name');
        var timeElement = document.getElementById('time');
        var cardContentImage = document.querySelector(".cardContent .image");
        var cardLeftOptn = document.getElementById("cardLeftOptn");
        var cardRightOptn = document.getElementById("cardRightOptn");
        var skeletondatacard = document.getElementById("skeletondatacard");
        var skeletonListView = document.getElementById('skeleton-listview');
        var skeletonList = document.getElementById('skeleton-list');

        if (skeletonCard) skeletonCard.style.display = 'none';
        if (cardProfileImage) cardProfileImage.classList.add('profile-image');
        if (nameElement) nameElement.textContent = data.name;
        if (timeElement) timeElement.textContent = data.time;
        if (cardContentImage) cardContentImage.classList.add('post-image');
        if (cardLeftOptn) cardLeftOptn.innerHTML = '<button class="e-btn e-outline e-primary" style="width: 100%;">Like</button>';
        if (cardRightOptn) cardRightOptn.innerHTML = '<button class="e-btn e-primary" style="width: 100%;">Share</button>';
        if (skeletondatacard) skeletondatacard.style.display = 'block';

        // Initialize ListView only if skeleton-listview exists
        if (skeletonListView) {
            listObj = new ej.lists.ListView({
                dataSource: data.listdata,
                fields: { text: "text" },
                height: '420px',
                cssClass: 'e-list-template',
                template: template,
                sortOrder: "Ascending"
            });
            listObj.appendTo(skeletonListView);
            listObj.element.style.display = 'block';
        }

        if (skeletonList) skeletonList.style.display = 'none';

        isDataLoading = false;
        }).catch(function(error) {
            console.error('Error loading data:', error);
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
