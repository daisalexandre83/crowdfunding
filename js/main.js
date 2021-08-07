function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");
    console.log('oi');
}

$(document).ready(function() {
    $(".menu-close").hide();
    $(".nav").hide();
    $(".menu-hamburguer").click(function() {
        console.log('clicou');
    });
    
})