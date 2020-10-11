$(document).ready(function() {
    $(document).scroll(function () {
        let y = $(this).scrollTop();
        let x = $("#works").offset();
        if (y > x.top) {
            $('nav').fadeIn().css({"position": "fixed"});
        } else {
            $('nav').css({"position" : "relative"});
        }
        });
});

function scrollToWorks() {
    $('html, body').animate({
        scrollTop: $("#works").offset().top
    }, 1000);
}