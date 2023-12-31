function toggleDropdown() {
  var dropdownContent = document.getElementById("dropdown-content");
  dropdownContent.classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropdown-button')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};



function flipArrow() {
  var arrow = document.getElementById("arrow");
  arrow.classList.toggle("flipped");
}

var arrowElement = document.getElementById("arrow");
arrowElement.addEventListener("click", flipArrow);