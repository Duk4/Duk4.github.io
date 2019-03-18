//contact form code, when script tags are before html

$(document).ready(function(){
    $('.submit').click(function(event){
        var name = $('.name').val();
        var email = $('.email').val();
        var message = $('.message').val();
        var statusElm = $('.status');
        statusElm.empty();

        if(name.length>=2){
            statusElm.append('<div>Name is valid.</div>');
        } else {
            event.preventDefault();
            statusElm.append('<div>Name should have at least 3 characters!</div>');
        }

        if(email.length>5 && email.includes('@') && email.includes('.')){
            statusElm.append('<div>E-mail is valid.</div>');
        } else {
            statusElm.append('<div>E-mail is not valid!</div>');
            event.preventDefault();
        }

        if(message.length>5){
            statusElm.append('<div>Message is valid.</div>');
        } else {
            statusElm.append('<div>Message should have at least 5 characters!</div>');
            event.preventDefault();
        }
    });
});