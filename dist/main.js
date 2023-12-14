$(document).ready(function() {
    var $mobileMenu = $(".mobile-menu");

    // Show/hide menu on button click
    $("button.mobile-menu-button").click(function(event) {
        $mobileMenu.slideToggle(300, function() {
            $(this).toggleClass("hidden");
        });

        // Prevent the click event from propagating to the document
        event.stopPropagation();
    });

    // Hide menu when clicking outside of it
    $(document).click(function(event) {
        // Check if the clicked element is not part of the menu or its children
        if (!$(event.target).closest(".mobile-menu").length && !$(event.target).closest("button.mobile-menu-button").length) {
            $mobileMenu.slideUp(300).addClass("hidden");
        }
    });
});

$(document).ready(function() {
    $(".items").click(function() {
        $(".items").removeClass("text-mainColor border-b-4 border-mainColor font-semibold").addClass("text-gray-500 font-semibold hover:text-mainColor transition duration-300");
        $(this).removeClass("text-gray-500 font-semibold hover:text-mainColor transition duration-300").addClass("text-mainColor border-b-4 border-mainColor font-semibold").css("transition", "all 0.3s ease-in-out");
    });

    $("ul.mob>li").click(function() {
        $("ul.mob>li").removeClass("active").addClass("hover:bg-mainColor transition duration-300").removeClass('text-white bg-mainColor font-semibold');
        $(this).addClass("active").children().removeClass("hover:bg-mainColor transition duration-300").addClass("text-white bg-mainColor font-semibold").css("transition", "all 0.3s ease-in-out");
        $(".mobile-menu").slideUp(300).addClass("hidden");
    });
});

$(document).ready(function() {
    $('.items, ul.mob>li>a').on('click', function(event) {
        event.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });
});


