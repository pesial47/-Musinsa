//top_menu
var swiper = new Swiper(".top_menu", {
    slidesPerView: 6.5,
    spaceBetween: 5,
    loop: true,
  });
  
  //visual
  var swiper = new Swiper(".slider", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop:true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      //마우스 수동시 재생멈춤
    },
});
//rapple
function Time(){
  let now= new Date();
  let open=new Date(2022,08,18,23,59,00);

  var nt=now.getTime();
  var ot=open.getTime();

  if(nt<ot){
    sec=parseInt(ot - nt)/1000;
    hour=parseInt(sec/60/60);
    sec=parseInt(sec - (hour*60*60));
    min=parseInt(sec/60);
    sec=parseInt(sec-(min*60));

    if(hour<10){hour="0"+hour;}
    if(min<10){min="0"+min;}
    if(sec<10){sec="0"+sec;}
      $("#d-day-hour").html(hour);
      $("#d-day-min").html(min);
      $("#d-day-sec").html(sec);
  }else{
    $("#d-day-hour").html(00);
      $("#d-day-min").html(00);
      $("#d-day-sec").html(00);
  }
}
setInterval(Time, 1000);

//cate
var swiper = new Swiper(".cate_slide", {
  slidesPerView: 5.3,
  spaceBetween: 10,
  // loop:true,
});

//md_slide
var swiper = new Swiper(".md_slide", {
  slidesPerView: 1.9,
  spaceBetween: 10,
  // loop:true,
});

//rm tab_menu
var swiper = new Swiper(".round_tab", {
  slidesPerView: "auto",
    spaceBetween: 10,
});


//showcase
var swiper = new Swiper(".show_area", {
  slidesPerView: 1,
  loop:true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
});



// top_menu
$(window).scroll(function(){
  let sTop=$(document).scrollTop();
  //console.log(sTop);
  if(sTop>=100){
    $(".top_btn").fadeIn();
  }else{
    $(".top_btn").fadeOut();
  }
});

$(".top_btn").click(function(){
  $("html,boby").stop().animate({scrollTop:0},500);
});

// fixed_menu
$(".fixed_btn li").click(function(){
  $(".off").hide();
  $(".on").show();
});


//sub
var swiper = new Swiper(".other", {
  slidesPerView: 4.5,
  spaceBetween: 5,
});

var swiper = new Swiper(".recom_list", {
  slidesPerView: 3.5,
  spaceBetween: 5,
});

$(".price_btn").click(function(){
  $(".price_list").stop().slideToggle(250);
});

$(".price_btn").click(function(){
  $(".price_img img").stop().toggleClass('on');
});

$(".sub_list li").click(function(){
  $(".sub_list li").stop().removeClass('on');
  $(this).stop().addClass('on');
});

$(window).scroll(function(){
  let sub_top=$(document).scrollTop();
  // console.log(sub_top);
  if(sub_top>=1226 && sub_top<=3870){
    $(".sub_list").stop().addClass('on');
    $("#con1").stop().addClass('on');
    $("#con2").stop().addClass('on');
    $("#con3").stop().addClass('on');

  }else{
    $(".sub_list").stop().removeClass('on');
    $("#con1").stop().removeClass('on');
    $("#con2").stop().removeClass('on');
    $("#con3").stop().removeClass('on');
  }
});

$(".sub_list li a").click(function(){
  var target = $(this).attr("href");
  var targetPos=$(target).offset().top - 45;
  console.log(target+":"+targetPos);
  $("html, body").stop().animate({scrollTop:targetPos} ,400)
  $(".sub_list li").removeClass("on");
  $(this).addClass("on");
});