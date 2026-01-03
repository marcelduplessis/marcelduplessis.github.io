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

var breaks = [];

function updateNav() {

  var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;

  /* original code to move items one by one between lists 

  // The visible list is overflowing the nav
  if($vlinks.width() > availableSpace) {

    // Record the width of the list
    breaks.push($vlinks.width());

    // Move item to the hidden list
    $vlinks.children('*:not(.masthead__menu-item--lg)').last().prependTo($hlinks);

    // Show the dropdown btn
    if($btn.hasClass('hidden')) {
      $btn.removeClass('hidden');
    }

  // The visible list is not overflowing
  } else {

    // There is space for another item in the nav
    if(availableSpace > breaks[breaks.length-1]) {

      // Move the item to the visible list
      $hlinks.children().first().appendTo($vlinks);
      breaks.pop();
    }

    // Hide the dropdown btn if hidden list is empty
    if(breaks.length < 1) {
      $btn.addClass('hidden');
      $hlinks.addClass('hidden');
    }
  } original code ends here /*/ 

  // New code to move all overflowing items at once
  // The visible list is overflowing the nav
  if ($vlinks.width() > availableSpace) {

    // Move ALL items (except any .masthead__menu-item--lg) to the hidden list
    $vlinks.children('*:not(.masthead__menu-item--lg)').appendTo($hlinks);

    // Record that we've overflowed; use 1 “break” to indicate all are hidden
    breaks = [$hlinks.children().length];

    // Show the dropdown button
    $btn.removeClass('hidden');

  } else {

    // There is space for another item in the nav AND we are in "all visible" mode
    if (breaks.length < 1 && $hlinks.children().length === 0) {
      // normal case: nothing to move back, everything already visible
    }

    // If you want to allow “all back to visible” when there is enough space:
    if (breaks.length >= 1 && availableSpace > $nav.width()) {
      // Move everything back to visible list
      $hlinks.children().appendTo($vlinks);
      breaks = [];
      $btn.addClass('hidden');
      $hlinks.addClass('hidden');
    }

    // Hide the dropdown btn if hidden list is empty
    if ($hlinks.children().length === 0) {
      $btn.addClass('hidden');
      $hlinks.addClass('hidden');
      breaks = [];
    }
  }


  // Keep counter updated
  // $btn.attr("count", breaks.length); original line
  $btn.attr("count", $hlinks.children().length); // new line to show number of hidden items

  // Recur if the visible list is still overflowing the nav - we have removed the recursive call
  // if($vlinks.width() > availableSpace) {
  //   updateNav();
  // }

}

// Window listeners

$(window).resize(function() {
  updateNav();
});

$btn.on('click', function() {
  $hlinks.toggleClass('hidden');
  $(this).toggleClass('close');
});

updateNav();