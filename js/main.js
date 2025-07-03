function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");
}



  $(".menu-hamburguer").click(function() {
    $(".menu-links ").toggle("open")
    $(".overlay").addClass("active-overlay")
    $(".menu-hamburguer").hide();
    $(".menu-close").toggle("open")
})  

$(".menu-close").click(function() {
    $(".overlay").removeClass("active-overlay")
    $(".menu-links").hide();
    $(".menu-close").hide();
    $(".menu-hamburguer").show();
})



$(".product-info").click(function () {
    console.log('olá');
    $(this).toggleClass('product-info-highlight');
}) 
 

