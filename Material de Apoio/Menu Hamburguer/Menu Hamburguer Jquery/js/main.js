

/* $(".nav-button").click(function(){
    $(".nav").toggleClass("open .xclose")
    console.log("oi")
})  */

$(document).ready(function () {
    
    $(".xclose").hide();
    $(".nav").hide();
    $(".hamburguer").click (function() {
        console.log("clicou");
        $(".nav").slideToggle("slow", function() {
            $(".hamburguer").hide();
            $(".xclose").show(); 
        });
    });

    $(".xclose").click(function() {
        $(".nav").slideToggle("slow", function() {
          $(".xclose").hide();
          $(".hamburguer").show();  
        }); 
     }); 

})




