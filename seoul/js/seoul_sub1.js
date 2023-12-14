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
});
