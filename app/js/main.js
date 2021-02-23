//scroll header
const scrollHeader = () => {
    const header = document.querySelector(".header");
    if(window.scrollY >= 200) {
        header.classList.add("header-bg");
    }else {
        header.classList.remove("header-bg");
    }
}

window.addEventListener("scroll", scrollHeader);