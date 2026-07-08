async function fingerPrint() {
  try {
    const canvas = document.createElement('canvas');
    canvas.width = 600;
    canvas.height = 300;
    canvas.style.display = "none";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Canvas context not available");

    const size = 24;
    const diamondSize = 28;
    const gap = 4;
    const startX = 30;
    const startY = 30;
    const blue = "#1A3276";
    const orange = "#F28C00";

    const colorMap = [
      ["blue", "blue", "diamond"],
      ["blue", "orange", "blue"],
      ["blue", "blue", "blue"]
    ];

    const drawSquare = (x, y, color) => {
      ctx.fillStyle = color;
      ctx.fillRect(x, y, size, size);
    };

    const drawDiamond = (centerX, centerY, size, color) => {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY - size / 2);
      ctx.lineTo(centerX + size / 2, centerY);
      ctx.lineTo(centerX, centerY + size / 2);
      ctx.lineTo(centerX - size / 2, centerY);
      ctx.closePath();
      ctx.fill();
    };

    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        const type = colorMap[row][col];
        const x = startX + col * (size + gap);
        const y = startY + row * (size + gap);
        if (type === "blue") drawSquare(x, y, blue);
        else if (type === "orange") drawSquare(x, y, orange);
        else if (type === "diamond") drawDiamond(x + size / 2, y + size / 2, diamondSize, orange);
      }
    }

    ctx.font = "20px Arial";
    ctx.fillStyle = blue;
    ctx.textBaseline = "middle";
    ctx.fillText("Syncfusion", startX + 3 * (size + gap) + 20, startY + size + gap);

    ctx.globalCompositeOperation = "multiply";
    ctx.fillStyle = "rgb(255,0,255)";
    ctx.beginPath(); ctx.arc(50, 200, 50, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "rgb(0,255,255)";
    ctx.beginPath(); ctx.arc(100, 200, 50, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "rgb(255,255,0)";
    ctx.beginPath(); ctx.arc(75, 250, 50, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "rgb(255,0,255)";
    ctx.beginPath();
    ctx.arc(200, 200, 75, 0, Math.PI * 2, true);
    ctx.arc(200, 200, 25, 0, Math.PI * 2, true);
    ctx.fill("evenodd");

    const sha256 = async (str) => {
      const encoder = new TextEncoder();
      const data = encoder.encode(str);
      const hashBuffer = await crypto.subtle.digest('SHA-256', data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map(b => ('0' + b.toString(16)).slice(-2)).join('');
    };

    const visitorID = await sha256(canvas.toDataURL());
    document.body.removeChild(canvas); // Clean up the canvas element
    return visitorID;
  } 
  catch (error) {
    console.error(error);
    return null;
  }
}

window.serverAIRequest = async (settings) => {
    try {
        const visitorId = await fingerPrint();
        let response = await fetch('https://ai-samples-server-f5hta2h9g5aqhcfg.southindia-01.azurewebsites.net/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                visitorId,
                messages: settings
            })
        })
        let result = await response.json();
        if (!response.ok) {
            throw new Error(result.error || 'Network response was not ok');
        }
        result.response = result.response.replace('END_INSERTION', '');
        return result.response;
    } catch (error) {
        if (error.message.includes('token limit')) {
            document.querySelector('.banner-message').innerHTML = error.message;
            document.querySelector('.sb-token-header').classList.remove('sb-hide');
        }
        else if (error.message.includes('Failed to fetch')) {
            console.warn("To test these samples locally, configure and use your own API key.");
        }
        else {
            console.error('There was a problem with your fetch operation:', error);
        }
    }
};

window.getOpenAiModelRTE = async (subQuery, promptQuery) => {
    try {
        const visitorId = await fingerPrint();
        // Make a POST request to the /api/rte endpoint with the required data.
        let response = await fetch('https://ai-samples-server-f5hta2h9g5aqhcfg.southindia-01.azurewebsites.net/api/rte', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                visitorId,
                subQuery,
                promptQuery
            })
        });

        let result = await response.json();
        if (!response.ok) {
            throw new Error(result.error || 'Network response was not ok');
        }
        return result.response;
    } catch (error) {
        if (error.message.includes('token limit')) {
            document.querySelector('.banner-message').innerHTML = error.message;
            document.querySelector('.sb-token-header').classList.remove('sb-hide');
        }
        else if (error.message.includes('Failed to fetch')) {
            console.warn("To test these samples locally, configure and use your own API key.");
        } 
        else {
            console.error('There was a problem with your fetch operation:', error);
        }  
    }
};

window.OpenAiModelKanban = async (promptQuery) => {
    try {
        const visitorId = await fingerPrint();
        let response = await fetch('https://ai-samples-server-f5hta2h9g5aqhcfg.southindia-01.azurewebsites.net/api/kanban', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                visitorId,
                promptQuery
            })
        })
        let result = await response.json();
        if (!response.ok) {
            throw new Error(result.error || 'Network response was not ok');
        }
        result.response = result.response.replace('END_INSERTION', '');
        return result.response;
    } catch (error) {
        if (error.message.includes('token limit')) {
            document.querySelector('.banner-message').innerHTML = error.message;
            document.querySelector('.sb-token-header').classList.remove('sb-hide');
        }
        else if (error.message.includes('Failed to fetch')) {
            console.warn("To test these samples locally, configure and use your own API key.");
        }
        else {
            console.error('There was a problem with your fetch operation:', error);
        }
    }
};

window.getUserID = async function() {
    return fingerPrint();
};

//Assistview samples AI usage
function getFileExtension(fileName) {
    return fileName.split('.').pop().toLowerCase();
}

function isTextFile(fileName) {
    var textExtensions = ['txt', 'md', 'css', 'html', 'json', 'xml', 'js', 'ts', 'jsx', 'tsx', 'py', 'java', 'cpp', 'c', 'h', 'cs', 'rb', 'php', 'csv', 'readme', 'doc', 'docx'];
    var ext = getFileExtension(fileName);
    return textExtensions.includes(ext);
}

function isImageFile(fileName) {
    var imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'svg'];
    var ext = getFileExtension(fileName);
    return imageExtensions.includes(ext);
}

async function getFileContext(attachedFiles) {
    var filePromises = [];
    var fileContents = [];

    attachedFiles.forEach(function(file) {
        var promise = new Promise(function(resolve, reject) {
            if (file.rawFile) {
                var reader = new FileReader();
                var fileName = file.name;
                
                reader.onload = function(e) {
                    var fileType = isTextFile(fileName) ? 'text' : isImageFile(fileName) ? 'image' : 'binary';
                    fileContents.push({
                        name: fileName,
                        type: file.type,
                        fileType: fileType,
                        content: e.target.result
                    });
                    resolve();
                };
                
                reader.onerror = function() {
                    reject(new Error('Error reading file: ' + fileName));
                };

                if (isTextFile(fileName)) {
                    reader.readAsText(file.rawFile);
                } else {
                    reader.readAsDataURL(file.rawFile);
                }
            } else {
                resolve();
            }
        });
        filePromises.push(promise);
    });

    await Promise.all(filePromises);
    return fileContents;
}

window.getAIResponse = async (args, abortController) => {
    try {
        var fileContents = [];
        var aiPrompt = args.prompt;
        if (args.attachedFiles && args.attachedFiles.length > 0) {
            fileContents = await getFileContext(args.attachedFiles);
            var attachedFileContext = 'Attached Files:\n';
            fileContents.forEach(function(file) {
                attachedFileContext += '\n--- File: ' + file.name + ' (Type: ' + file.type + ', File Type: ' + file.fileType + ') ---\n';
                
                if (file.fileType === 'text') {
                    attachedFileContext += file.content + '\n';
                } else if (file.fileType === 'image') {
                    attachedFileContext += '[Image file: ' + file.name + ' - Base64 encoded data available]\n';
                    attachedFileContext += file.content + '\n';
                } else {
                    attachedFileContext += '[Binary file: ' + file.name + ' - Please process this file]\n';
                    attachedFileContext += file.content.substring(0, 500) + '...\n';
                }
            });
            aiPrompt = attachedFileContext + '\n\nUser Prompt: ' + args.prompt;
        }
        
        const userID = await window.getUserID();
        if (!userID) {
            return 'Failed to generate user ID. Please try again later.';
        }
        const abortSignal = abortController ? abortController.signal : undefined;
        var systemPrompt = args.systemPrompt || 'You are a helpful assistant.';
        const requestBody = {
            visitorId: userID,
            messages: {
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: aiPrompt }
                ]
            }
        };
        if (fileContents && fileContents.length > 0) {
            requestBody.fileContents = fileContents;
        }
        const response = await fetch(window.AI_SERVICE_URL + '/api/chat', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestBody),
            signal: abortSignal
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || ("HTTP Error " + response.status));
        }
        const result = await response.json();
        if (args.systemPrompt) {
            return result;
        }
        if (result && result.response) {
            const aiResponse = result.response.replace('END_INSERTION', '');
            return aiResponse;
        }
    } catch (error) {
        if (error.name === "AbortError") {
            return null;
        } else if (error.message && error.message.indexOf("token limit") !== -1) {
            const bannerElement = document.querySelector(".banner-message");
            if (bannerElement) { bannerElement.innerHTML = error.message; }
            const headerElement = document.querySelector(".sb-header1");
            if (headerElement) { headerElement.classList.remove("sb-hide"); }
            return error.message;
        }
        else if (error.message.includes('Failed to fetch')) {
            console.warn("To test these samples locally, configure and use your own API key.");
        }
        return 'We could not reach the AI service; please try again later.';
    }
};

window.AI_SERVICE_URL = 'https://ai-samples-server-f5hta2h9g5aqhcfg.southindia-01.azurewebsites.net';