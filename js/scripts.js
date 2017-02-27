// Twitter
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');


$(document).ready(function(){
  // Smooth scrolling
  var $root = $('html, body');
  $('.navbar-nav a').click(function() {
      var href = $.attr(this, 'href');
      $root.animate({
          scrollTop: $(href).offset().top
      }, 500, function () {
          window.location.hash = href;
      });
      return false;
  });

  // Stellar
  $.stellar();

  // Tooltips
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  $("#message").css("background-color", "pink");
  $("#button_contact").on("click", function() {
    event.preventDefault();
    var comment = $("#message").val();
    console.log(comment);
    $('#visible-comment').show();
    $('#visible-comment').html(comment);
    $('#message').hide();

    });
  });
  $("#message").on("keyup", function(){
     console.log("keyup happened");
     var charCount = $("#message").val().length;
     var comment = $("#message").val();
     
     $('#displayparent').show();
     $('#visible-comment').show();
    $('#visible-comment').html(comment);
     console.log(charCount);
     $('#char-count').show();
     $('#char-count').html(charCount);
     if(charCount > 50) {
      $("#char-count").css("color", "red");
    } else {
           $("#char-count").css("color", "white");
         }
  
    return false;
  });
  });
