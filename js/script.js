$(window).on('load', function () {
    $('.loader, .inner').fadeOut(3000, function () {
        $('.loader').fadeOut(3500);
    });
});

$('#change-portfolio').click(function () {
    location.href = 'pages/index2.html';
});


//Image Slider
$(document).ready(function () {
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false,
    });

    //Skills Section
    //Owl Carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            938: {
                items: 4
            }
        }
    });


    var skillsTopOffset = $('.skills-section').offset().top;

    $(window).scroll(function () {

        if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }

    });

    //Sticky Navbar
    const nav = $('#navigation');
    const navTop = nav.offset().top;

    $(window).on('scroll', stickyNavigation);

    function stickyNavigation() {
        var body = $('body');

        if ($(window).scrollTop() >= navTop) {
            body.css('padding-top', nav.outerHeight() + 'px');
            body.addClass('fixed-navbar');
        } else {
            body.css('padding-top', 0);
            body.removeClass('fixed-navbar');
        }
    }

    //Smooth Transition of Nav Menu
    $('#navigation li a').click(function (event) {
        event.preventDefault();

        var targetSection = $(this).attr('href');
        var targetPosition = $(targetSection).offset().top;

        $('html, body').animate({
            scrollTop: targetPosition - 50
        }, "slow");

        if (targetSection == '#about') {
            $(this).addClass('selected');
            $('#navigation li a.SK').removeClass('selected');
            $('#navigation li a.CM').removeClass('selected');

        } else if (targetSection == '#skills') {
            $(this).addClass('selected');
            $('#navigation li a.AM').removeClass('selected');
            $('#navigation li a.CM').removeClass('selected');
        } else if (targetSection == '#contact') {
            $(this).addClass('selected');
            $('#navigation li a.AM').removeClass('selected');
            $('#navigation li a.SK').removeClass('selected');
        }
    });

    $('#navigation a').click(function (event) {
        event.preventDefault();

        var body = $('body');

        var targetSection = $(this).attr('href');
        var targetPosition = $(targetSection).offset().top;

        $('html, body').animate({
            scrollTop: targetPosition - 50
        }, "slow");

        if (targetSection == '#slides') {
            $('#navigation li a.AM').removeClass('selected');
            $('#navigation li a.SK').removeClass('selected');
            $('#navigation li a.CM').removeClass('selected');

        }
    });

});
