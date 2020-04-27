function doAction() {
    chrome.tabs
        .query({url : ["http://www.messenger.com/*", "https://www.messenger.com/*", "http://messenger.com/*", "https://messenger.com/*"]}, 
        function(tabs) {
            tabs.forEach(tab => {
                console.log("Closing")
                chrome.extension.getBackgroundPage().console.log(tab);
                chrome.tabs.remove(tab.id, function() {
                    console.log("Success")
                })
            });

            chrome.tabs.create({url : tabs[0].url, index: 2})
        }
    )
}

chrome.alarms.onAlarm.addListener(function (alarm) {
    if (alarm.name == "doAction")
        doAction();
})

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        chrome.alarms.create("doAction", {delayInMinutes:25})
    }
);
