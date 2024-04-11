
// header scroll
let didScroll;
$(window).scroll(function (event) {
    didScroll = true;
});
setInterval(function () {
    if (didScroll) {
        let top = $(this).scrollTop();
        hasScrolled(top);
        didScroll = false;
    };
}, 250);
function hasScrolled(top) {
    if (top > 0) {
        $("#header").addClass("scroll", 400);
    } else {
        $("#header").removeClass("scroll", 400);
    };
};

$(function () {
    // header (width > 1366) 
    $("#header #menuArea.w1366_hide .menuBox .topMenu").hover(function () {
        $(this).children(".subMenu").stop().slideDown(400);
        $("#header").addClass("active");
    }, function () {
        $(this).children(".subMenu").stop().slideUp(100);
        $("#header").removeClass("active");
    });
    $("#header .gnb .subscribe").hover(function () {
        $("#header").addClass("active");
    }, function () {
        $("#header").removeClass("active");
    });
    // header (width <= 1366) 
    $("#header #menuArea.w1366_show .menuBtn .open").click(function () {
        $("#header #menuArea.w1366_show .menuBtn .open").css("display", "none");
        $("#header #menuArea.w1366_show .menuBtn .close").css("display", "block");
    });
    $("#header #menuArea.w1366_show .menuBtn .close").click(function () {
        $("#header #menuArea.w1366_show .menuBtn .close").css("display", "none");
        $("#header #menuArea.w1366_show .menuBtn .open").css("display", "block");
    });
    $("#header #menuArea.w1366_show .menuBtn").click(function () {
        $("#header #menuArea.w1366_show .menuBox > div").stop().slideToggle(400);
        $("#header").toggleClass("active");
    });
    $("#header #menuArea.w1366_show .menuBox .topMenu").click(function () {
        $(this).children(".subMenuTitle").toggleClass("active");
        $(this).children(".subMenu").slideToggle(300);
        $("#header #menuArea.w1366_show .topMenu").not(this).children(".subMenu").slideUp(300);
    });
    /* $("#header #menuArea.w1366_show .menuBox .topMenu").eq(0).trigger("click"); */
});

// search
const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
    search.classList.toggle("active");
    input.focus();
});

$(function () {
    // mainVisual Slider
    $('#mainVisual .visualWrap').slick({
        autoplay: true,
        speed: 1200,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        fade: true,
        arrows: false,
        dots: true,
        customPaging: function (slider, i) {
            return '<button class="tab">' + $(slider.$slides[i]).attr('title') + '</button>';
        }
    });
    $('#mainVisual .play').click(function () {
        $('#mainVisual .visualWrap').slick('slickPlay');
        $('#mainVisual .play').css("display", "none");
        $('#mainVisual .stop').css("display", "block");
    });
    $('#mainVisual .stop').click(function () {
        $('#mainVisual .visualWrap').slick('slickPause');
        $('#mainVisual .stop').css("display", "none");
        $('#mainVisual .play').css("display", "block");
    });

    // NEAR KOGAS Slider
    function sliderSet(slickfor, slicknav) {
        slickfor.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            pauseOnHover: false,
            infinite: true,
            speed: 1200,
            autoplay: true,
            arrows: false,
            fade: true,
            asNavFor: slicknav,
            dots: true,
            customPaging: function (slider, i) {
                return '<button class="tab">' + $(slider.$slides[i]).attr('title') + '</button>';
            }
        });
        slicknav.slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            pauseOnHover: false,
            infinite: true,
            speed: 1200,
            autoplay: false,
            dots: false,
            arrows: true,
            asNavFor: slickfor
        });
    };
    $('#mainSection.NEAR').each(function (i, el) {
        i += 1;
        let slickfor = $(el).find('.nearSlider-for').addClass('for' + i)
        let slicknav = $(el).find('.nearSlider-nav').addClass('nav' + i)
        sliderSet(slickfor, slicknav);
    });
    $('#mainSection.DEAR').each(function (i, el) {
        i += 1;
        let slickfor = $(el).find('.dearSlider-for').addClass('for' + i)
        let slicknav = $(el).find('.dearSlider-nav').addClass('nav' + i)
        sliderSet(slickfor, slicknav);
    });

    // DEAR KOGAS thumb
    $("#mainSection.DEAR .thumb").hover(function () {
        $("#mainSection.DEAR .thumb").removeClass("active");
        $(this).addClass("active");
    }, function () {
        $("#mainSection.DEAR .thumb").removeClass("active");
    });
});


function menu1(){
    menu1='';
}

function LJF_ShowHide(Shows, Hides) {
    $("."+Shows).show();
    $("."+Hides).hide();
}


var swiper = new Swiper(".mySwiper", {
    slidesPerView: '1', 
    speed: 900,
    loop : true,   // 슬라이드 반복 여부
    parallax: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    effect : 'fade', 
    fadeEffect: { 
      crossFade: true 
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
  });