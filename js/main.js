// all id will need
let navBtn = document.getElementById("menuBtn"),
  data = document.getElementById("data"),
  allToggle = document.getElementById("allToggle"),
  toggleIcon = document.getElementById("toggleIcon"),
  dropDownLink = document.getElementById("dropDownLink"),
  dropDown = document.getElementById("dropDown"),
  activeShadow = document.getElementById("activeShadow"),
  borderRight = document.getElementById("borderRight"),
  dropDownLink2 = document.getElementById("dropDownLink2"),
  dropDown2 = document.getElementById("dropDown2"),
  activeShadow2 = document.getElementById("activeShadow2");

// for navbar toggle
var toggle = 1;
navBtn.addEventListener("click", () => {
  if (toggle == 1) {
    data.style.display = "block";
    allToggle.style.display = "block";
    toggle = 0;
    toggleIcon.removeAttribute("class");
    toggleIcon.setAttribute("class", "flaticon-cancel");
  } else if (toggle == 0) {
    data.style.display = "none";
    allToggle.style.display = "none";
    toggle = 1;
    toggleIcon.removeAttribute("class");
    toggleIcon.setAttribute("class", "flaticon-menu");
  }
});

var dropTogle = 1;
var dropTogle2 = 1;

// for toggle links

dropDownLink.addEventListener("click", () => {
  if (dropTogle == 1) {
    dropDown.style.visibility = "visible";
    activeShadow.setAttribute("class", "active");
    borderRight.setAttribute("class", "forBorder");

    if (dropTogle2 == 0) {
      dropDown2.style.visibility = "hidden";
      activeShadow2.removeAttribute("class", "active");
      dropTogle2 = 1;
    }
    dropTogle = 0;
  } else if (dropTogle == 0) {
    dropDown.style.visibility = "hidden";
    activeShadow.removeAttribute("class", "active");
    borderRight.removeAttribute("class", "forBorder");
    dropDown2.style.visibility = "hidden";
    dropTogle = 1;
  }
});

dropDownLink2.addEventListener("click", () => {
  if (dropTogle2 == 1) {
    dropDown2.style.visibility = "visible";
    activeShadow2.setAttribute("class", "active");
    borderRight.setAttribute("class", "forBorder");

    if (dropTogle == 0) {
      dropDown.style.visibility = "hidden";
      activeShadow.removeAttribute("class", "active");
      dropTogle = 1;
    }
    dropTogle2 = 0;
  } else if (dropTogle2 == 0) {
    dropDown2.style.visibility = "hidden";
    activeShadow2.removeAttribute("class", "active");
    borderRight.removeAttribute("class", "forBorder");
    dropDown.style.visibility = "hidden";
    dropTogle2 = 1;
  }
});
