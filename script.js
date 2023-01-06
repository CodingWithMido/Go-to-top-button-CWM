$(document).scroll(function(){
    if($(this).scrollTop() > 250){
        $(".goTopButton").addClass("active");
    } else {
    $(".goTopButton").removeClass("active"); 
    }
});

$(".goTopButton").click(function(){
    $("html").animate({
        scrollTop:0
    });
});