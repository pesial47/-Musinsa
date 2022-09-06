// header fixed
let header_h=$("#header").height();

 $(window).on("scroll",function(){
     let top=$(document).scrollTop();
     let event=$(".event_top").offset().top+$(".event_top").height();

     if(top>=event){
        $(".event_top, .header_in").hide();
        $("#header").addClass("fix");
        $(".gnb").addClass("on");
        header_h=$("#header").height();
    }else{ 
        $(".event_top, .header_in").show();
        $("#header").removeClass("fix");
        $(".gnb").removeClass("on");
        header_h=$("#header").height();
     }
 });

//lnb - fadeIn으로 변경하기
$(".main").on("mouseenter focusin",function(){
            $(".lnb").stop().hide();
            $(this).find(".lnb").stop().slideDown();
});
$(".gnb").on("mouseenter focusin",function(){
    $(".lnb").stop().slideUp();
});


//visual-swiper
var swiper = new Swiper(".visual_area", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 1,
        spaceBetween: 1,
        loop: true,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
  });

  //ranking_tab


      $("ul.ra_tab li").click(function(){
          var raTab=$(this).attr('data-tab');

          $("ul.ra_tab li").removeClass("on");
          $(".ra").removeClass("on");
          $(this).addClass("on");
          $("#"+raTab).addClass("on");
          return false;
      });
      $(".heart").click(function(){
          $(this).toggleClass("on");
          return false;
      });


  //time
  function remaindTime() {
    var now = new Date(); //현재시간을 구한다. 
    var open = new Date(2022,08,06,23,59,00);
  
    var nt = now.getTime(); // 현재의 시간만 가져온다
    var ot = open.getTime(); // 오픈시간만 가져온다
  
   if(nt<ot){ //현재시간이 오픈시간보다 이르면 오픈시간까지의 남은 시간을 구한다.   
     sec = parseInt(ot - nt) / 1000;
     hour = parseInt(sec/60/60);
     sec = (sec - (hour*60*60));
     min = parseInt(sec/60);
     sec = parseInt(sec-(min*60));
  
     if(hour<10){hour="0"+hour;}
     if(min<10){min="0"+min;}
     if(sec<10){sec="0"+sec;}
      $("#d-day-hour").html(hour);
      $("#d-day-min").html(min);
      $("#d-day-sec").html(sec);
   } else{ //현재시간이 종료시간보다 크면
    $("#d-day-hour").html('00');
    $("#d-day-min").html('00');
    $("#d-day-sec").html('00');
   }
  }
  setInterval(remaindTime,1000); 

       
  
  
// style_tab
  $(function(){
      $("ul.st_tab li").click(function(){
          var activeTab=$(this).attr('data-tab');

          $("ul.st_tab li").removeClass("on");
          $(".tabcont").removeClass("on");
          $(this).addClass("on");
          $("#"+activeTab).addClass("on");
          return false;
      });
  });


//md

var swiper2 = new Swiper("#mslide", {

    autoplay: {
      delay: 2500,//2.5s
      disableOnInteraction: false,
    },
    slidesPerView: 3.2,
    spaceBetween: 14,
  });





//show case

console.clear();

// animation on scroll
AOS.init({
    once:true,
    duration:0,
    easing: 'none',
});


// 3차 visual stroy slick 적용
$('.v-story-slider').slick({
    dots:true,
    draggable:true,
    arrows:true,
    adaptiveHeight:true,
    centerMode:true,
    centerPadding:'250px',
    // responsive: [
    //     {
    //       breakpoint: 1400,
    //       settings: {
    //         centerPadding:'20vw',
    //       }
    //     },
    //     {
    //       breakpoint: 770,
    //       settings: {
    //         centerPadding:'0',
    //         arrows:false,
    //       }
    //     },
    // ],
}).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    /* 자바스크립트
    if (currentSlide !== nextSlide) {
        document.querySelectorAll('.slick-center + .slick-cloned').forEach((next) => {
            // timeout required or Slick will overwrite the classes
            setTimeout(() => next.classList.add('slick-current', 'slick-center'));
        });
    }
    */
    // IE 호환성을 고려한 제이쿼리
    if (currentSlide !== nextSlide) {
        $('.slick-center + .slick-cloned').each(function(index, node) {
            var $node = $(node);
            
            setTimeout(function() {
                $node.addClass('slick-current');
                $node.addClass('slick-center');
            });
        });
    }
});

//quick btn
$(window).scroll(function(){
    var scroll_top=$(document).scrollTop();
    console.log(scroll_top);
        if(scroll_top>=1500){
            $(".top_btn").fadeIn();
        }else{
            $(".top_btn").fadeOut();
        }
    });
    $(".top_btn").click(function(){
        $("html, body").stop().animate({scrollTop:0},400);
    });


    $(window).scroll(function(){
        var scroll_top=$(document).scrollTop();
        //console.log(scroll_top);
        if(scroll_top>=4500){
            $(".bottom_btn").addClass("on");
        }else{
            $(".bottom_btn").removeClass("on");
        }
    });
    $(".bottom_btn").click(function(){
        var scroll_top=$(document).scrollTop();
        $("html, body").stop().animate({scrollTop:scroll_top+1000},400);
        if(scroll_top>=4000){
            $(".bottom_btn").addClass("on");
        }else{
            $(".bottom_btn").removeClass("on");
        }
    });
