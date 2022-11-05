
$(function() {

    /* Burger menu */

    $(".burger").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $(".header__navigation").toggleClass("active");
    });

});