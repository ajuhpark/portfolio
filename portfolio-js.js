/*approaching UI as a function of state can make
our code easier to maintain and reuse.*/


function onReady(){

  //jump to section
  $('.js-anchor-link').click(function(e){
    e.preventDefault();
    var target = $($(this).attr('href'));
    if(target.length){
      var scrollTo = target.offset().top;
      $('body, html').animate({scrollTop: scrollTo+'px'}, 1000);
    }
  });


  //Scroll to top button
  //Get the button
  var mybutton = document.getElementById("myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.animate({scrollTop: scrollTo+'px'}, 1000) = 0;
    document.documentElement.animate({scrollTop: scrollTo+'px'}, 1000) = 0;
  }



};


window.onload = function() {
  onReady();
}
