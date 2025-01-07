let lastScrollTop = 0;
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScrollTop) {

        header.classList.add("hidden");
    } else {
 
        header.classList.remove("hidden");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
});