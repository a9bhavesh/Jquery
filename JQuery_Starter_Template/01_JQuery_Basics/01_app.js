$('#success-button').click(function () {
    $('#success-card').fadeToggle('slow');  //toggle the any element

    var button_value=$(this).attr('value'); //to get the valueof any attribute
    if (button_value=='HIDE'){  //Check the button value
        $(this).attr('value','SHOW');
    }
    if (button_value=='SHOW'){
        $(this).attr('value','HIDE');
    }
});
