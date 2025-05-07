// script.js
document.getElementById('openSiteBtn').addEventListener('click', function() {
    var url = document.getElementById('urlInput').value;
    if (url) {
        document.getElementById('websiteFrame').src = url;
    } else {
        alert("Please enter a valid URL!");
    }
});
