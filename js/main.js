function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");
    console.log('oi');
}

/* $(document).ready(function() {
    $(".header-right > a").click(function() {
         $(".hamburguer-menu").addClass("active");
        console.log('oi');
    });

    $(".close").click(function() {
        $(".hamburger-menu").removeClass("active");
    });

}) */

  $(".menu-hamburguer").click(function() {
    console.log('oi');
    $(".menu-links ").toggle("open")
    $(".menu-hamburguer").toggle(function() {
        $(".menu-close").toggle();
    })

$(".menu-close").click(function() {
    console.log('olá');
    $(".menu-links ").toggle("close");
    $(".menu-close").toggle(function() {
        $(".menu-hamburguer").toggle();
    })
})

})  

$(".product-info").click(function () {
     $(".popup .product-info::after").show();
    console.log('olá');
}) 
 
$(".cicle").click(function() {
    $(".cicle::before").show();
    console.log('daiane');
})