document.addEventListener("DOMContentLoaded", function() {

    /* Logic for Scroll to top Button Start */
    const scrollBtn = document.querySelector('.scroll-to-top');

    const backToTopBtnShow = () => {
        if (document.documentElement.scrollTop <= 700) {
            scrollBtn.classList.remove('active');
        } else {
            scrollBtn.classList.add('active');
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