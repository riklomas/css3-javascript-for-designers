$(document).ready(function () {
  $("a.button").on("click", function () {
    $("#signup").fadeIn(500);
    return false;
  });

  $("#signup a.close").on("click", function () {
    $("#signup").fadeOut(500);
    return false;
  });

  $("ul#thumbs li a").on("click", function () {
    $(this).parent().addClass("selected").siblings().removeClass("selected");
    $("#product_image").attr("src", $(this).attr("href"));
    return false;
  });
});
