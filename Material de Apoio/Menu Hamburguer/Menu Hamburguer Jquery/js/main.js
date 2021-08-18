

 $(".nav-button1").click(function(){
    $(".nav").toggle("open")
    $(".nav-button1").toggle(function() {
        $(".nav-button2").toggle();
    });

    $(".nav-button2").click(function () {
        $(".nav").toggle("close")
        $(".nav-button2").toggle(function() {
            $(".nav-button1").toggle();
    })
})
    /* $(".nav-button1").hide();
    $(".nav-button2").show(); 
    $(".nav-button2").show();  */
    /* $(".nav").toggleClass("open")
     $(".nav-button1").slideUp("slow", function() { 
    }); 


    $(".nav-button2").click(function() {
        $(".nav").slideToggle("slow", function() {
         // $(".nav-button2").hide();
          $(".nav-button1").show();  
        }); 
     }); */




    console.log("oi")
})  

/* $(document).ready(function () {
    
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

 */


