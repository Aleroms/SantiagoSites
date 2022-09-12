$(document).ready(function(){
    $('#slider').hide();
    $('.project-card-overlay').hide();

    //toggles the buger menu for mobile view
    $('#burger').on('click', function(){
        $('#slider').slideToggle(420);
    });

    //toggles overlay for projects
    $('.projects-card').hover(function(){
        let overlay = $(this).find('.project-card-overlay');
        $(overlay).toggle(420);

    });

});
