
$('form.php-email-form').on('submit', function (e) {
    $(".loading").show();
    $("#emailSendButton").hide();
    e.preventDefault();

    $.ajax({
      type: 'post',
      url: 'forms/contact.php',
      data: $('form').serialize(),
      success: function (data) {
        if(data.success){
            $(".loading").hide();
            $(".error-message").hide();
            $(".sent-message").show();
        }else{
            $(".loading").hide();
            $(".error-message").show();
            $(".sent-message").hide();
        }
      }
    });

});

  function displayError(thisForm, error) {
    thisForm.querySelector('.loading').classList.remove('d-block');
    thisForm.querySelector('.error-message').innerHTML = error;
    thisForm.querySelector('.error-message').classList.add('d-block');
  }
