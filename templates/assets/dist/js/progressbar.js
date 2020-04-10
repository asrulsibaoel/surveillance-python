$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
    "use strict"; // Start of use strict
    $(window).on("scroll", function () {
        // if($( window ).scrollTop() > 10){   scroll down abit and get the action   
        $(".progress-animated").each(function () {
            each_bar_width = $(this).attr('aria-valuenow');
            $(this).width(each_bar_width + '%');
        });
    });
});