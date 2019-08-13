$(document).ready(function() {
  var zindex = 10;

  $("div.card").click(function(e) {
    e.preventDefault();

    var isShowing = false;

    if ($(this).hasClass("show")) {
      isShowing = true;
    }

    if ($("div.cards").hasClass("showing")) {
      // a card is already in view
      $("div.card.show").removeClass("show");

      if (isShowing) {
        // this card was showing - reset the grid
        $("div.cards").removeClass("showing");
      } else {
        // this card isn't showing - get in with it
        $(this)
          .css({ zIndex: zindex })
          .addClass("show");
      }

      zindex++;
    } else {
      // no cards in view
      $("div.cards").addClass("showing");
      $(this)
        .css({ zIndex: zindex })
        .addClass("show");

      zindex++;
    }
  });
});

filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName(".cards");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}
