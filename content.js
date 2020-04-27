chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.close) {
            window.close();
        }
    }
);


chrome.runtime.sendMessage({register : true}, function () {})

