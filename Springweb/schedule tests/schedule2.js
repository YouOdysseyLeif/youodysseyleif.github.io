$(document).ready(function() {
  var zindex = 10;

  $("div.card").click(function(e) {
    if ($(e.target).hasClass("readmore")) {
      var gotourl = event.target.href;
      window.location.href = gotourl;
      return false;
    }
    if ($(e.target).hasClass("ticket")) {
      var gotourl = event.target.href;
      window.open(gotourl);
      return false;
    }
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
  var $boxs = $(".card");
  var $btns = $(".date-btn").on("click", function() {
    var active = $btns
      .removeClass("active")
      .filter(this)
      .addClass("active")
      .data("filter");
    if ($("div.cards").hasClass("showing")) {
      $("div.cards").removeClass("showing");
    }
    $boxs
      .hide()
      .filter("." + active)
      .fadeIn(450);
  });
});

//console.log(
//  $(e.target).hasClass("readmore") || $(e.target).hasClass("ticket")
//);
//console.log(event.target.href);
