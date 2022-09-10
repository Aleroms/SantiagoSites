$(document).ready(function(){
    $('#slider').hide();
    $('.project-card-overlay').hide();

    $('#burger').on('click', function(){
        $('#slider').slideToggle(420);
    });
});
