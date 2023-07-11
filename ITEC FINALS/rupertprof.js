var i = 0; 			
var images = ['rovic1.jpg','rovic2.jpg','rovic3.jpg','rovic4.jpg'];	
var time = 4000;	
var slide_slide = document.querySelector('.slider');

function changeImg(){
    document.slide.src = images[i];
    if(i < images.length - 1){
    i++; 
    } else { 
    i = 0;
    }
    setTimeout("changeImg()", time);
}

window.onload=changeImg;

function prev(){
    if(i <= 0) i = images.length;
    i--;
    return button();
}
function next(){
    if(i >= images.length-1) i = -1 ;
    i++;
    return button();
}
function button(){
    return slide_slide.setAttribute('src', images[i]);
}