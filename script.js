var popup_opened = false;
var windowwidth=1;
document.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var popup = document.getElementById('popup');
    var triggerPosition = 600;

    if (scrollPosition > triggerPosition && !popup_opened) {
        popup.style.display = 'flex';
        popup.style.position = 'fixed';
        popup_opened = true;
    }
});
document.getElementById("closeButton").addEventListener("click", function() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
});