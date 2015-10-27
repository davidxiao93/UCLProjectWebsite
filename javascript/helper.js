$(document).ready(function($) {
    
    $('a[href^="#"]').bind('click.smoothscroll', function(e) {
        e.preventDefault();
        
        // Get the current target hash
        var target = this.hash;
        // Animate the scroll bar action so its smooth instead of a hard jump
        $('html, body').stop().animate({
            'scrollTop' : $(target).offset().top - 60
        }, 200, 'swing', function() {
            window.location.hash = target;
        });
    });
    $('body').scrollspy({
        target: '.bs-docs-sidebar',
        offset: 70
    });

});