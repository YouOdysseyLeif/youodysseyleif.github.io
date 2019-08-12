function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
    document.querySelectorAll("div.card").click(function(e){
        e.preventDefault();

        var isShowing = false;

        var cards_showing = document.getElementsByClassName("show");

          for(var i =0; i<cards_showing.length; i++){
            cards_showing[i].isShowing = true;
          }
        }

        if (document.querySelector("div.cards").hasClass("showing")) {
          document.querySelector("div.cards.show").removeClass("show");
                    
  }
}