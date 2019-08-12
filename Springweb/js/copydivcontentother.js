function copyDiv() {
  var firstDivContent = document.getElementById("mydiv1");
  var secondDivContent = document.getElementById("mydiv2");
  secondDivContent.innerHTML = firstDivContent.innerHTML;
}

//Call copyDiv on body="onload"
copyDiv();
