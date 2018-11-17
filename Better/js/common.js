function resize(){
//    document.getElementsByClassName("container").style.height=window.innerHeight;
//    document.getElementsByClassName("container").style.width=window.innerWidth;
    // $('#main-container').style.height=window.innerHeight;
    // $('#main-container').stype.width=window.innerWidth;
    $('.container').css('height',window.innerHeight);
    $('.container').css('width',window.innerWidth);
}

function onthescrool(){
    var a,b,c;
    a = $(window).height();
    var group = $("#container-intro");
    b = $(this).scrollTop();
    c = group.offset().top;
    d = a*0.1;
    if(b+c>a+d){
       $('#enjoytitle').fadeOut();
    } else {
       $('#enjoytitle').fadeIn();
    }
}

$(document).ready(function () {
    $(window).scroll(onthescrool);
    $(window).resize(resize);
    resize()   
});