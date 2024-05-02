// document.getElementById("myForm").addEventListener("submit", function (e) {
//   e.preventDefault();

//   // Get form values
//   fullName = document.getElementById("fullName").value;
//   email = document.getElementById("email").value;
//   phone = document.getElementById("phone").value;
//   education = document.getElementById("education").value;
//   course = document.getElementById("courseInterested").value;
//   sub = document.getElementById("subscribe").value;

//   // Create object to hold form data
//   var formData = {
//     fullName: fullName,
//     email: email,
//     phone: phone,
//     education: education,
//     course: course,
//     sub: sub,
//   };

//   // Convert object to JSON string
//   var formDataJSON = JSON.stringify(formData);

//   // Save form data to local storage
//   localStorage.setItem("formData", formDataJSON);

//   // Reset form
//   this.reset();

//   alert("Form data saved successfully!");
// });

document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();

  fullName = document.getElementById("fullName").value;
  email = document.getElementById("email").value;
  phone = document.getElementById("phone").value;
  education = document.getElementById("education").value;
  course = document.getElementById("courseInterested").value;
  sub = document.getElementById("subscribe").value;

  data= {
    name : fullName,
    mail : email,
    phone : phone,
    education : education,
    course : course,
    subscribe : sub
  }

  var jsonstring = JSON.stringify(data);

  localStorage.setItem("data", jsonstring)

  this.reset();

  console.log("your data is submitted.");
});

function popupMessage(event) {
    if (event == 'close') {
        document.getElementById("successPopup").style.display = 'none';
    }
    else {
        document.getElementById("successPopup").style.display = 'flex';
    }
}