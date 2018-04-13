$('#login-button').click(function () {
    $('#form-card-header').removeClass('bg-teal').addClass('bg-success');
    $('.card-title').text('Login Here');
    var submit_button=$('#submit-button');
    submit_button.removeClass('btn-teal').addClass('btn-success');
    submit_button.text('Login');

})

$('#register-button').click(function () {
    $('#form-card-header').removeClass('bg-success').addClass('bg-warning');
    $('.card-title').text('Register Here');
    var submit_button=$('#submit-button');
    submit_button.removeClass('btn-success').addClass('btn-warning');
    submit_button.text('Registration');

})

$('#signup-button').click(function () {
    $('#form-card-header').removeClass('bg-warning').addClass('bg-teal');
    $('.card-title').text('Signup Here');
    var submit_button=$('#submit-button');
    submit_button.removeClass('btn-warning').addClass('bg-teal');
    submit_button.text('Signup');

})