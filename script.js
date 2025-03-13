function openTab(evt, tabName) {
    let tabContents = document.querySelectorAll('.tab-content');
    let tabLinks = document.querySelectorAll('.tab-link');

    tabContents.forEach(tab => tab.style.display = 'none');
    tabLinks.forEach(link => link.classList.remove('active'));

    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.classList.add('active');
}

// Show the first tab by default
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".tab-content").style.display = "block";
});
