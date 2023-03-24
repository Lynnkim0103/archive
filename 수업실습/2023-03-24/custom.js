$(function() {
  $('.trigger').click(function() {
    $(this).toggleClass('active');
    $('.gnb').toggleClass('active');
  });
  $('section, .menu a').click(function() {
    $('.gnb').removeClass('active');
    $('.trigger').removeClass('active')
  });

  /*Change CSS Scroll*/
  $(window).scroll(function() {
    if($(window).scrollTop() > 50) {
      $('header, .gototop').addClass('active');
    } else {
      $('header, .gototop').removeClass('active');
    }
  });

  /*smooth scolling*/
  $('.menu a, .gototop').click(function(e) {
    $.scrollTo(this.hash || 0, 900);
  });

  /*slick slider : Plan > history*/
  $('.history-slider').slick ({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2
  });
  
  /*slick slider : project > img*/

  $('.project-photo').slick ({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear'
  });
});