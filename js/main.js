function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");
    console.log('oi');
}



  $(".menu-hamburguer").click(function() {
    $(".menu-links ").toggle("open")
    $(".overlay").addClass("active-overlay")
    $(".menu-hamburguer").hide();
    $(".menu-close").toggle("open")

    
    /*$(".menu-links").sho("active-overlay")*/
})  

$(".menu-close").click(function() {
    $(".overlay").removeClass("active-overlay")
    console.log('olá');
    $(".menu-links").hide();
    $(".menu-close").hide();
    $(".menu-hamburguer").show();
    // $(".menu-links ").toggle("close");
   /*  $(".menu-close").toggle(function() {
     $(".menu-hamburguer").show();

    }) */
})



$(".product-info").click(function () {
    console.log('olá');
    $(this).toggleClass('product-info-highlight');
     //$(".popup .product-info::after").show();
}) 
 

