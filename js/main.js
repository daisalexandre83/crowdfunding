function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");
    console.log('oi');
}

$(document).ready(function() {
    $(".menu-close").hide();
    $(".nav").hide();
    $(".menu-hamburguer").click(function() {
        console.log('clicou');
        $(".nav").slideToggle("slow",function() {
            $(".menu-hamburguer").hide();
            $(".menu-close").show();
        })
    });

    $(".menu-close").click(function () {
        console.log('clicou');
        $(".nav").slideToggle("slow",function() {
         $(".menu-close").hide();
         $(".menu-hamburguer").show();
        });
    });
    
})

function showSmallerCircle() {
    console.log('oi');
    document.querySelector(".cicle::before").style.display = "block";
}