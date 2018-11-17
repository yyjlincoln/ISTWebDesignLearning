var direc = 0; //0=DOWN 1=UP
var OrgTitle = 0;

function resize(){
//    document.getElementsByClassName("container").style.height=window.innerHeight;
//    document.getElementsByClassName("container").style.width=window.innerWidth;
    // $('#main-container').style.height=window.innerHeight;
    // $('#main-container').stype.width=window.innerWidth;
    $('.container').css('height',window.innerHeight);
    $('.container').css('width',window.innerWidth);
}

function onthescrool(){
    var a,b,c,d,e;
    a = $(window).height(); //Document-height
    var group = $("#container-intro");
    b = $(this).scrollTop(); //Scrool Distance from the top
    c = group.offset().top; //Where the content is from the top
    d = a*0.1;
    //console.log(screen.availHeight);
    e = b/(a-screen.availHeight); //Scrool Distance percentage

    var maxsc=0.15*$("#main-container").innerHeight();
    var maj=maxsc-$(window).scrollTop();
    if(maj>0){
        $("#enjoytitle").css("padding-top",String(OrgTitle-maxsc+maj)+"px")//b
    }
    //Follow main-container till it reaches 20%

    if(b+c>a+d){
       $('#enjoytitle').fadeOut();
    } else {
       $('#enjoytitle').fadeIn();
    }
}

$(document).ready(function () {
    $(window).scroll(onthescrool);
    $(window).resize(resize);
    OrgTitle=Number(String($("#enjoytitle").css("padding-top")).replace("px",""));
    console.log(OrgTitle);
    resize()   
});