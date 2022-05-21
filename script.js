$(document).ready(function(){

    $('#menu-btn').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('active')
    })

    $(window).onScroll(function(){
        $(this).removeClass('fa-times');
        $('.navbar').removesClass('active')
    })


})





