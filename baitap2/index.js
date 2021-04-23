$(document).ready(function(){
    $(".collapsible").click(function(){
        $(this).next().toggle();
        $(this).toggleClass("active")
    });
})