let active_tab_history = new Array(0);

chrome.tabs.onActivated.addListener((tab) => {
    chrome.tabs.get(tab.tabId, (current_tab_info) => {
        if (active_tab_history.length == 0) {
            active_tab_history.push(current_tab_info.url);
        }
        if (
            active_tab_history[active_tab_history.length - 1] != current_tab_info.url
        ) {
            active_tab_history.push(current_tab_info.url);
            console.log(active_tab_history);
        }
    });
});

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.to_backscript) {
        console.log(active_tab_history);
        chrome.runtime.sendMessage({ history_list: active_tab_history });
    }
});