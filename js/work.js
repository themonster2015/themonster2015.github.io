var works = [
    {
    title: "Vacation Booking React App",
    pic: "img/work1.png"
  },
  {
    title: "Second Project",
    pic: "img/1.jpeg"
  },
  {
    title: "Third Project",
    pic: "img/1.jpeg"
  },
  {
    title: "Fourth Project",
    pic: "img/1.jpeg"
  }
 //,
  // {
  //   title: "Fifth Project",
  //   pic: "img/1.jpeg"
  // },
  // {
  //   title: "Sixth Project",
  //   pic: "img/1.jpeg"
  // },
  // {
  //   title: "Seventh Project",
  //   pic: "img/1.jpeg"
  // },
  // {
  //   title: "Eighth Project",
  //   pic: "img/1.jpeg"
  // }
]

// work section
  console.log(works);
 for(var i = 0; i < works.length; ++i ) {
  $("#work").append("\
  <div class='col-sm-3 col-md-3'>\
    <a href='https://github.com/danmainah/vacations-booking-front-end' class='work-img' ><img class='img-responsive' src='" + works[i].pic + "'>\
  <span class='info'><p class='proj-title'>React:</p>" + works[i].title  + "</span></a>\
    </a>\
  </div>\
");
  var images = $("#work img");
  if(i%2 === 0){
    $(images[i]).css("border", "2px solid DodgerBlue");
  } else {
    $(images[i]).css("border", "2px solid salmon");
  };
};

$(".work-img").mouseenter(function(){
  $(".info", this).show();
}).mouseleave(function(){
  $(".info", this).hide();
});