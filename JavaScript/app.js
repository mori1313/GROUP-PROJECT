/* Nav Bar */
function showMenu() {
    var x = document.getElementById("phoneNav");
    if (x.style.display === "none"){
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

/* Parallax */

const parralax1 = document.getElementById("parralax1");
const parralax2 = document.getElementById("parralax2");

window.addEventListener('scroll', function(){

    let scrollPosition = window.pageYOffset
    let width = window.innerWidth
    
    if ( width > 1170 ) {
        parralax1.style.backgroundPositionY = ( scrollPosition + 500 ) * 0.5 + 'px'
        parralax2.style.backgroundPositionY = ( scrollPosition  ) * 0.5 + 'px'
    } else {
        parralax1.style.backgroundAttachment = "fixed"
        parralax2.style.backgroundAttachment = "fixed"
    }
})
