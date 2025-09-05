/*jslint esversion: 6 */
/**
 * Theater Seat reservation diagram sample
 */
ej.diagrams.Diagram.Inject();
this.default = function () {
    let selectedTimingId = 1;
    var nodes = [];
    var seatSelection = {
        SeatNumbers: [],
        TicketCount: 0,
        Amount: 0.0,
        Category: ""
    };
    var selectedSeatsArray = [];
    var diagramCreated = false;

    /* eslint-disable */
    /* jshint ignore:start */
    function seatRange(row, start, end) {
        var arr = [];
        for (let i = start; i <= end; i++) arr.push(`seat${row}${i}`);
        return arr;
    }

    // Executive, Corporate, Budget definitions (as before)
    const seatsExecutive = [].concat(
        seatRange('A', 1, 18), seatRange('B', 1, 18), seatRange('C', 1, 18),
        seatRange('D', 1, 18), seatRange('E', 1, 18), seatRange('F', 1, 18),
        seatRange('G', 1, 16), seatRange('H', 1, 14)
    );
    const seatsCorporate = [].concat(
        seatRange('I', 1, 16), seatRange('J', 1, 16), seatRange('K', 1, 16),
        seatRange('L', 1, 14), seatRange('M', 1, 12)
    );
    const seatsBudget = [].concat(
        seatRange('N', 1, 16), seatRange('O', 1, 16), seatRange('P', 1, 16)
    );

    // Custom lists per timing (as before)
    const executiveMorning = ["seatD9", "seatD10", "seatE9", "seatE10", "seatF8", "seatF9", "seatF10", "seatF11",
        "seatG7", "seatG8", "seatG9", "seatG10", "seatH6", "seatH7", "seatH8",
        "seatC9", "seatC10", "seatB9", "seatB10", "seatA9", "seatA10",
        "seatD8", "seatD11", "seatE8", "seatE11", "seatF7", "seatF12",
        "seatC8", "seatC11", "seatB8", "seatB11", "seatA8", "seatA11",
        "seatG6", "seatG11", "seatH5", "seatH9"];
    const corporateMorning = ["seatI8", "seatI9", "seatJ8", "seatJ9", "seatK7", "seatK8", "seatK9", "seatK10",
        "seatL6", "seatL7", "seatL8", "seatL9", "seatM5", "seatM6", "seatM7", "seatM8",
        "seatI7", "seatI10", "seatJ7", "seatJ10", "seatK6", "seatK11",
        "seatL5", "seatL10", "seatM4"];
    const budgetMorning = ["seatN8", "seatN9", "seatO8", "seatO9", "seatP8", "seatP9",
        "seatN7", "seatN10", "seatO7", "seatO10", "seatP7", "seatP10",
        "seatN6", "seatO6", "seatP6"];

    const executivePrime = [].concat(
        seatRange('A', 1, 18), seatRange('B', 1, 18), seatRange('C', 1, 18),
        seatRange('D', 1, 18), seatRange('E', 1, 18), seatRange('F', 1, 18),
        seatRange('G', 1, 16), seatRange('H', 1, 13)
    );
    const corporatePrime = [].concat(
        seatRange('I', 1, 16), seatRange('J', 1, 16), seatRange('K', 1, 16),
        seatRange('L', 1, 14), seatRange('M', 1, 12)
    );
    const budgetPrime = [].concat(
        seatRange('N', 1, 16), seatRange('O', 1, 16), seatRange('P', 1, 6)
    );

    const executiveNight = [].concat(
        seatRange('A', 1, 18),
        seatRange('B', 1, 18),
        seatRange('C', 1, 18),
        seatRange('D', 1, 18),
        seatRange('E', 1, 18),
        seatRange('F', 1, 18)
    );

    const corporateNight = [].concat(
        seatRange('I', 1, 16), seatRange('J', 1, 16), seatRange('K', 1, 16),
        seatRange('L', 1, 10)
    );
    const budgetNight = [].concat(
        seatRange('N', 1, 16), seatRange('O', 1, 16), seatRange('P', 1, 5)
    );

    // Final data object
    const timingSpecificBookedSeats = {
        1: [...executiveMorning, ...corporateMorning, ...budgetMorning],
        2: [...seatsExecutive, ...seatsCorporate, ...seatsBudget],
        3: [...executivePrime, ...corporatePrime, ...budgetPrime],
        4: [...executiveNight, ...corporateNight, ...budgetNight]
    };
    /* jshint ignore:end */
    /* eslint-enable */
    function getBookedSeatsForTiming(timingId) {
        return timingSpecificBookedSeats[timingId] || [];
    }
    function refreshSeatingLayout() {
        const bookedSet = new Set(getBookedSeatsForTiming(selectedTimingId));
        diagram.nodes.forEach(function (node) {
            if (node.addInfo && node.addInfo.SeatNumber) {
                // RESET all nodes first
                node.style.fill = 'transparent';
                node.style.strokeColor = '#9CA3AF';
                if (node.annotations && node.annotations[0]) {
                    node.annotations[0].style.color = "#374151";
                }
                node.addInfo.Booked = false;
                // Now re-apply BOOKED status for this timing
                if (bookedSet.has(node.id)) {
                    node.style.fill = '#E5E7EB';
                    node.style.strokeColor = '#E5E7EB';
                    if (node.annotations && node.annotations[0]) {
                        node.annotations[0].style.color = "#9CA3AF";
                    }
                    node.addInfo.Booked = true;
                }
                node.tooltip = { content: seatTooltipTemplate(node.addInfo, node) };
            }
        });
        diagram.dataBind();
    }
    const showTimings = [
        { id: 1, time: "11:50 AM", type: "4K DOLBY ATMOS", status: "available" },
        { id: 2, time: "02:15 PM", type: "4K DOLBY ATMOS", status: "sold-out" },
        { id: 3, time: "06:20 PM", type: "4K DOLBY ATMOS", status: "filling-fast" },
        { id: 4, time: "09:15 PM", type: "4K DOLBY ATMOS", status: "available" }
    ];


    function createTierLabel(tierName, price, y) {
        nodes.push({
            id: `tier-${tierName}`,
            width: 200,
            height: 25,
            offsetX: 585,
            offsetY: y,
            shape: { type: 'Text', content: `${tierName} - $${price}` },
            style: { fontSize: 16, bold: true },
            constraints: ej.diagrams.NodeConstraints.ReadOnly
        });
    }

    function createRowLabel(row, y) {
        nodes.push({
            id: `row-${row}`,
            width: 30,
            height: 32,
            offsetX: 80,
            offsetY: y,
            shape: { type: 'Text', content: row },
            style: { fontSize: 14, bold: true },
            constraints: ej.diagrams.NodeConstraints.ReadOnly
        });
    }

    function createSeatNode(seatId, seatNumber, row, column, price, tier, x, y) {
        var addInfoData = {
            SeatNumber: seatNumber,
            Row: row,
            Column: column,
            Price: price,
            TierCategory: tier,
            Booked: false
        };
        nodes.push({
            id: seatId,
            width: 32,
            height: 32,
            offsetX: x,
            offsetY: y,
            shape: { cornerRadius: 4 },
            style: { strokeColor: '#9CA3AF', strokeWidth: 2 },
            annotations: [{
                content: column.toString()
            }],
            addInfo: addInfoData,
            tooltip: {
                content: seatTooltipTemplate(addInfoData),
                relativeMode: 'Object'
            },
            constraints: (ej.diagrams.NodeConstraints.Default | ej.diagrams.NodeConstraints.Tooltip | ej.diagrams.NodeConstraints.ReadOnly) & ~ej.diagrams.NodeConstraints.Select
        });
    }
    function seatTooltipTemplate(addInfoData, currentNode) {
        // props is the node object (diagram node)
        var addInfo = addInfoData || {};
        var seatNumber = addInfo.SeatNumber || "";
        var row = addInfo.Row || "";
        var tier = addInfo.TierCategory || addInfo.Tier || "";
        var price = addInfo.Price !== undefined ? addInfo.Price : "";

        // You must determine selected/booked status here (JS logic)
        var isSelected;
        if (currentNode) {
            isSelected = (selectedSeatsArray && selectedSeatsArray.includes(currentNode.id));
        }
        var isBooked = !!addInfo.Booked;
        var status = isSelected ? "Selected" : isBooked ? "Booked" : "Available";
        var statusBg = (isSelected ? "#28a745" : isBooked ? "#6c757d" : "#17a2b8");

        return `
      <div style="margin:0;padding:10px;font-family:Arial,sans-serif;min-width:150px;">
        <div style="font-weight:bold;margin-bottom:5px;font-size:14px;">
          Seat ${seatNumber}
        </div>
        <div style="font-size:12px;margin-bottom:3px;">
          <strong>Row:</strong> ${row}
        </div>
        <div style="font-size:12px;margin-bottom:3px;">
          <strong>Category:</strong> ${tier}
        </div>
        <div style="font-size:12px;margin-bottom:3px;">
          <strong>Price:</strong> $${price}
        </div>
        <div style="font-size:12px;margin-top:5px;">
          <span style="padding:2px 6px;border-radius:3px;font-weight:bold;background-color:${statusBg};color:white;font-size:11px;">
            ${status}
          </span>
        </div>
      </div>
    `;
    }
    function createSplitSeats(row, seatCount, price, tier, y) {
        const center = 600;
        const seatWidth = 32;
        const spacing = 10;
        const aisle = 82;
        const leftSeats = Math.floor(seatCount / 2);
        const rightSeats = seatCount - leftSeats;
        const leftStartX = center - (aisle / 2) - (leftSeats * seatWidth + (leftSeats - 1) * spacing);
        const rightStartX = center + (aisle / 2);

        for (let i = 1; i <= leftSeats; i++) {
            const x = leftStartX + (i - 1) * (seatWidth + spacing);
            createSeatNode(`seat${row}${i}`, `${row}${i}`, row, i, price, tier, x, y);
        }
        for (let i = leftSeats + 1; i <= seatCount; i++) {
            const x = rightStartX + (i - leftSeats - 1) * (seatWidth + spacing);
            createSeatNode(`seat${row}${i}`, `${row}${i}`, row, i, price, tier, x, y);
        }
    }

    function createTierSeats(tier, price, startY, rows) {
        let y = startY;
        createTierLabel(tier, price, y - 50);
        rows.forEach(({ row, count }) => {
            createRowLabel(row, y);
            const centerAligned = (tier === "Executive" && ["G", "H"].includes(row)) ||
                (tier === "Corporate" && ["L", "M"].includes(row));
            createSplitSeats(row, count, price, tier, y);
            y += 48;
        });
        return y;
    }

    function createScreen(y) {
        nodes.push({
            id: 'screen',
            width: 600,
            height: 80,
            offsetX: 580,
            offsetY: y,
            constraints: ej.diagrams.NodeConstraints.ReadOnly,
            shape: {
                type: 'Native', content: `<svg width="394" height="56" viewBox="0 0 394 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M27.0321 1.62598L2 37.6661C124.157 52.0822 312.899 43.6728 392 37.6661L364.965 1.62598C276.852 11.8374 148.187 11.8374 27.0321 1.62598Z" stroke="#818CF8" stroke-width="2" stroke-linejoin="round" />
                                    <path d="M2 45.666C124.157 60.0821 312.899 51.6727 392 45.666" stroke="#818CF8" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M27.0321 1.62598L2 37.6661C124.157 52.0822 312.899 43.6728 392 37.6661L364.965 1.62598C276.852 11.8374 148.187 11.8374 27.0321 1.62598Z" fill="#E0E7FF" />
                                </svg>` },
            annotations: [{
                content: 'Screen This Way',
                offset: { x: 0.5, y: 1.5 },
                constraints: ej.diagrams.AnnotationConstraints.ReadOnly,
                style: { fontSize: 14, color: '#818CF8' }
            }]
        });
    }

    function initializeLayout() {
        let y = 50;
        y = createTierSeats("Executive", 25, y, [
            { row: "A", count: 18 }, { row: "B", count: 18 }, { row: "C", count: 18 },
            { row: "D", count: 18 }, { row: "E", count: 18 }, { row: "F", count: 18 },
            { row: "G", count: 16 }, { row: "H", count: 14 }
        ]);
        y += 92;
        y = createTierSeats("Corporate", 16, y, [
            { row: "I", count: 16 }, { row: "J", count: 16 }, { row: "K", count: 16 },
            { row: "L", count: 14 }, { row: "M", count: 12 }
        ]);
        y += 92;
        y = createTierSeats("Budget", 8, y, [
            { row: "N", count: 16 }, { row: "O", count: 16 }, { row: "P", count: 16 }
        ]);
        y += 92;
        createScreen(y);
    }
    initializeLayout();

    const diagram = new ej.diagrams.Diagram({
        width: '100%',
        height: '800px',
        nodes: nodes,
        snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
        tool: ej.diagrams.DiagramTools.ZoomPan | ej.diagrams.DiagramTools.SingleSelect,
        created: () => {
            diagramCreated = true;
            refreshSeatingLayout();
            diagram.fitToPage({ canZoomOut: true });
            bindTimingClicks();
        },
        click: seatClicked,
        load: () => {
            if (diagramCreated) {
                diagram.fitToPage();
            }
        },
    });
    diagram.appendTo('#diagram');

    function bindTimingClicks() {
        var timingItems = document.querySelectorAll('.timing-item');
        timingItems.forEach(function (item) {
            // Don't bind click for sold-out (has pointer-events:none in style OR class)
            var timingId = parseInt(item.getAttribute("data-timing"));
            if (item.classList.contains('sold-out')) return;
            item.onclick = function () {
                // Remove 'selected' class from all
                timingItems.forEach(function (it) { it.classList.remove('selected'); });
                // Add 'selected' class to currently clicked
                item.classList.add('selected');
                // 1. Set selectedTimingId for JS
                selectedTimingId = timingId;
                // 2. Clear seat selection and update booking summary
                selectedSeatsArray = [];
                // 3. Refresh booking UI for the new timing
                refreshSeatingLayout();
                updateBookingSummary();
                updateBookingSummaryUI();
                hideNotification();
                updateDateTime(selectedTimingId - 1);
            };
        });
    }

    function showNotification(message) {
        var notif = document.getElementById("notification");
        notif.textContent = message;
        notif.style.display = "block";
    }
    function hideNotification() {
        var notif = document.getElementById("notification");
        notif.style.display = "none";
    }
    function unselectSeat(seatNode) {
        // Logic for DESELECTING a seat
        const idx = selectedSeatsArray.indexOf(seatNode.id);
        if (idx !== -1) {
            selectedSeatsArray.splice(idx, 1);
        }
        // Reset styling for previously selected seats
        seatNode.style.fill = "transparent";
        seatNode.style.strokeColor = "#9CA3AF";
        if (seatNode.annotations && seatNode.annotations[0] && seatNode.annotations[0].style) {
            seatNode.annotations[0].style.color = "#374151"; // Reset annotation color
        }
    }
    function seatClicked(args) {
        if (args && args.element && args.element instanceof ej.diagrams.Node && args.element.addInfo) {
            var currentNode = args.element;
            if (currentNode.addInfo.Booked) {
                currentNode.tooltip = { content: seatTooltipTemplate(currentNode.addInfo, currentNode) };
                return;
            } else {
                if (!selectedSeatsArray.includes(currentNode.id)) {
                    // --- Get current seat's tier ---
                    var newTier = (currentNode.addInfo.TierCategory || currentNode.addInfo.Tier || "").toString();
                    // --- Find all selected seats' node infos ---
                    var selectedSeats = selectedSeatsArray.map(function (seatId) {
                        var node = diagram.getObject(seatId);
                        return node && node.addInfo ? node : null;
                    }).filter(Boolean);
                    // --- If there are previously selected seats, check their tier ---
                    var currentTier = selectedSeats.length > 0 ?
                        (selectedSeats[0].addInfo.TierCategory || selectedSeats[0].addInfo.Tier || "").toString()
                        : null;
                    var differentTier = currentTier && newTier !== currentTier;
                    // --- Handle switching tier: clear previous, only select new seat ---
                    if (differentTier) {
                        //Iterate backwards to avoid skipping elements after splicing
                        for (let i = selectedSeatsArray.length - 1; i >= 0; i--) {
                            const seatNode = diagram.getObject(selectedSeatsArray[i]);
                            if (seatNode) {
                                unselectSeat(seatNode);
                                // Update tooltip for these deselected original seats
                                seatNode.tooltip.content = seatTooltipTemplate(seatNode.addInfo, seatNode);
                            }
                        }
                        hideNotification();
                    } else if (selectedSeatsArray.length >= 10) {
                        // --- Limit 10 seats ---
                        showNotification("Maximum 10 tickets can be selected");
                        return;
                    }
                    // Now add the new selection
                    selectedSeatsArray.push(currentNode.id);
                    currentNode.style.fill = "#15803D";
                    currentNode.style.strokeColor = "#15803D";
                    if (currentNode.annotations && currentNode.annotations[0]) {
                        currentNode.annotations[0].style.color = "white";
                    }
                    diagram.dataBind();
                    if (selectedSeatsArray.length < 10) {
                        hideNotification();
                    }
                } else {
                    // --- Remove seat ---
                    unselectSeat(currentNode);
                    diagram.dataBind();
                    hideNotification();
                }
                currentNode.tooltip = { content: seatTooltipTemplate(currentNode.addInfo, currentNode) };
                updateBookingSummary();
                updateBookingSummaryUI();
            }
        }
    }
    function updateBookingSummary() {
        if (selectedSeatsArray.length > 0) {
            var selectedSeats = selectedSeatsArray.map(function (seatId) {
                var node = diagram.getObject(seatId);
                if (node && node.addInfo) {
                    var price = parseFloat(node.addInfo.Price);
                    if (isNaN(price)) price = 0;
                    return {
                        SeatNumber: node.addInfo.SeatNumber || "",
                        Row: node.addInfo.Row || "",
                        Price: price,
                        Tier: (node.addInfo.TierCategory || node.addInfo.Tier || "").toString()
                    };
                }
                return null;
            }).filter(Boolean);
            seatSelection.SeatNumbers = selectedSeats.map(s => s.SeatNumber);
            seatSelection.TicketCount = selectedSeats.length;
            var totalAmount = selectedSeats.reduce((sum, s) => sum + (Number(s.Price) || 0), 0);
            seatSelection.Amount = selectedSeats.length ? totalAmount : null;
            seatSelection.Category = selectedSeats.length > 0 ? selectedSeats[0].Tier.toUpperCase() : "";
        } else {
            seatSelection.SeatNumbers = [];
            seatSelection.TicketCount = 0;
            seatSelection.Amount = null;
            seatSelection.Category = "";
        }
    }
    function updateBookingSummaryUI() {
        if (seatSelection.TicketCount > 0) {
            document.getElementById('ticketCount').innerText = seatSelection.TicketCount + " Tickets Selected";
            document.getElementById('totalAmount').innerText = seatSelection.Amount == null ? '$0' : "$" + (seatSelection.Amount + 6);
            document.getElementById('priceHint').style.display = 'block';
            document.getElementById('ticketAmount').innerText = "Tickets: $" + (seatSelection.Amount);
            document.getElementById('feesAmount').innerText = "+ Fees: $" + 6;
        } else {
            document.getElementById('ticketCount').innerText = "0 Tickets Selected";
            document.getElementById('totalAmount').innerText = "$0";
            document.getElementById('priceHint').style.display = 'none';
            document.getElementById('ticketAmount').innerText = "";
            document.getElementById('feesAmount').innerText = "";
        }
        document.getElementById('proceedButton').disabled = seatSelection.TicketCount === 0;
    }

    function updateDateTime(id) {
        const showTiming = showTimings[id];
        const now = new Date();
        const options = {
            weekday: 'long',
            day: '2-digit',
            month: 'short'
        };
        const formatted = now.toLocaleString('en-IN', options);
        document.getElementById('movie-timing').textContent = `${formatted}` + `, ${showTiming.time}`;
        const day = now.toLocaleDateString('en-IN', { weekday: 'short' });
        const date = now.toLocaleDateString('en-IN', { day: '2-digit', month: 'short' });
        document.getElementById('date-label').innerHTML = `${day}<br>${date}`;
    }

    updateDateTime(0);

    function bookSeatsForTiming(timingId, bookingSeatIds) {
        if (!timingSpecificBookedSeats[timingId]) {
            timingSpecificBookedSeats[timingId] = [];
        }
        timingSpecificBookedSeats[timingId].push(...bookingSeatIds);
    }
    // Razor-inspired dialog content builder
    function buildBookingSuccessHtml(movieTitle, theater, showTime, seats, totalAmount, bookingId) {
        return `
  <div class="notification-header">
    <div class="success-icon">&#10003;</div>
    <div class="success-title">Booking Confirmed!</div>
    <div class="success-message">
      Your tickets have been successfully booked.
    </div>
  </div>
  <div class="booking-details">
    <h4>Booking Details:</h4>
    <p><strong>Movie:</strong> ${movieTitle}</p>
    <p><strong>Theater:</strong> ${theater}</p>
    <p><strong>Show Time:</strong> ${showTime}</p>
    <p><strong>Seats:</strong> ${seats}</p>
    <p><strong>Total Amount:</strong> $${totalAmount}</p>
    <p><strong>Booking ID:</strong> ${bookingId}</p>
  </div>
  `;
    }
    // Create the dialog ONCE (not inside proceed click!)
    var bookingDialog = new ej.popups.Dialog({
        cssClass: '',
        content: '',
        width: '435px',
        target: '.control-section',
        isModal: true,
        visible: false,
        showCloseIcon: false,
        buttons: [{
            click: function () { bookingDialog.hide(); },
            buttonModel: { content: 'Close', cssClass: 'btn2 btn2-proceed', isPrimary: true }
        }]
    });
    bookingDialog.appendTo('#bookingSuccessDialog');
    const button = new ej.buttons.Button({ isPrimary: true, disabled: true });
    button.appendTo('#proceedButton');
    document.getElementById('proceedButton').onclick = function () {
        if (selectedSeatsArray.length === 0) return;

        // Mark booked, update timingSpecificBookedSeats, etc...
        bookSeatsForTiming(selectedTimingId, selectedSeatsArray);

        var movieTitle = "F1: The Movie";
        var theater = "Velvet Aurora Cinematheque";
        var showTime = document.getElementById('movie-timing').textContent;
        var seats = seatSelection.SeatNumbers.join(", ");
        var totalAmount = (seatSelection.Amount + 6).toFixed(2);
        var bookingId = 'VAC' + Date.now().toString().slice(-8);

        // Set dialog content with proper classes
        bookingDialog.content = buildBookingSuccessHtml(movieTitle, theater, showTime, seats, totalAmount, bookingId);
        bookingDialog.show();

        // Mark seats as booked,
        selectedSeatsArray.forEach(function (seatId) {
            var node = diagram.getObject(seatId);
            if (node && node.addInfo) {
                node.addInfo.Booked = true;
                node.style.fill = '#E5E7EB';
                node.style.strokeColor = '#E5E7EB';
                if (node.annotations && node.annotations[0]) {
                    node.annotations[0].style.color = '#9CA3AF';
                }
            }
        });

        // Clear select, refresh UI
        selectedSeatsArray = [];
        updateBookingSummary();
        updateBookingSummaryUI();
        refreshSeatingLayout();
        hideNotification();
    };
};
