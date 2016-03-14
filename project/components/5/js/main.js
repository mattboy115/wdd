$(document).ready(function() {
    $('h3').on('click', function() {
        $('h3').not(this).siblings().slideUp(200);
        $(this).siblings().slideToggle(200);
        $(this).children('img').attr('src','../../images/accordion/minus.png');
    });
});
