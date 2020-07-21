!(function ($) {
    "use strict";

    $(window).scroll(function () {
        if ($(this).scrollTop() > 80) {
            $('#header').addClass('header-scrolled');
        } else {
            $('#header').removeClass('header-scrolled');
        }
    });

    $('a').on('click', function (e) {
        let tujuan = $(this).attr('href');
        let elemenTujuan = $(tujuan);

        $('html , body').animate({
            scrollTop: elemenTujuan.offset().top - 65
        }, 1000, 'linear');

        e.preventDefault();
    });
})(jQuery);