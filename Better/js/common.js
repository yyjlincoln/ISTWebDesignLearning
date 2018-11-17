window.onresize=resize;
function resize(){
//    document.getElementsByClassName("container").style.height=window.innerHeight;
//    document.getElementsByClassName("container").style.width=window.innerWidth;
    // $('#main-container').style.height=window.innerHeight;
    // $('#main-container').stype.width=window.innerWidth;
    $('.container').css('height',window.innerHeight);
    $('.container').css('width',window.innerWidth);
}
resize();
