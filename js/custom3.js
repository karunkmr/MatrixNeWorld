$(document).ready(function() {

  function bannerHeight(){
    if($(window).width()<1366){
      var height_of_viewport = window.innerHeight;
      var height_of_header = $('header').height();
      var height_of_banner = height_of_viewport - height_of_header;
      $('.banner #owl-carousel .item, #owl-carousel .bg-img').css('height', height_of_banner);
      // console.log(height_of_viewport);
      // console.log(height_of_header);
      // console.log(height_of_banner);
    }
    else{
      $('.banner #owl-carousel .item, #owl-carousel .bg-img').css('height', "auto");
    }
  }
	bannerHeight();

 	$("#owl-carousel").owlCarousel({
      autoplay: true,
      items: 1,
      singleItem: true,
      loop: true,
      animateOut: 'fadeOut'
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


  if($(window).width <991){
    RotatorHeight();
  }
    function RotatorHeight() {
      setInterval(function(){ 
        var considered_width = $(window).width() - 30;
        var height_to_apply = considered_width / 1.6;
        $('.wt-rotator').css('height',height_to_apply);
        $('.wt-rotator .screen').css('height',height_to_apply);
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

  function mobileNav(){
    if($(window).width()<769){
      $('#offices').addClass("mobile")
    }
    else{
      $('#offices').removeClass("mobile")
    }
  }
  mobileNav();


  $( window ).resize(function() {
    mobileNav();
    bannerHeight();
    if($(window).width <991){
      RotatorHeight();
    }
  });

  $(window).on("orientationchange", function() {
      if (window.orientation == 0) // Portrait
      {
        mobileNav();
      } else 
      {
          mobileNav();
      }
  });

 



});