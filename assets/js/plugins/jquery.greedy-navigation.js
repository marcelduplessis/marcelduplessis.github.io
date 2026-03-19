/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
*/

$(document).ready(function(){
  function updateNav() {
    var collapseWidth = 1066;
    var $vlinks = $('#site-nav .visible-links');
    var $hlinks = $('#site-nav .hidden-links');
    if ($(window).width() < collapseWidth) {
      $hlinks.empty();
      $($vlinks.children('li').toArray()).each(function(){ $hlinks.append(this); });
      $('#site-nav button').removeClass('hidden');
      $hlinks.removeClass('hidden');
      $('#site-nav').addClass('collapsed');
      $('.masthead__menu').addClass('collapsed');
    } else {
      $($hlinks.children('li').toArray()).each(function(){ $vlinks.append(this); });
      $('#site-nav button').addClass('hidden');
      $hlinks.addClass('hidden');
      $('#site-nav').removeClass('collapsed');
      $('.masthead__menu').removeClass('collapsed');
    }
  }

  $(window).resize(function() {
    updateNav();
  });

  $('#site-nav button').on('click', function() {
    $('#site-nav .hidden-links').toggleClass('hidden');
    $(this).toggleClass('close');
  });

  updateNav();
});