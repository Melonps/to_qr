document.getElementById("change_color").onclick = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: changeBackgroundColor,
        });
    });
};

function changeBackgroundColor() {
    document.body.style.backgroundColor ="#219ddd";
    console.log("背景変更");
}