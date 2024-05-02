$(document).ready(function(){
  $(window).scroll(function () {
    if ($(window).scrollTop() > 90) {
      $("header").addClass("fixed");
    } else {
      $("header").removeClass("fixed");
    }
  });
  $(window).scroll(function () {
    if ($(window).scrollTop() > 90) {
      $("header").addClass("scroll");
    } else {
      $("header").removeClass("scroll");
    }
  });
  $(window).scroll(function () {
    if ($(Window).scrollTop() >200) {
      $(".button").fadeIn();
    } else {
      $(".button").fadeOut();
    }
  });
  $(".your-class").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
  });
  $(".button").click(function () {
    $("html,body").animate({
      scrollTop: 0,
    });
  });

  $('.counter').counterUp({
          
  });

  $(function () {
    $(".text .selector1").animatedHeadline({
      animationType: "type",
    });
  });

  
  
})
 