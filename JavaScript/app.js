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

window.addEventListener('scroll', function(){

    let scrollPosition = window.pageYOffset
    parralax1.style.backgroundPositionY = (scrollPosition + 100) * 0.5 + 'px'
})

const parralax2 = document.getElementById("parralax2");

window.addEventListener('scroll', function(){

    let scrollPosition = window.pageYOffset
    console.log(scrollPosition)
    parralax2.style.backgroundPositionY = ( scrollPosition - 1250 ) * 0.5 + 'px'
})