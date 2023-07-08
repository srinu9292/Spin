function closeLoadingPage()
{
    document.getElementById("load").style.display="none"
}
function rotateWheel()
{
    var randomNum=Math.floor(Math.random()*360);
    document.getElementById("wheel").style.transition="rotate 10s"
    document.getElementById("wheel").style.rotate=randomNum*100+"deg"
}