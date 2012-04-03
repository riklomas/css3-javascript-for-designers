$(document).ready(function () {
  $("a.button").on("click", function () {
    $("#signup").fadeIn(500);
    return false;
  });

  $("#signup a.close").on("click", function () {
    $("#signup").fadeOut(500);
    return false;
  });
});
