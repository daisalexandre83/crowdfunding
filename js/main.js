function myFunction(){
    var x = document.getElementById("myDiv");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else{
        x.style.display= "none";
    }
}

$(".nav-button").click(function() {
    $(".nav").toogleClass("open")
    console.log('oi');
})