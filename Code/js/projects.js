// This code assumes you are using jQuery

$(".card").click(function() {
    window.location = $(this).find("a").attr("href");
    return false;
  });

  