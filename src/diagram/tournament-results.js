/**
 * Tournament Results Diagram - UEFA Champions League 2023-24
 */

this.default = function () {
    // Initialize diagram variable
    var diagram;

    // UEFA Champions League 2023-24 Tournament Data
    var tournamentData = [
        // Round of 16 matches
        { id: 'round16_1', team1: 'BAYERN MUNCHEN', score1: 3, team2: 'LAZIO', score2: 1, winner: 'BAYERN MUNCHEN', matchType: 'round16' },
        { id: 'round16_2', team1: 'ARSENAL', score1: 1, shootoutTeam1: '4', team2: 'PORTO', score2: 1, shootoutTeam2: '2', winner: 'ARSENAL', matchType: 'round16' },
        { id: 'round16_3', team1: 'COPENHAGEN', score1: 2, team2: 'MANCHESTER CITY', score2: 6, winner: 'MANCHESTER CITY', matchType: 'round16' },
        { id: 'round16_4', team1: 'LEIPZIG', score1: 1, team2: 'REAL MADRID', score2: 2, winner: 'REAL MADRID', matchType: 'round16' },
        { id: 'round16_5', team1: 'BORUSSIA DORTMUND', score1: 3, team2: 'PSV EINDHOVEN', score2: 1, winner: 'BORUSSIA DORTMUND', matchType: 'round16' },
        { id: 'round16_6', team1: 'ATLETICO MADRID', score1: 2, shootoutTeam1: '3', team2: 'INTER MILAN', score2: 2, shootoutTeam2: '2', winner: 'ATLETICO MADRID', matchType: 'round16' },
        { id: 'round16_7', team1: 'REAL SOCIEDAD', score1: 1, team2: 'PARIS SAINT-GERMAIN', score2: 4, winner: 'PARIS SAINT-GERMAIN', matchType: 'round16' },
        { id: 'round16_8', team1: 'BARCELONA', score1: 4, team2: 'NAPOLI', score2: 2, winner: 'BARCELONA', matchType: 'round16' },
        
        // Quarterfinal matches
        { id: 'quarter1', team1: 'BAYERN MUNCHEN', score1: 3, team2: 'ARSENAL', score2: 2, winner: 'BAYERN MUNCHEN', matchType: 'quarterfinal' },
        { id: 'quarter2', team1: 'MANCHESTER CITY', score1: 4, shootoutTeam1: '3', team2: 'REAL MADRID', score2: 4, shootoutTeam2: '4', winner: 'REAL MADRID', matchType: 'quarterfinal' },
        { id: 'quarter3', team1: 'BORUSSIA DORTMUND', score1: 5, team2: 'ATLETICO MADRID', score2: 4, winner: 'BORUSSIA DORTMUND', matchType: 'quarterfinal' },
        { id: 'quarter4', team1: 'BARCELONA', score1: 4, team2: 'PARIS SAINT-GERMAIN', score2: 6, winner: 'PARIS SAINT-GERMAIN', matchType: 'quarterfinal' },
        
        // Semifinal matches
        { id: 'semi1', team1: 'BAYERN MUNCHEN', score1: 3, team2: 'REAL MADRID', score2: 4, winner: 'REAL MADRID', matchType: 'semifinal' },
        { id: 'semi2', team1: 'PARIS SAINT-GERMAIN', score1: 0, team2: 'BORUSSIA DORTMUND', score2: 2, winner: 'BORUSSIA DORTMUND', matchType: 'semifinal' },
        
        // Final match
        { id: 'final', team1: 'REAL MADRID', score1: 2, team2: 'BORUSSIA DORTMUND', score2: 0, winner: 'REAL MADRID', matchType: 'final' },
        
        // Champion
        { id: 'champion', team1: 'REAL MADRID', team2: 'BORUSSIA DORTMUND', score1: 2, score2: 0, winner: 'REAL MADRID', year: '2023-24', matchType: 'champion' }
    ];

    // Create detailed tooltip content for match information
    function createTooltipContent(data) {
        var tooltipDiv = document.createElement('div');
        tooltipDiv.classList.add('football-results-tooltip-content');
        // Apply UEFA themed styling to tooltip
        tooltipDiv.style.cssText = 
            'background: linear-gradient(135deg, #001122 0%, #003366 100%);' +
            'border-radius: 12px; padding: 16px; color: white;' +
            'font-family: "Verdana", sans-serif; min-width: 300px; max-width: 380px;' +
            'box-shadow: 0 10px 30px rgba(0,0,0,0.5); position: relative; z-index: 1000;';
        
        // Format match type display text
        var matchTypeDisplay = data.matchType === 'round16' ? 'ROUND OF 16' : 
                               data.matchType === 'quarterfinal' ? 'QUARTER-FINAL' :
                               data.matchType === 'semifinal' ? 'SEMI-FINAL' :
                               data.matchType === 'final' ? 'FINAL' :
                               data.matchType === 'champion' ? 'CHAMPION' : data.matchType.toUpperCase();
        
        // Check for penalty shootout data
        var hasShootout = data.shootoutTeam1 && data.shootoutTeam2;
        var shootoutDisplay = hasShootout ? 
            '<div style="font-size: 11px; color: #87CEEB; margin-top: 8px; text-align: center;">' +
                '<span style="color: #FFD700;">Penalty Shootout:</span> ' + data.shootoutTeam1 + ' - ' + data.shootoutTeam2 +
            '</div>' : '';
        
        // Apply winner styling
        var team1WinnerStyle = data.winner === data.team1 ? 'color: #FFD700; font-weight: bold;' : '';
        var team2WinnerStyle = data.winner === data.team2 ? 'color: #FFD700; font-weight: bold;' : '';
        
        // Build tooltip HTML content
        tooltipDiv.innerHTML = 
            '<div style="text-align: center;">' +
                '<div style="font-size: 11px; font-weight: bold; color: #FFD700; margin-bottom: 6px; letter-spacing: 1px;">UEFA CHAMPIONS LEAGUE</div>' +
                '<div style="font-size: 10px; color: #87CEEB; margin-bottom: 12px; font-weight: 600;">' + matchTypeDisplay + '</div>' +
                '<div style="background: rgba(255,255,255,0.1); border-radius: 8px; padding: 12px; margin-bottom: 10px;">' +
                    '<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">' +
                        '<div style="flex: 1; text-align: left;"><div style="font-size: 14px; font-weight: bold; ' + team1WinnerStyle + '">' + data.team1 + '</div></div>' +
                        '<div style="font-size: 20px; font-weight: bold; color: #fff; margin: 0 15px;">' + data.score1 + '</div>' +
                    '</div>' +
                    '<div style="text-align: center; margin: 8px 0;">' +
                        '<div style="height: 1px; background: linear-gradient(90deg, transparent, #FFD700, transparent);"></div>' +
                        '<div style="font-size: 10px; color: #87CEEB; margin: 4px 0;">VS</div>' +
                        '<div style="height: 1px; background: linear-gradient(90deg, transparent, #FFD700, transparent);"></div>' +
                    '</div>' +
                    '<div style="display: flex; justify-content: space-between; align-items: center;">' +
                        '<div style="flex: 1; text-align: left;"><div style="font-size: 14px; font-weight: bold; ' + team2WinnerStyle + '">' + data.team2 + '</div></div>' +
                        '<div style="font-size: 20px; font-weight: bold; color: #fff; margin: 0 15px;">' + data.score2 + '</div>' +
                    '</div>' +
                    shootoutDisplay +
                '</div>' +
                '<div style="background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%); color: #001122; padding: 8px 12px; border-radius: 6px; font-weight: bold; font-size: 12px;">' +
                    'WINNER: ' + data.winner +
                '</div>' +
            '</div>';
        
        return tooltipDiv;
    }

    // Generate HTML template for tournament nodes
    function getNodeTemplate(data) {
        // Handle champion node template
        if (data.matchType === 'champion') {
            return '<div class="tournament-node champion-node" data-id="' + data.id + '">' +
                        '<div class="champion-container">' +
                            '<div class="champion-badge"><div class="champion-trophy">🏆</div></div>' +
                            '<div class="champion-title">CHAMPION</div>' +
                            '<div class="champion-info" style="opacity: 0;">' +
                                '<div class="champion-team">' + (data.winner || 'TBD') + '</div>' +
                                '<div class="champion-year">' + (data.year || '2024') + '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>';
        }
        
        // Determine winner classes for styling
        var team1Class = data.winner === data.team1 ? 'winner' : '';
        var team2Class = data.winner === data.team2 ? 'winner' : '';
        
        // Get round display name
        var roundDisplayName = data.matchType === 'round16' ? 'ROUND OF 16' : 
                            data.matchType === 'quarterfinal' ? 'QUARTER-FINAL' :
                            data.matchType === 'semifinal' ? 'SEMI-FINAL' :
                            data.matchType === 'final' ? 'FINAL' : 'MATCH';
        
        // Return match node template with flip card structure
        return '<div class="tournament-node ' + data.matchType + '-node" data-id="' + data.id + '">' +
                    '<div class="flip-card">' +
                        '<div class="flip-card-inner">' +
                            '<div class="flip-card-front">' +
                                '<div style="height: 100%; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, rgba(0, 51, 102, 0.9) 0%, rgba(0, 68, 136, 0.9) 100%);">' +
                                    '<div style="text-align: center; color: #cbe5feff; font-weight: 600; font-size: 16px; letter-spacing: 2px; text-shadow: 0 2px 4px rgba(0, 14, 87, 0.7);">' + roundDisplayName + '</div>' +
                                '</div>' +
                            '</div>' +
                            '<div class="flip-card-back">' +
                                '<div class="team-section team-top ' + team1Class + '">' +
                                    '<span class="team-name">' + (data.team1 || 'TBD') + '</span>' +
                                    '<span class="team-score score-right">' + (data.score1 !== undefined ? data.score1 : '') + '</span>' +
                                '</div>' +
                                '<div class="team-section team-bottom ' + team2Class + '">' +
                                    '<span class="team-name">' + (data.team2 || 'TBD') + '</span>' +
                                    '<span class="team-score score-right">' + (data.score2 !== undefined ? data.score2 : '') + '</span>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>';
    }

    // Find tournament data by ID with fallback
    function findData(id) {
        var found = tournamentData.find(function(item) { return item.id === id; });
        if (found) return found;
        
        // Return default data structure if not found
        return { 
            id: id, team1: 'TBD', team2: 'TBD', score1: '', score2: '', winner: '', 
            matchType: id.includes('round16') ? 'round16' : 
                       id.includes('quarter') ? 'quarterfinal' : 
                       id.includes('semi') ? 'semifinal' : 
                       id.includes('final') ? 'final' : 'round16'
        };
    }

    // Multi Segment Connector Bend
    var angleTiltAmountForRound16ToQuarter = 60;
    var angleTiltAmountForQuarterToSemi = 130;

    // Node Size 
    var championNodeSize = {w: 280, h: 200};
    var tournamentNodeSize = {w: 180, h: 100}; 

    // X-offset positions for tournament nodes
    var offsetXIncreaseAmount = 280;
    var leftRound16NodesOffsetX = offsetXIncreaseAmount;
    var leftQuarterFinalNodesOffsetX = leftRound16NodesOffsetX + offsetXIncreaseAmount;
    var leftSemiFinalNodesOffsetX = leftQuarterFinalNodesOffsetX + offsetXIncreaseAmount;

    var finalNodeOffsetX = leftSemiFinalNodesOffsetX + offsetXIncreaseAmount;

    var rightSemiFinalNodesOffsetX = finalNodeOffsetX + offsetXIncreaseAmount;
    var rightQuarterFinalNodesOffsetX = rightSemiFinalNodesOffsetX + offsetXIncreaseAmount;
    var rightRound16NodesOffsetX = rightQuarterFinalNodesOffsetX + offsetXIncreaseAmount;

    // Y-offset positions for tournament nodes
    var offsetYIncreaseAmount = 190;
    var round16TopOffsetY = offsetYIncreaseAmount;
    var round16UpperMiddleOffsetY = round16TopOffsetY + offsetYIncreaseAmount;
    var round16LowerMiddleOffsetY = round16UpperMiddleOffsetY + offsetYIncreaseAmount;
    var round16BottomOffsetY = round16LowerMiddleOffsetY + offsetYIncreaseAmount;
    
    var quarterFinalTopOffsetY = (round16TopOffsetY + round16UpperMiddleOffsetY) / 2;
    var quarterFinalBottomOffsetY = (round16LowerMiddleOffsetY + round16BottomOffsetY) / 2 ;
    
    var semiFinalOffsetY = (quarterFinalTopOffsetY + quarterFinalBottomOffsetY) / 2;
    var finalNodeOffsetY = semiFinalOffsetY;
    var championNodeOffsetY = finalNodeOffsetY - 350;

    
    // Initialize and configure the diagram
    function initializeDiagram() {
        // Hide loading indicator
        document.getElementById('loading').style.display = 'none';
        
        // Define all tournament nodes with positions and properties
        var nodes = [
            // Champion node (top center)
            { id: 'champion', offsetX: finalNodeOffsetX, offsetY: championNodeOffsetY, width: championNodeSize.w, height: championNodeSize.h, 
              shape: { type: 'HTML', content: getNodeTemplate(findData('champion')) }},
            
            // Final node (center)
            { id: 'final', offsetX: finalNodeOffsetX, offsetY: finalNodeOffsetY, width: tournamentNodeSize.w, height: tournamentNodeSize.h, 
              shape: { type: 'HTML', content: getNodeTemplate(findData('final')) },
              constraints: ej.diagrams.NodeConstraints.Default | ej.diagrams.NodeConstraints.Tooltip,
              tooltip: { content: createTooltipContent(findData('final')), position: 'TopCenter', relativeMode: 'Object' }},
            
            // Semifinal nodes
            { id: 'semi1', offsetX: leftSemiFinalNodesOffsetX, offsetY: semiFinalOffsetY, width: tournamentNodeSize.w, height: tournamentNodeSize.h, 
              shape: { type: 'HTML', content: getNodeTemplate(findData('semi1')) },
              constraints: ej.diagrams.NodeConstraints.Default | ej.diagrams.NodeConstraints.Tooltip,
              tooltip: { content: createTooltipContent(findData('semi1')), position: 'TopCenter', relativeMode: 'Object' }},
            { id: 'semi2', offsetX: rightSemiFinalNodesOffsetX, offsetY: semiFinalOffsetY, width: tournamentNodeSize.w, height: tournamentNodeSize.h, 
              shape: { type: 'HTML', content: getNodeTemplate(findData('semi2')) },
              constraints: ej.diagrams.NodeConstraints.Default | ej.diagrams.NodeConstraints.Tooltip,
              tooltip: { content: createTooltipContent(findData('semi2')), position: 'TopCenter', relativeMode: 'Object' }},
            
            // Quarterfinal nodes(left side)
            { id: 'quarter1', offsetX: leftQuarterFinalNodesOffsetX, offsetY: quarterFinalTopOffsetY, width: tournamentNodeSize.w, height: tournamentNodeSize.h, 
              shape: { type: 'HTML', content: getNodeTemplate(findData('quarter1')) },
              constraints: ej.diagrams.NodeConstraints.Default | ej.diagrams.NodeConstraints.Tooltip,
              tooltip: { content: createTooltipContent(findData('quarter1')), position: 'RightCenter', relativeMode: 'Object' }},
            { id: 'quarter2', offsetX: leftQuarterFinalNodesOffsetX, offsetY: quarterFinalBottomOffsetY, width: tournamentNodeSize.w, height: tournamentNodeSize.h, 
              shape: { type: 'HTML', content: getNodeTemplate(findData('quarter2')) },
              constraints: ej.diagrams.NodeConstraints.Default | ej.diagrams.NodeConstraints.Tooltip,
              tooltip: { content: createTooltipContent(findData('quarter2')), position: 'RightCenter', relativeMode: 'Object' } },
            // (right side)
            { id: 'quarter3', offsetX: rightQuarterFinalNodesOffsetX, offsetY: quarterFinalTopOffsetY, width: tournamentNodeSize.w, height: tournamentNodeSize.h, 
              shape: { type: 'HTML', content: getNodeTemplate(findData('quarter3')) },
              constraints: ej.diagrams.NodeConstraints.Default | ej.diagrams.NodeConstraints.Tooltip,
              tooltip: { content: createTooltipContent(findData('quarter3')), position: 'LeftCenter', relativeMode: 'Object' }},
            { id: 'quarter4', offsetX: rightQuarterFinalNodesOffsetX, offsetY: quarterFinalBottomOffsetY, width: tournamentNodeSize.w, height: tournamentNodeSize.h, 
              shape: { type: 'HTML', content: getNodeTemplate(findData('quarter4')) },
              constraints: ej.diagrams.NodeConstraints.Default | ej.diagrams.NodeConstraints.Tooltip,
              tooltip: { content: createTooltipContent(findData('quarter4')), position: 'LeftCenter', relativeMode: 'Object' }},
            
            // Round of 16 nodes (left side)
            { id: 'round16_1', offsetX: leftRound16NodesOffsetX, offsetY: round16TopOffsetY, width: tournamentNodeSize.w, height: tournamentNodeSize.h, 
              shape: { type: 'HTML', content: getNodeTemplate(findData('round16_1')) },
              constraints: ej.diagrams.NodeConstraints.Default | ej.diagrams.NodeConstraints.Tooltip,
              tooltip: { content: createTooltipContent(findData('round16_1')), position: 'RightCenter', relativeMode: 'Object' }},
            { id: 'round16_2', offsetX: leftRound16NodesOffsetX, offsetY: round16UpperMiddleOffsetY, width: tournamentNodeSize.w, height: tournamentNodeSize.h, 
              shape: { type: 'HTML', content: getNodeTemplate(findData('round16_2')) },
              constraints: ej.diagrams.NodeConstraints.Default | ej.diagrams.NodeConstraints.Tooltip,
              tooltip: { content: createTooltipContent(findData('round16_2')), position: 'RightCenter', relativeMode: 'Object' }},
            { id: 'round16_3', offsetX: leftRound16NodesOffsetX, offsetY: round16LowerMiddleOffsetY, width: tournamentNodeSize.w, height: tournamentNodeSize.h, 
              shape: { type: 'HTML', content: getNodeTemplate(findData('round16_3')) },
              constraints: ej.diagrams.NodeConstraints.Default | ej.diagrams.NodeConstraints.Tooltip,
              tooltip: { content: createTooltipContent(findData('round16_3')), position: 'RightCenter', relativeMode: 'Object' }},
            { id: 'round16_4', offsetX: leftRound16NodesOffsetX, offsetY: round16BottomOffsetY, width: tournamentNodeSize.w, height: tournamentNodeSize.h, 
              shape: { type: 'HTML', content: getNodeTemplate(findData('round16_4')) },
              constraints: ej.diagrams.NodeConstraints.Default | ej.diagrams.NodeConstraints.Tooltip,
              tooltip: { content: createTooltipContent(findData('round16_4')), position: 'RightCenter', relativeMode: 'Object' }},
            
            // Round of 16 nodes (right side)
            { id: 'round16_5', offsetX: rightRound16NodesOffsetX, offsetY: round16TopOffsetY, width: tournamentNodeSize.w, height: tournamentNodeSize.h, 
              shape: { type: 'HTML', content: getNodeTemplate(findData('round16_5')) },
              constraints: ej.diagrams.NodeConstraints.Default | ej.diagrams.NodeConstraints.Tooltip,
              tooltip: { content: createTooltipContent(findData('round16_5')), position: 'LeftCenter', relativeMode: 'Object' }},
            { id: 'round16_6', offsetX: rightRound16NodesOffsetX, offsetY: round16UpperMiddleOffsetY, width: tournamentNodeSize.w, height: tournamentNodeSize.h, 
              shape: { type: 'HTML', content: getNodeTemplate(findData('round16_6')) },
              constraints: ej.diagrams.NodeConstraints.Default | ej.diagrams.NodeConstraints.Tooltip,
              tooltip: { content: createTooltipContent(findData('round16_6')), position: 'LeftCenter', relativeMode: 'Object' }},
            { id: 'round16_7', offsetX: rightRound16NodesOffsetX, offsetY: round16LowerMiddleOffsetY, width: tournamentNodeSize.w, height: tournamentNodeSize.h, 
              shape: { type: 'HTML', content: getNodeTemplate(findData('round16_7')) },
              constraints: ej.diagrams.NodeConstraints.Default | ej.diagrams.NodeConstraints.Tooltip,
              tooltip: { content: createTooltipContent(findData('round16_7')), position: 'LeftCenter', relativeMode: 'Object' }},
            { id: 'round16_8', offsetX: rightRound16NodesOffsetX, offsetY: round16BottomOffsetY, width: tournamentNodeSize.w, height: tournamentNodeSize.h, 
              shape: { type: 'HTML', content: getNodeTemplate(findData('round16_8')) },
              constraints: ej.diagrams.NodeConstraints.Default | ej.diagrams.NodeConstraints.Tooltip,
              tooltip: { content: createTooltipContent(findData('round16_8')), position: 'LeftCenter', relativeMode: 'Object' }}
        ];

        // Define all connectors linking tournament progression
        var connectors = [
            // Champion connection
            { id: 'champ1', sourceID: 'final', targetID: 'champion'},
            
            // Final connections
            { id: 'final1', sourceID: 'semi1', targetID: 'final'},
            { id: 'final2', sourceID: 'semi2', targetID: 'final'},
            
            // Semifinal connections
            { id: 'semi1_1', segments: [{ point: { x: leftSemiFinalNodesOffsetX - angleTiltAmountForQuarterToSemi, y: quarterFinalTopOffsetY }}], sourceID: 'quarter1', targetID: 'semi1'},
            { id: 'semi1_2', segments: [{ point: { x: leftSemiFinalNodesOffsetX - angleTiltAmountForQuarterToSemi, y: quarterFinalBottomOffsetY }}], sourceID: 'quarter2', targetID: 'semi1'},
            { id: 'semi2_1', segments: [{ point: { x: rightSemiFinalNodesOffsetX + angleTiltAmountForQuarterToSemi, y: quarterFinalTopOffsetY }}], sourceID: 'quarter3', targetID: 'semi2'},
            { id: 'semi2_2', segments: [{ point: { x: rightSemiFinalNodesOffsetX + angleTiltAmountForQuarterToSemi, y: quarterFinalBottomOffsetY }}], sourceID: 'quarter4', targetID: 'semi2'},
            
            // Quarterfinal connections
            { id: 'quarter1_1', segments: [{ point: { x: leftQuarterFinalNodesOffsetX - angleTiltAmountForRound16ToQuarter, y: round16TopOffsetY }}], sourceID: 'round16_1', targetID: 'quarter1'},
            { id: 'quarter1_2', segments: [{ point: { x: leftQuarterFinalNodesOffsetX - angleTiltAmountForRound16ToQuarter, y: round16UpperMiddleOffsetY }}], sourceID: 'round16_2', targetID: 'quarter1'},
            { id: 'quarter2_1', segments: [{ point: { x: leftQuarterFinalNodesOffsetX - angleTiltAmountForRound16ToQuarter, y: round16LowerMiddleOffsetY }}], sourceID: 'round16_3', targetID: 'quarter2'},
            { id: 'quarter2_2', segments: [{ point: { x: leftQuarterFinalNodesOffsetX - angleTiltAmountForRound16ToQuarter, y: round16BottomOffsetY }}], sourceID: 'round16_4', targetID: 'quarter2'},

            { id: 'quarter3_1', segments: [{ point: { x: rightQuarterFinalNodesOffsetX + angleTiltAmountForRound16ToQuarter, y: round16TopOffsetY }}], sourceID: 'round16_5', targetID: 'quarter3'},
            { id: 'quarter3_2', segments: [{ point: { x: rightQuarterFinalNodesOffsetX + angleTiltAmountForRound16ToQuarter, y: round16UpperMiddleOffsetY }}], sourceID: 'round16_6', targetID: 'quarter3'},
            { id: 'quarter4_1', segments: [{ point: { x: rightQuarterFinalNodesOffsetX + angleTiltAmountForRound16ToQuarter, y: round16LowerMiddleOffsetY }}], sourceID: 'round16_7', targetID: 'quarter4'},
            { id: 'quarter4_2', segments: [{ point: { x: rightQuarterFinalNodesOffsetX + angleTiltAmountForRound16ToQuarter, y: round16BottomOffsetY }}], sourceID: 'round16_8', targetID: 'quarter4' }
        ];

        // Apply initial disabled styling to all connectors
        connectors.forEach(function(connector) {
            connector.style = { strokeColor: 'rgba(0, 102, 204, 0.2)', strokeWidth: 2};
            connector.targetDecorator = { shape: 'None' };
            connector.sourceDecorator = { shape: 'None' };
        });

        // Apply transparent styling to all nodes
        nodes.forEach(function(node) {
            node.style = { fill: 'transparent', strokeColor: 'transparent' };
        });

        // Create and configure the diagram instance
        diagram = new ej.diagrams.Diagram({
            width: "100%",
            height: "100%",
            nodes: nodes,
            connectors: connectors,
            getConnectorDefaults: function(connector){
                connector.type = 'Straight';
                connector.sourcePadding = 10;
                connector.targetPadding = 10;
                return connector;
            },
            snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
            scrollSettings: { canAutoScroll: false, scrollLimit: "Infinity" },
            tool: ej.diagrams.DiagramTools.ZoomPan,
            load: function(){
                setTimeout(function () {
                    diagram.fitToPage({
                        canZoomIn: true,
                        margin: { left: 0, right: 20, top: 0, bottom: 90 }
                    });
                });
                
            },
            created: function () {
                // Fit diagram to page with margins
                diagram.fitToPage({
                    canZoomIn: true,
                    margin: { left: 0, right: 20, top: 0, bottom: 90 }
                });
            }
        });

        // Render diagram to DOM
        diagram.appendTo('#footballResultDiagram');
    }

    // Initialize diagram with loading delay
    setTimeout(initializeDiagram, 700);
};