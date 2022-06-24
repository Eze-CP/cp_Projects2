let slideIndex = 1
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlides(n){
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slideshowContainer");
    if (n > slides.length)
    {slideIndex = 1}
    if (n < 1 )
    {slideIndex = slides.length}
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
      
    }
    slides[slideIndex-1].style.display ="flex";
   

}

window.onscroll = function()
    { myFunction()};
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction(){
    if (window.pageYOffset > sticky)
    {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

    



