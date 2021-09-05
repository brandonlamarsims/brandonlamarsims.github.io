const accordionSection = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < accordionSection.length; i++) {
  accordionSection[i].addEventListener("click", function() {
    this.classList.toggle("active");

    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
