document.addEventListener("DOMContentLoaded", function() {

    /* Logic for Scroll to top Button Start */
    const scrollBtn = document.querySelector('.scroll-to-top');

    const backToTopBtnShow = () => {
        if (document.documentElement.scrollTop <= 700) {
            scrollBtn.style.display = "none";
        } else {
            scrollBtn.style.display = "block";
        }
    };
    backToTopBtnShow();

    scrollBtn.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
    });
    document.addEventListener('scroll', (e) => {
        backToTopBtnShow();
    });
    /* Logic for Scroll to top Button End */
});