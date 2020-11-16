$(document).on("scroll", function(){
  if
    ($(document).scrollTop() > 100){
    $("header").addClass("shrink");
  }
  else
  {
    $("header").removeClass("shrink");
  }
});

function reveal() {
  var x = document.getElementById("showCV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}