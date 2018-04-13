$('#submit-button').click(function () {
    var username_value="UserName :"+ $('#username').val();
    var password_value="Password :"+ $('#password').val();
    var email_value="Email :"+ $('#email').val();

    $('#user_text').text(username_value);
    $('#password_text').text(password_value);
    $('#email_text').text(password_value);
})