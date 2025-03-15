$(function (){

  $('.c-ham').click(function(){
    $(this).toggleClass('active')
    $('.l-header-logo__nav').toggleClass('active')
  })
  $('.l-header-logo__list a').click(function(){
    $('.c-ham').removeClass('active')
    $('.l-header-logo__nav').removeClass('active')
  })

  // FVのスライダー
 $('.js-slider').slick({ 
  // centerMode: true,
   autoplay: false, 
   arrows: true,
   slidesToShow: 3, // 3枚ずつ表示
   slidesToScroll: 1, // 1枚ずつスクロール
   prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-prev.svg" alt="Previous"></button>',  
   nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-next.svg" alt="Next"></button>',
   responsive: [
     {
       breakpoint: 768,
       settings: {      
         slidesToShow: 1, // 1枚表示
         slidesToScroll: 1,
       }
     }
   ]
 });
  
 
})