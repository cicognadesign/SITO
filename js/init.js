(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function() {

    $('.collapsible').collapsible();
    $('.slider').slider({
        full_width: true
    });
    $('.materialboxed').materialbox();
});