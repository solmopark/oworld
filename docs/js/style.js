// 검색팝업
/*$(document).ready(function(){     
    $("#open-btn").on("click", function(event) {  //팝업오픈 버튼 누르면
    $(".popup-box").show();   //팝업 오픈
    $('.searchArea .modal-mask').addClass('active');
    });
    $("#close-btn").on("click", function(event) { 
        
        $(".popup-box").hide(); 
    $('.searchArea .modal-mask').removeClass('active');
    });  
});*/

// popup swiper
let popswiper = new Swiper(".popSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay:{
    autoplay: true,
    delay: 3000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   type: "fraction",
  // },
});

// 뉴스 스와이퍼 
let mainSwiper = new Swiper('.view_section .swiper-container', {
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: 30,
    speed: 800,
    loop: false,
    loopAdditionalSlides: 1,
    autoplay:{
      autoplay: true,
      delay: 2000,
      disableOnInteraction: false
    },
    observer: true,
    observeParents: true,    
  });
  
$('.cate h2').on('click', function(e) {
  const index = $(this).index();
  
  $('.cate h2').removeClass('active');
  $(this).addClass('active');

  $('.swiper-container').removeClass('active');
  $('.swiper-container').eq(index).addClass('active');
  
  mainSwiper[index].slideTo(0);
});


// fade in #back-top
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('#back-top').fadeIn();
    } else {
      $('#back-top').fadeOut();

    }
  });


  // scroll body to 0px on click
  $('a#back-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 1000);
    return true;
  });
});
