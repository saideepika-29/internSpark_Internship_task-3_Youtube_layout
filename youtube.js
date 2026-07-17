const searchBar = document.getElementById("searchBar");
const videos = document.querySelectorAll(".video-preview");
searchBar.addEventListener("keyup", function () {
    const value = searchBar.value.toLowerCase();
    videos.forEach(video => {
        const title = video.querySelector(".video-title")
            .textContent
            .toLowerCase();
        if (title.includes(value)) {
            video.style.display = "";
        } else {
            video.style.display = "none";
        }
    });
});
const menu = document.querySelector(".hamburger-menu");
const sidebar = document.getElementById("sidebar");
menu.addEventListener("click", () => {
    sidebar.classList.toggle("hide-sidebar");
});
const notification = document.querySelector(".notifications");
const count = document.getElementById("notificationCount");
notification.addEventListener("click", () => {
    count.innerHTML = "0";
    alert("Notifications cleared!");
});
const likeButtons = document.querySelectorAll(".like-btn");
likeButtons.forEach(button => {
    button.addEventListener("click", () => {
        const likes = button.nextElementSibling;
        likes.innerHTML = Number(likes.innerHTML) + 1;
    });
});
videos.forEach(video => {
    video.addEventListener("click", function (e) {
        if (e.target.classList.contains("like-btn")) return;
        window.open("https://www.youtube.com", "_blank");
    });
});