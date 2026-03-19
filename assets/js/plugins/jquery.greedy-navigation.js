/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
*/

var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $hlinks = $('#site-nav .hidden-links');

function updateNav() {
  var collapseWidth = 800; // Set your desired breakpoint
  var menuItemsArray = $vlinks.children('li').toArray();
  console.log('Before collapse:', menuItemsArray.length, menuItemsArray.map(function(item){return $(item).text();}));
  if ($(window).width() < collapseWidth) {
    $hlinks.empty(); // Clear hidden-links before moving
    menuItemsArray.forEach(function(item){ $(item).appendTo($hlinks); });
    $btn.removeClass('hidden');
    $hlinks.removeClass('hidden');
    $nav.addClass('collapsed');
    $('.masthead__menu').addClass('collapsed');
    $btn.attr('count', $hlinks.children().length);
    console.log('After collapse:', $hlinks.children().length, $hlinks.children().map(function(){return $(this).text();}).get());
  } else {
    var hiddenItemsArray = $hlinks.children('li').toArray();
    hiddenItemsArray.forEach(function(item){ $(item).appendTo($vlinks); });
    $btn.addClass('hidden');
    $hlinks.addClass('hidden');
    $nav.removeClass('collapsed');
    $('.masthead__menu').removeClass('collapsed');
    $btn.attr('count', 0);
  }
}

$(window).resize(function() {
  updateNav();
});

$btn.on('click', function() {
  $hlinks.toggleClass('hidden');
  $(this).toggleClass('close');
});

updateNav();