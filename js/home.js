$(document).ready(function() {
    $("p").toggleClass("fade"); 
    $("img").toggleClass("gone");
    setTimeout(function() { 
        $('p').remove();$("header").addClass('show');
        $("nav").addClass('show');
        $("img").addClass('show');
        $("img").removeClass("gone");
    }, 6500);
});


