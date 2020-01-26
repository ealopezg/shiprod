document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('searchButton');
    button.addEventListener('click', function () {
        var text = $('#serial').val();
        if (!text) {
            return;
        }
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {data: text}, function(response) {
                document.getElementById('serial').value = "";
            });
        });
    });
    document.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            var text = $('#serial').val();
            if (!text) {
                return;
            }
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id, {data: text}, function(response) {
                    document.getElementById('serial').value = "";
                });
            });
        }
    });


});