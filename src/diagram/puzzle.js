/*jslint esversion: 6 */
/**
 * Interactive Image Puzzle
 */
this.default = function () {
    var diagram;
    var gameBoard = new Array(16);
    var emptyIndex = 0;
    var moveCount = 0;
    var gameTimer = null;
    var elapsedSeconds = 0;
    var timeDisplay = "00:00";
    var isPaused = false;
    var gameStarted = false;
    var showWinDialog = false;
    var showClue = false;
    var isPuzzleSolved = false;
    var diagramCreated = false;
    var nodes = [];

    // Image collections
    var imageCollections = [];
    var currentImageMap;
    var currentThemeIndex = 0;
    var imageRandom = Math.random;

    // Constants
    var tileWidth = 130;
    var tileHeight = 130;
    var gridSize = 4;

    initializeImageCollections();
    initializeGame();
    setupTimer();
    createDiagram();
    setupEventListeners();

    function initializeImageCollections() {
        // bridge theme
        var bridgeTheme = {};
        // Nature theme
        var natureTheme = {};
        // Man theme
        var manTheme = {};

        for (var i = 1; i <= 16; i++) {
            var row = Math.ceil(i / 4);
            var col = ((i - 1) % 4) + 1;
            bridgeTheme[i] = `./src/diagram/Images/puzzle/bridge${col}x${row}.png`;
            natureTheme[i] = `./src/diagram/Images/puzzle/image${col}x${row}.png`;
            manTheme[i] = `./src/diagram/Images/puzzle/man${col}x${row}.png`;
        }

        imageCollections = [bridgeTheme, natureTheme, manTheme];
        currentImageMap = imageCollections[0];
        currentThemeIndex = 0;
    }

    function createDiagram() {
        diagram = new ej.diagrams.Diagram({
            height: "800px",
            nodes: nodes,
            snapSettings: {
                constraints: ej.diagrams.SnapConstraints.None
            },
            selectedItems: {
                constraints: ej.diagrams.SelectorConstraints.None
            },
            click: click,
            created: onCreated,
            load: onLoad,
        });

        diagram.appendTo('#diagram');
    }

    function onCreated() {
        diagramCreated = true;
        diagram.fitToPage();
    }
    function onLoad() {
        if (diagramCreated) {
            setTimeout(() => diagram.fitToPage(), 10);
        }
    }
    function createNodes() {
        nodes = [];
        // Background Node
        var backgroundNode = {
            id: "backgroundNode",
            offsetX: 788,
            offsetY: 392,
            height: 755,
            width: 639,
            style: {
                fill: "#B0C4DE",
                opacity: 0.5
            },
            constraints: ej.diagrams.NodeConstraints.None,
            shape: {
                type: 'Basic',
                shape: 'Rectangle',
                cornerRadius: 5
            }
        };
        nodes.push(backgroundNode);

        // Moves counter node
        var moveNode = {
            id: "moves",
            offsetX: 613,
            offsetY: 80,
            width: 160, height: 100,
            constraints: ej.diagrams.NodeConstraints.None,
            shape: {
                type: 'HTML',
                content: getMovesTemplate()
            }
        };
        nodes.push(moveNode);

        // Time node
        var timeNode = {
            id: "time",
            offsetX: 980,
            offsetY: 80,
            width: 160, height: 100,
            constraints: ej.diagrams.NodeConstraints.None,
            shape: {
                type: 'HTML',
                content: getTimeTemplate()
            }
        };
        nodes.push(timeNode);

        // New game button
        var newGameNode = {
            id: "newgame",
            offsetX: 610,
            offsetY: 725,
            width: 150, height: 50,
            constraints: ej.diagrams.NodeConstraints.PointerEvents,
            shape: {
                type: 'HTML',
                content: getNewGameTemplate()
            }
        };
        nodes.push(newGameNode);

        // Pause button
        var pauseNode = {
            id: "pause",
            offsetX: 980,
            offsetY: 725,
            width: 150, height: 50,
            constraints: ej.diagrams.NodeConstraints.PointerEvents,
            shape: {
                type: 'HTML',
                content: getPauseTemplate()
            }
        };
        nodes.push(pauseNode);

        // Clue button
        var clueNode = {
            id: "clue",
            offsetX: 795,
            offsetY: 725,
            width: 150, height: 50,
            constraints: ej.diagrams.NodeConstraints.PointerEvents,
            shape: {
                type: 'HTML',
                content: getClueTemplate()
            }
        };
        nodes.push(clueNode);

        // Create puzzle tiles
        for (var i = 0; i < gameBoard.length; i++) {
            if (gameBoard[i] !== 0) {
                var pieceNumber = gameBoard[i];
                var isInCorrectPosition = (i + 1) === pieceNumber;

                var node = {
                    id: `tile${pieceNumber}`,
                    width: tileWidth,
                    height: tileHeight,
                    offsetX: getTileX(i),
                    offsetY: getTileY(i),
                    annotations: [{
                        id: `annotation${pieceNumber}`,
                        width: 25,
                        height: 25,
                        template: getAnnotationTemplate(pieceNumber),
                        visibility: false,
                        offset: { x: 0.7, y: 0.1 },
                        horizontalAlignment: 'Center',
                        verticalAlignment: 'Center'
                    }],
                    style: {
                        strokeColor: "white"
                    },
                    shape: {
                        type: 'Image',
                        source: getImageSourceForTile(pieceNumber)
                    }
                };

                if (canMoveTile(i)) {
                    node.constraints = ej.diagrams.NodeConstraints.PointerEvents;
                } else {
                    node.constraints = ej.diagrams.NodeConstraints.None;
                }

                nodes.push(node);
            }
        }
    }

    function getMovesTemplate() {
        return `<div class="moves-counter">
                    <span class="label">MOVES :</span>
                    <span class="count">${moveCount}</span>
                </div>`;
    }

    function getTimeTemplate() {
        return `<div class="timer">
                    <span class="label">TIME: </span>
                    <span class="time-display">${timeDisplay}</span>
                </div>`;
    }

    function getNewGameTemplate() {
        return `<button class="new-game-btn" id="newGameBtn">
                    <span class="icon">🎮</span>
                    NEW GAME
                </button>`;
    }

    function getClueTemplate() {
        return `<button class="clue-btn" id="clueBtn">
                    <span class="icon">💡</span>
                    <span class="text">${showClue ? "HIDE CLUE" : "SHOW CLUE"}</span>
                </button>`;
    }

    function getPauseTemplate() {
        return `<button class="pause-btn" id="pauseBtn">
                    <span class="icon">${isPaused ? "▶️" : "⏸️"}</span>
                    <span class="text">${isPaused ? "RESUME" : "PAUSE"}</span>
                </button>`;
    }

    function getAnnotationTemplate(pieceNumber) {
        return `<div class="number-badge">${pieceNumber}</div>`;
    }

    function initializeGame() {
        // Initialize solved state
        for (var i = 0; i < 15; i++) {
            gameBoard[i] = i + 1;
        }
        gameBoard[15] = 0;

        emptyIndex = 15;
        shuffleBoard();
        moveCount = 0;
        isPuzzleSolved = false;
        elapsedSeconds = 0;
        updateTimeDisplay();
        gameStarted = false;
        createNodes();
    }

    function setupTimer() {
        gameTimer = setInterval(() => {
            onTimerElapsed();
        }, 1000);
    }

    function onTimerElapsed() {
        if (!isPaused && gameStarted && !isPuzzleSolved) {
            elapsedSeconds++;
            updateTimeDisplay();
            updateUI();
        }
    }

    function updateTimeDisplay() {
        var minutes = Math.floor(elapsedSeconds / 60);
        var seconds = elapsedSeconds % 60;
        timeDisplay = padZero(minutes) + ':' + padZero(seconds);
    }
    function padZero(num) {
        return (num < 10 ? '0' : '') + num;
    }

    function getTileX(index) {
        var col = index % gridSize;
        var startX = 600;
        return startX + (col * tileWidth);
    }

    function getTileY(index) {
        var row = Math.floor(index / gridSize);
        var startY = 200;
        return startY + (row * tileHeight);
    }

    function canMoveTile(tileIndex) {
        var tileRow = Math.floor(tileIndex / 4);
        var tileCol = tileIndex % 4;
        var emptyRow = Math.floor(emptyIndex / 4);
        var emptyCol = emptyIndex % 4;

        var isVerticallyAdjacent = (Math.abs(tileRow - emptyRow) === 1 && tileCol === emptyCol);
        var isHorizontallyAdjacent = (Math.abs(tileCol - emptyCol) === 1 && tileRow === emptyRow);

        return isVerticallyAdjacent || isHorizontallyAdjacent;
    }

    function addFinalPiece() {
        var finalPiece = {
            id: "tile16final",
            width: 130,
            height: 130,
            offsetX: getTileX(15),
            offsetY: getTileY(15),
            style: {
                fill: "transparent",
                strokeColor: "#FFD700",
                strokeWidth: 4
            },
            shape: {
                type: 'Image',
                source: getImageSourceForTile(16)
            },
            annotations: [{
                id: "annotation16",
                width: 25,
                height: 25,
                template: getAnnotationTemplate(16),
                offset: { x: 0.9, y: 0.1 },
                horizontalAlignment: 'Center',
                verticalAlignment: 'Center'
            }],
            constraints: ej.diagrams.NodeConstraints.None
        };

        diagram.add(finalPiece);
    }

    function checkPuzzleSolved() {
        var solved = true;
        for (var i = 0; i < 15; i++) {
            if (gameBoard[i] !== i + 1) {
                solved = false;
                break;
            }
        }
        if (solved && gameBoard[15] !== 0) {
            solved = false;
        }
        if (solved && emptyIndex === 15) {
            isPuzzleSolved = true;
            if (gameTimer) {
                clearInterval(gameTimer);
            }

            addFinalPiece();
            showCompletionMessage();
        }
    }

    function moveTileToEmptySpace(tileNumber) {
        var tileIndex = gameBoard.indexOf(tileNumber);
        if (!canMoveTile(tileIndex)) return;

        if (!gameStarted) {
            gameStarted = true;
            elapsedSeconds = 0;
            updateTimeDisplay();
        }

        var oldEmptyIndex = emptyIndex;
        gameBoard[emptyIndex] = tileNumber;
        gameBoard[tileIndex] = 0;
        emptyIndex = tileIndex;
        moveCount++;

        var node = diagram.getObject(`tile${tileNumber}`);
        if (node) {
            node.offsetX = getTileX(oldEmptyIndex);
            node.offsetY = getTileY(oldEmptyIndex);
            diagram.dataBind();
        }

        enableAdjacentNodes();
        checkPuzzleSolved();
        updateUI();
    }

    function newGame() {
        if (gameTimer) {
            clearInterval(gameTimer);
        }
        selectRandomImageCollection();
        moveCount = 0;
        elapsedSeconds = 0;
        gameStarted = false;
        isPaused = false;
        isPuzzleSolved = false;
        showWinDialog = false;
        showClue = false;

        // Reset board
        for (var i = 0; i < 15; i++) {
            gameBoard[i] = i + 1;
        }
        gameBoard[15] = 0;
        emptyIndex = 15;

        updateTimeDisplay();
        shuffleBoard();
        clearDiagramNodes();
        createNodes();
        diagram.nodes = nodes;
        enableAdjacentNodes();
        setupTimer();
        updateUI();
    }

    function shuffleBoard() {
        for (var i = 0; i < 1000; i++) {
            var validMoves = getValidMoves();
            if (validMoves.length > 0) {
                var randomMove = validMoves[Math.floor(imageRandom() * validMoves.length)];
                gameBoard[emptyIndex] = gameBoard[randomMove];
                gameBoard[randomMove] = 0;
                emptyIndex = randomMove;
            }
        }
    }

    function getValidMoves() {
        var validMoves = [];
        var emptyRow = Math.floor(emptyIndex / 4);
        var emptyCol = emptyIndex % 4;
        var directions = [-4, 4, -1, 1];

        for (var dir of directions) {
            var newIndex = emptyIndex + dir;
            if (newIndex >= 0 && newIndex < 16) {
                var newRow = Math.floor(newIndex / 4);
                var newCol = newIndex % 4;
                if ((dir === -1 || dir === 1) && Math.abs(newRow - emptyRow) === 0 && Math.abs(newCol - emptyCol) === 1) {
                    validMoves.push(newIndex);
                } else if ((dir === -4 || dir === 4) && Math.abs(newRow - emptyRow) === 1 && Math.abs(newCol - emptyCol) === 0) {
                    validMoves.push(newIndex);
                }
            }
        }

        return validMoves;
    }

    function togglePause() {
        isPaused = !isPaused;

        if (isPaused) {
            if (gameTimer) {
                clearInterval(gameTimer);
            }
            disableAllNodes();
        } else {
            setupTimer();
            enableAdjacentNodes();
        }

        updateUI();
    }

    function disableAllNodes() {
        for (var node of diagram.nodes) {
            if (node.id.startsWith("tile")) {
                node.constraints = ej.diagrams.NodeConstraints.None;
            }
        }
        diagram.dataBind();
    }

    function clearDiagramNodes() {
        if (diagram) {
            var existingNodes = [...diagram.nodes];
            for (var node of existingNodes) {
                diagram.remove(node);
            }
        }
        nodes = [];
    }

    function enableAdjacentNodes() {
        for (const node of diagram.nodes) {
            if (node.id.startsWith("tile")) {
                const tileNumber = parseInt(node.id.substring(4));
                const tileIndex = gameBoard.indexOf(tileNumber);

                if (canMoveTile(tileIndex)) {
                    node.constraints = ej.diagrams.NodeConstraints.PointerEvents;
                } else {
                    node.constraints = ej.diagrams.NodeConstraints.None;
                }
            }
        }
        diagram.dataBind();
    }

    function toggleClue() {
        showClue = !showClue;
        for (var node of diagram.nodes) {
            if (node.annotations && node.annotations.length > 0) {
                node.annotations[0].visibility = showClue;
            }
        }
        diagram.dataBind();
        updateUI();
    }

    function selectRandomImageCollection() {
        if (imageCollections.length > 1) {
            var newIndex;
            do {
                newIndex = Math.floor(imageRandom() * imageCollections.length);
            } while (newIndex === currentThemeIndex);

            currentThemeIndex = newIndex;
            currentImageMap = imageCollections[currentThemeIndex];
        }
    }

    function getImageSourceForTile(tileNumber) {
        return currentImageMap && currentImageMap[tileNumber] ? currentImageMap[tileNumber] : "";
    }

    function showCompletionMessage() {
        showWinDialog = true;
        var winDialog = document.getElementById('winDialog');
        var finalMoves = document.getElementById('finalMoves');
        if (winDialog) {
            winDialog.style.display = 'flex';
        }
        if (finalMoves) {
            finalMoves.textContent = moveCount.toString()+" steps in " + timeDisplay;
        }
    }

    function closeWinDialog() {
        showWinDialog = false;
        var winDialog = document.getElementById('winDialog');
        if (winDialog) {
            winDialog.style.display = 'none';
        }
        newGame();
    }

    function updateUI() {
        // Update moves counter
        var moveNode = diagram.getObject('moves');
        if (moveNode && moveNode.shape && (moveNode.shape).content) {
            (moveNode.shape).content = getMovesTemplate();
        }

        // Update timer
        var timeNode = diagram.getObject('time');
        if (timeNode && timeNode.shape && (timeNode.shape).content) {
            (timeNode.shape).content = getTimeTemplate();
        }

        // Update pause button
        var pauseNode = diagram.getObject('pause');
        if (pauseNode && pauseNode.shape && (pauseNode.shape).content) {
            (pauseNode.shape).content = getPauseTemplate();
        }

        // Update clue button
        var clueNode = diagram.getObject('clue');
        if (clueNode && clueNode.shape && (clueNode.shape).content) {
            (clueNode.shape).content = getClueTemplate();
        }

        diagram.dataBind();
    }

    function setupEventListeners() {
        document.getElementById('winClose').addEventListener('click', () => closeWinDialog());
    }

    function click(args) {
        if (args.actualObject instanceof ej.diagrams.Node) {
            var node = args.actualObject;
            if (node.id === 'newgame') {
                newGame();
            }
            else if (node.id === 'pause') {
                togglePause();
            }
            else if (node.id === 'clue') {
                toggleClue();
            }
            else if (node.id.startsWith("tile")) {
                if (isPaused || isPuzzleSolved) return;

                if (!gameStarted) {
                    gameStarted = true;
                    elapsedSeconds = 0;
                    updateTimeDisplay();
                }

                var nodeId = node.id;
                if (nodeId.startsWith("tile")) {
                    var tileNumber = parseInt(nodeId.substring(4));
                    moveTileToEmptySpace(tileNumber);
                }
            }
        }
    }
};
