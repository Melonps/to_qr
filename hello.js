document.getElementById("change_color").onclick = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tableId: tabs[0].Id },
            function: changeBackgroundColor,
        });
    });
};

function changeBackgroundColor() {
    var body = document.getElementById("popup_body");
    body.style.backgroundColor ="#219ddd";
    console.log("背景変更");
};