$(document).ready(function(){
    $('#slider').hide();

    $('#burger').on('click', function(){
        $('#slider').slideToggle(420);
    });
});
