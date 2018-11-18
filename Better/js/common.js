var lastScroll = 0; //0=DOWN 1=UP
var ScrollTarget = 0;
var ScrollOrientation = "down";
var OrgTitle = 0;
var Where = 0;
var Animate_Lock = false;
var LastWhere = 0;

function resize() {
    //    document.getElementsByClassName("container").style.height=window.innerHeight;
    //    document.getElementsByClassName("container").style.width=window.innerWidth;
    // $('#main-container').style.height=window.innerHeight;
    // $('#main-container').stype.width=window.innerWidth;
    $('.container').css('height', window.innerHeight);
    $('.container').css('width', window.innerWidth);
}

function ontheScroll() {
    // console.log("OntheScroll")
    var a, b, c, d, e;
    a = $(window).height(); //Document-height
    var group = $("#container-intro");
    b = $(this).scrollTop(); //Scroll Distance from the top
    c = group.offset().top; //Where the content is from the top
    d = a * 0.1;
    //console.log(screen.availHeight);
    e = b / (a - screen.availHeight); //Scroll Distance percentage

    var maxsc = 0.15 * $("#main-container").innerHeight();
    var maj = maxsc - $(window).scrollTop();
    if (maj > 0) {
//        console.log("Padding")
        $("#enjoytitle").css("padding-top", String(OrgTitle - maxsc + maj) + "px")//Dynamic
    } else {
        $("#enjoytitle").css("padding-top",String(OrgTitle - maxsc) + "px")//Maximum
    }
    //Follow main-container till it reaches 20%

    if (b + c > a + d) {
        $('#enjoytitle').fadeOut();
    } else {
        $('#enjoytitle').fadeIn();
    }

    
    //AutoScroll
    containers = $(".container")
    //Orientation Identify
    ScrollOn = $(this).scrollTop();
    //OnScroll Identify
    if (Animate_Lock == true) {
        //Animating, return
        //If it's the opposite orientation, scroll back (disable lock)
    } else {
        //Not animating
        Animate_Lock = true;
        if (ScrollOn > lastScroll) {
            //Down
            if (Where == containers.length - 1) {
                console.log("At the bottom.")
            } else {
                Where += 1;
                ScrollOrientation="down";
                ScrollTarget = $(containers[Where]).offset().top;
                $('html, body').animate({
                    scrollTop: ScrollTarget
                }, 1000);
            }
        } else if (ScrollOn < lastScroll) {
            //Up
            if (Where == 0){
                console.log("At the top.")
            } else {
                Where -=1;
                ScrollOrientation="up";
                ScrollTarget = $(containers[Where]).offset().top;
                $('html, body').animate({
                    scrollTop: ScrollTarget
                }, 1000);
            }
        } else {
        }
    }

    //Unlock Trial
    if(ScrollOrientation=="down"&&ScrollOn>=ScrollTarget){
        Animate_Lock=false;
    }
    if(ScrollOrientation=="up"&&ScrollOn<=ScrollTarget){
        Animate_Lock=false;
    }
    lastScroll = $(this).scrollTop()
}

function updateWhere(){
    //Update Where
    for(var i;i<containers.length;i++){
        if(i==0){
            var q=0;
        } else if(i==containers.length-1){
            return i; //Bottom
        } else {
            q=containers[i-1].offset().top
        }
        if(ScrollOn>=q&&ScrollOn<=containers[i].offset().top){
            return i-1;
        }
    }
    console.log("Where Updated",Where)
}

$(document).ready(function () {
    $(window).scroll(ontheScroll);
    $(window).resize(resize);
    OrgTitle = Number(String($("#enjoytitle").css("padding-top")).replace("px", ""));
    console.log(OrgTitle);
    resize()
});