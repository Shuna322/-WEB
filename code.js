$(document).ready(function() {
    var passwordrepeat = document.getElementById("passwordrepeat").value;
    $('#email').change(function() {
    var email = document.getElementById("email").value;
    if (email != "" && validateEmail(email) ) {
      document.getElementById("email").style.border = "2px solid rgb(0, 228, 16)";
    } else {
      document.getElementById("email").style.border = "2px solid rgb(204, 0, 0)";
    }
  });
  $('#name').change(function() {
    var name = document.getElementById("name").value;
    if (name != ""){
      document.getElementById("name").style.border = "2px solid rgb(0, 228, 16)";
    } else {
      document.getElementById("name").style.border = "2px solid rgb(204, 0, 0)";
    }
  });
  $('#sname').change(function() {
    var sname = document.getElementById("sname").value;
    if (sname != ""){
      document.getElementById("sname").style.border = "2px solid rgb(0, 228, 16)";
    } else {
      document.getElementById("sname").style.border = "2px solid rgb(204, 0, 0)";
    }
  });
  $('#adress').change(function() {
    var adress = document.getElementById("adress").value;
    if (adress != ""){
      document.getElementById("adress").style.border = "2px solid rgb(0, 228, 16)";
    } else {
      document.getElementById("adress").style.border = "2px solid rgb(204, 0, 0)";
    }
  });
  $('#password').change(function() {
    var password = document.getElementById("password").value;
    if (password.length > 6){
      document.getElementById("password").style.border = "2px solid rgb(0, 228, 16)";
    } else {
      document.getElementById("password").style.border = "2px solid rgb(204, 0, 0)";
    }
  });
  $('#passwordrepeat').change(function() {
    var password = document.getElementById("password").value;
    var passwordrepeat = document.getElementById("passwordrepeat").value;
    if (password == passwordrepeat){
      document.getElementById("passwordrepeat").style.border = "2px solid rgb(0, 228, 16)";
    } else {
      document.getElementById("passwordrepeat").style.border = "2px solid rgb(204, 0, 0)";
    }
  });
});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
