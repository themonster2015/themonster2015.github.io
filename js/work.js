var works = [
  "img/1.jpeg",
  "img/1.jpeg",
  "img/1.jpeg",
  "img/1.jpeg",
  "img/1.jpeg",
  "img/1.jpeg",
  "img/1.jpeg",
  "img/1.jpeg"
]

// work section
  console.log(works);
 for(var i = 0; i < works.length; ++i ) {
  $("#work").append("\
    <div class='col-sm-6 col-md-3'>\
      <img class='img-responsive' src='" + works[i] + "'>\
    </div>\
  ");
  var images = $("#work img");
  if(i%2 === 0){
    $(images[i]).css("border", "2px solid DodgerBlue");
  } else {
    $(images[i]).css("border", "2px solid salmon");
  };
};