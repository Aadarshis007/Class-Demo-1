function gridList(gridlist) {
  if (gridlist == "grid") {
    document.getElementById("gridViewIcon").src = "gridViewIcon.png";
    document.getElementById("listViewIcon").src = "listViewicon.png";
    document.getElementById("gridView").style.display = "flex";
    document.getElementById("listView").style.display = "none";
  } else {
    document.getElementById("gridViewIcon").src = "griddViewGray.png";
    document.getElementById("listViewIcon").src = "listViewBlue.png";
    document.getElementById("gridView").style.display = "none";
    document.getElementById("listView").style.display = "flex";
  }
}

if (window.location.href.includes("courses.html")) {
  console.log("courses.html");
  document.getElementById("coursesLink").style.color = "#1488CC";
  document.getElementById("totalShowCount").innerText = document.getElementById("gridView").childElementCount;
  document.getElementById("totalGridCount").innerText = document.getElementById("gridView").childElementCount;
  // document.getElementById("coursesLink").classList.add("activeLinkClass");
}
else if (window.location.href.includes("courses-main.html")) {
  document.getElementById("coursesLink").style.color = "#1488CC";
  
}
//  else if (window.location.href.includes("home.html")) {
//   document.getElementById("homeLink").style.color = "#1488CC";
//   console.log("home.html");
// } else {
//   console.log("not success");
// }

// x=54
// y=40

// if (x+y !== 100) {
//   console.log(x-=y);
//   console.log(x);
// }
// else {
//   console.log("below the range");
// }

// x+y<=100?console.log("iinside if"):console.log("inside else");

document.getElementById("latestYear").innerText = new Date().getFullYear()

// function searchResult() {}
