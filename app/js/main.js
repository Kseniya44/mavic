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

$(function() {
    $(".slider").slick({
        prevArrow:"<button type='button' class='slick-next'><svg width='10' height='18' viewBox='0 0 10 18' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M9.21839 1L1 9L9.21839 17'/></svg></button>",
        nextArrow:"<button type='button' class='slick-prev'><svg width='10' height='18' viewBox='0 0 10 18' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0.78161 17L9 9L0.78161 1'/></svg></button>",
        infinite: false
    });
});