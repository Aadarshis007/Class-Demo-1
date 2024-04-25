if (window.location.href.includes("home.html")) {
  document.getElementById("homeLink").style.color = "#1488CC";
}

latestDate = new Date().getFullYear()

// document.getElementById("latestYear").innerText = latestDate
document.getElementById("latestYear").innerText = new Date().getFullYear()

// random = 5656

// dummy(random)

// function dummy (number) {
//     alert(number);
//     console.log(number);
// }

let car = {
    model : "2024",
    color : "white",
    companyName : "rolls royes",
    price : "5cr.",
}

console.log("My car color is :", car.color);