

export function getroll (){
    
    var images = document.getElementsByClassName("imb");
    images.forEach(function(img){
      img.classList.add('rotate-vertical')  ;
    });
}