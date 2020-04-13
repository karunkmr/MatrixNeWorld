$(document).ready(function() {
    if ($(window).width() >= "2100") {
        if ($('.menu-nav').length != '0') {
            $("a.logo-subtext").css('left', $('.menu-nav').offset().left - 15 + 'px');
        }
    } else {
        $("a.logo-subtext").removeAttr('style');
    }
    if ($(window).width() >= "1200") {
        if ($('.menu-nav').length != '0') {
            $('.banner .banner-desc').css({
                left: $('.menu-nav').offset().left + 'px'
            });
        }
    }

    $(".menu-nav>li>a").click(function() {
        //if ($(window).width() > "1024") {
        var href = $(this).parent("li").find(".submenu-nav a").attr('href');
        window.location = href;
        //}
    });

    $(window).resize(function() {
        if ($(window).width() >= "2100") {
            if ($('.menu-nav').length != '0') {
                $("a.logo-subtext").css('left', $('.menu-nav').offset().left - 15 + 'px');
            }
        } else {
            $("a.logo-subtext").removeAttr('style');
        }
        if ($(window).width() >= "1200") {
            if ($('.menu-nav').length != '0') {
                $('.banner .banner-desc').css({
                    left: $('.menu-nav').offset().left + 'px'
                });
            }
        }
    });
    setTimeout(function() {
        $('.banner .banner-desc').addClass("active");
    }, 300);
    $(".navbar-toggle").click(function() {
        if ($(window).width() <= "1025") {
            $(this).toggleClass('close-icon');
        }
    });
    $(".navbar-toggle").mouseenter(function() {
        if ($(window).width() > "1025") {
            $(this).toggleClass('close-icon');
            $(this).toggleClass('collapsed');
            $('.navbar-collapse').toggleClass('in');
        }
    });
    $(".navbar-collapse").mouseleave(function() {
        if ($(window).width() > "1025") {
            $(".navbar-toggle").toggleClass('close-icon');
            $(".navbar-toggle").toggleClass('collapsed');
            $('.navbar-collapse').toggleClass('in');
        }
    });
    if ($(window).width() > "991") {
        $('.markets-featured-desc').css('height', $('.menu-nav>li.active>ul').height() + 30 + 'px');
    }

    function bannerHeight() {
        // if ($(window).width() < 1366) {
        // var height_of_viewport = window.innerHeight;
        // var height_of_header = $('header').height();
        // var height_of_banner = height_of_viewport - height_of_header;
        // $('.banner #owl-carousel .item, #owl-carousel .bg-img').css('height', height_of_banner);
        // console.log(height_of_viewport);
        // console.log(height_of_header);
        // console.log(height_of_banner);
        // } else {
        // $('.banner #owl-carousel .item, #owl-carousel .bg-img').css('height', "100%");
        // }
    }
    // bannerHeight();

    $("#owl-carousel").owlCarousel({
        autoplay: true,
        items: 1,
        singleItem: true,
        loop: true,
        // animateIn: 'zoomIn',
        animateOut: 'fadeOut',
        // onChanged: function(e) {
        //     console.log(e.item.active);
        // }
    });

    $("#owl-carousel").on('changed.owl.carousel', function(e) {
        setTimeout(function() {
            // var owl_item = $('.owl-carousel .owl-item.active .item').attr('data-class');
            var slideItem = $('#slideshow .slide').attr('data-class');
            $('.menu-nav li > a').removeClass('active');
            if (slideItem == 'transportation') {
                $('.menu-nav li > a[data-class="transportation"]').addClass('active');
            }
            if (slideItem == 'environment') {
                $('.menu-nav li > a[data-class="environment"]').addClass('active');
            }
            if (slideItem == 'resiliency-water') {
                $('.menu-nav li > a[data-class="resiliency-water"]').addClass('active');
            }
            if (slideItem == 'energy') {
                $('.menu-nav li > a[data-class="energy"]').addClass('active');
            }
            if (slideItem == 'cities-communities') {
                $('.menu-nav li > a[data-class="cities-communities"]').addClass('active');
            }
            if (slideItem == 'industry') {
                $('.menu-nav li > a[data-class="industry"]').addClass('active');
            }
        }, 300);
    });
    $(".region-carousel").owlCarousel({
        autoplay: true,
        items: 1,
        singleItem: true,
        loop: true,
        animateOut: 'fadeOut'
    });
    $(".services-text-carousel").owlCarousel({
        autoplay: true,
        items: 1,
        singleItem: true,
        loop: true
    });

    //wtRotator
    $(".wt-rotator-wrap").wtRotator({
        width: 570,
        height: 321,
        button_width: 15,
        button_height: 15,
        button_margin: 5,
        auto_start: true,
        delay: 5000,
        play_once: false,
        transition: "fade",
        transition_speed: 800,
        auto_center: true,
        easing: "",
        cpanel_position: "inside",
        cpanel_align: "BR",
        timer_align: "top",
        display_thumbs: true,
        display_dbuttons: false,
        display_playbutton: false,
        display_numbers: true,
        display_timer: false,
        mouseover_pause: true,
        cpanel_mouseover: true,
        text_mouseover: false,
        text_effect: "fade",
        text_sync: true,
        tooltip_type: "image",
        lock_tooltip: true,
        shuffle: false,
        block_size: 75,
        vert_size: 55,
        horz_size: 50,
        block_delay: 25,
        vstripe_delay: 75,
        hstripe_delay: 180
    });


    if ($(window).width < 991) {
        RotatorHeight();
    }

    function RotatorHeight() {
        setInterval(function() {
            var considered_width = $(window).width() - 30;
            var height_to_apply = considered_width / 1.6;
            $('.wt-rotator').css('height', height_to_apply);
            $('.wt-rotator .screen').css('height', height_to_apply);
        }, 100);
    }

    // $jx('div.readmore').expander({
    //     slicePoint: 20,
    //     expandText: 'Read more>',
    //     userCollapseText: '>'
    // });

    //* scroll to press-realease
    $("#goto-press").click(function() {
        var adjustheight;
        adjustheight = $(".header").height();
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - adjustheight
        }, 800);
        return false;
    });

    $("#wrnjfounder").click(function() {
        // var adjustheight;
        // adjustheight = $(".header").height();
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 800);
        return false;
    });


    $('#offices').click(function() {
        if ($(this).hasClass("mobile")) {
            window.location.href($(this).attr("href"))
        } else {
            $('#map').slideToggle("fast");
            return false;
        }
    });

    function mobileNav() {
        if ($(window).width() < 769) {
            $('#offices').addClass("mobile")
        } else {
            $('#offices').removeClass("mobile")
        }
    }
    mobileNav();


    $(window).resize(function() {
        mobileNav();
        bannerHeight();
        if ($(window).width < 991) {
            RotatorHeight();
        }
    });

    $(window).on("orientationchange", function() {
        if (window.orientation == 0) // Portrait
        {
            mobileNav();
        } else {
            mobileNav();
        }
    });

});