//메뉴 사이드바
$(function () {
  $(".sidebar").css({ display: "none", "z-index": "10" });
  let status = true;
  $(".menu").click(function () {
    console.log(status);
    if (status) {
      $("header .bar1").addClass("on");
      $("header .bar2").addClass("on");
      $("header .bar3").addClass("on");
      $(".sidebar").css({ display: "block", "z-index": "10" });
    } else {
      $("header .bar1").removeClass("on");
      $("header .bar2").removeClass("on");
      $("header .bar3").removeClass("on");
      $(".sidebar").css({ display: "none", "z-index": "-1" });
    }
    status = !status;
  });
  $(".que").click(function () {
    $(this).next(".anw").stop().slideToggle(300);
    $(this).toggleClass("on").siblings().removeClass("on");
    $(this).next(".anw").siblings(".anw").slideUp(300);
  });
  //사이드바
  //코랄
  function clock() {
    let now = new Date();
    let second = now.getSeconds();
    let deg = (360 / 60) * second;
    let arr = [
      "땅의 비트를 들어라",
      "마음은 외로운 사냥꾼",
      "모두가 웃는 웹 'web for all'",
      "GSR 매가/관람 기록물",
      "지식을 공유하는 키트(KIT)로서의 웹사이트 'Local-first",
      "사물을 따라가기, 끌려가지 않으면서",
      "탈인간을 위한 실천: 사물의 윤리(1)",
      "배움의 바다는 무한하다(ver.2)",
      "'슬랙'에서 만나-프로덕트와 세계짓기",
      "열 손가락과 목소리를 조금씩 밀어내며",
      "그리기, 만지기, 가늠하기",
      "탈인간을 위한 실천: 사물의 윤리(1)",
      "출판의 다른 장소로서, 임프린트",
      "Q의 시간",
      "어려움에 대하여",
      "멀리에서 가까이",
      "두 사막 이야기: 도시 사막과 OS사막",
      "예술작품의 데이터화, 데이터의 예술작품화",
      "세마 코랄과 새로운 질서",
    ];
    let i = second % arr.length;

    $(".clock")
      .find(".title")
      .css({
        transform: "translate(-50%, -50%) rotate(" + deg + "deg)",
      })
      .text(arr[i]);

    setTimeout(clock, 1000);
  }
  clock();
  // 페이지 상단으로 스크롤
  /* scrollToTop();
  function scrollToTop() {
    $("html, body").animate({ scrollTop: 0 }, "fast");
  } */
  var swiper = new Swiper(".mySwiper", {
    direction: "horizontal",
    spaceBetween: 0,
    loop: true,
    loopAdditionalSlides: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    speed: 1000,
  });
});
