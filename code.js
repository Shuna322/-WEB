$(document).ready(function(){
  $('#send').click(function(){
    var name = document.getElementById('name');
    var sname = document.getElementById('sname');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var passwordrepeat = document.getElementById('passwordrepeat');
    var adress = document.getElementById('adress');

    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
    var a = name.concat(sname,email,password,passwordrepeat,adress);
    document.getElementById("messeage").innerHTML = a;
  });
