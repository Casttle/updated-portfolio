// Initialize Firebase
const config = {
    apiKey: "AIzaSyAmpYGsQQTcMPsGeg5jXH3PVPT9zXbxqwI",
    authDomain: "contact-page-929bb.firebaseapp.com",
    databaseURL: "https://contact-page-929bb.firebaseio.com",
    projectId: "contact-page-929bb",
    storageBucket: "contact-page-929bb.appspot.com",
    messagingSenderId: "716346762251"
  };
  firebase.initializeApp(config);
  const database = firebase.database();

$("#submit").on("click", (event) => {
    event.preventDefault();
    const name = $("#nameBox").val();
    const email = $("#emailBox").val();
    const message = $("#messageBox").val();

    database.ref().push({
       Name: name,
       Email: email,
       Message: message, 
    });
    $(".form-control").val("");
});


window.onscroll = () => {headerStick()};

const header = document.getElementById("header");
const sticky = header.offsetTop;

const headerStick = () => {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
