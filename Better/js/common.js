window.onresize=resize;
function resize(){
    document.getElementById("main-container").style.height=window.innerHeight;
    document.getElementById("main-container").style.width=window.innerWidth;
    // $('#main-container').style.height=window.innerHeight;
    // $('#main-container').stype.width=window.innerWidth;
    // $('#main-container').css('height',window.innerHeight);
    // $('#main-container').css('width',window.innerWidth);
}
resize();
