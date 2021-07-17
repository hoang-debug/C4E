var modal = document.getElementById("myModal");
let navbar = document.getElementById("navbar");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img01 = document.getElementById("myImg01");
var img02 = document.getElementById("myImg02");
var modalImg = document.getElementById("img01");
img01.onclick = function(){
    navbar.style.display="none";
  modal.style.display = "block";
  modalImg.src = this.src
}
img02.onclick = function(){
    navbar.style.display="none";
  modal.style.display = "block";
  modalImg.src = this.src
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  navbar.style.display = "flex";
}