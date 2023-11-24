// paralax
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  //$(".jumbotron img").css({
  //transform: "translate(0px, " + wScroll / 4 + "%)",
  //});

  //   about
  if (wScroll > $("#about").offset().top - 300) {
    $("#about .col-md-5").addClass("open");
    $(".pkiri").addClass("popen");
    $(".pkanan").addClass("popen");
  }
  //   skill
  if (wScroll > $("#skill").offset().top - 300) {
    $("#skill .card").each(function (i) {
      setTimeout(function () {
        $("#skill .card").eq(i).addClass("open");
      }, 700 * (i + 1));
    });
  }
});
