$(document).ready(function(){
  $('#send').click(function(){
      validateForm();
  });

  function validateForm(){
    $('.reg').validate({ // initialize the plugin
        rules: {
            field1: {
                required: true,
                minlength: 5
            },
            field2: {
                required: true,
                minlength: 5
            }
            field3: {
                required: true,
                email: true
              }
        }
        messages: {
          field1 : {
            required : 'Ввведіть ім"я'
          }
        }
    });
  }

});
