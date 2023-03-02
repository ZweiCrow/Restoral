const navEl = document.querySelector("#PAGES");
const navElList = document.querySelector(".PAGES");

navEl.addEventListener("click", () => {
    navElList.classList.toggle("cache")
})

document.addEventListener('click', function(e) {
    const outsideClick = !navEl.contains(e.target);
    if (outsideClick == true) {
        navElList.classList.add("cache")
    }
});
