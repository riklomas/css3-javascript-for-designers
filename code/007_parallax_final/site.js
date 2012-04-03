$(document).ready(function () {
  $(document).on("scroll", function () {
    var scrolled = $(document).scrollTop();

    $('#ball_1').css("top", -0.1 * scrolled);
    $('#ball_2').css("-webkit-transform", "translateX(" + (-0.3 * scrolled) + "px)");
    $('#ball_3').css("top", 0.2 * scrolled);

    $('#ball_1').css("background-color", "hsla(60, 100%, 40%, " + (1 - (0.005 * scrolled)) + ")");
    $('#ball_3').css("-webkit-transform", "rotate(" + (0.1 * scrolled) + "deg) scale(" + (1 - 0.002 * scrolled) + ")");
  });
});
