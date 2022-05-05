function ChangeMenu(Opc) {

    if (Opc == 0) {

        document.getElementById('MenuSecond').style.display = "block";
        document.getElementById('MenuFirst').style.display = "none";


    } else if (Opc == 1) {
        document.getElementById('MenuFirst').style.display = "block";
        document.getElementById('MenuSecond').style.display = "none";
    } else {

    }

}

$('.message a').click(function() {
    $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
})

var newwindow;

function ventanaNIP(url) {
    newwindow = window.open(url, 'name', 'height=400,width=600');
    if (window.focus) { newwindow.focus() }
}