const slider = document.querySelector('.slider');

const prevBtn = document.querySelector('.prev'); 
const nextBtn = document.querySelector('.next');
 const images = document.querySelectorAll(' .image img');
let b1= document.getElementById('b1');
let b2= document.getElementById('b2');
let b3= document.getElementById('b3');
let b4= document.getElementById('b4');
let b5= document.getElementById('b5');
let b6= document.getElementById('b6');
//getting the number of images

 const imagesLength = images.length;

//defining the slider width according to number of images 
slider.style.width = `${imagesLength * 100}%`;

let currentIndex = 0; //current image index
    
nextBtn.addEventListener('click',()=>{
    console.log("value of current index is:"+currentIndex)
currentIndex+=1;
if(currentIndex==6){
    currentIndex=0;
    b6.style.opacity='0';
}
if(currentIndex == 0){
    b1.style.opacity='1';
    b6.style.opacity='0';
   
    console.log("value of current index (in if)is:"+currentIndex)
}
if(currentIndex == 1){
    b2.style.opacity='1';
    b1.style.opacity='0';
    b2.style.transform='translateX(-100%)'
    console.log("value of current index (in if)is:"+currentIndex)
}
else if(currentIndex==2){
    b3.style.opacity='1';
    b2.style.opacity='0';
    b3.style.transform='translateX(-200%)'
    console.log("value of current index (in if)is:"+currentIndex)

}
else if(currentIndex==3){
    b4.style.opacity='1';
    b3.style.opacity='0';
    b4.style.transform='translateX(-300%)'
    console.log("value of current index (in if)is:"+currentIndex)
}


else if(currentIndex==4){
    b5.style.opacity='1';
    b4.style.opacity='0';
    b5.style.transform='translateX(-400%)'
    console.log("value of current index (in if)is:"+currentIndex)
}

else if(currentIndex==5){
    b6.style.opacity='1';
    b5.style.opacity='0';
    b6.style.transform='translateX(-500%)'
    console.log("value of current index (in if)is:"+currentIndex)
}


}

)


prevBtn.addEventListener('click',()=>{
console.log("value of current index is:"+currentIndex)

console.log("value of current index now is:"+currentIndex)
if(currentIndex==6){
    currentIndex=1;
    b6.style.opacity='0';
}
if(currentIndex == 0){
    b1.style.opacity='0';
    b6.style.opacity='1';
   
    console.log("value of current index (in if)is:"+currentIndex)
}
if(currentIndex == 1){
    b1.style.opacity='1';
    b2.style.opacity='0';
    b1.style.transform='translateX(0%)'
  
}
else if(currentIndex==2){
    b2.style.opacity='1';
    b3.style.opacity='0';
    b2.style.transform='translateX(-100%)'
   
}
else if(currentIndex==3){
    b3.style.opacity='1';
    b4.style.opacity='0';
    b3.style.transform='translateX(-200%)'
}
else if(currentIndex==4){
    b4.style.opacity='1';
    b5.style.opacity='0';
    b2.style.transform='translateX(-300%)'
}
else if(currentIndex==5){
    b5.style.opacity='1';
    b6.style.opacity='0';
    b5.style.transform='translateX(-400%)'
   
}

}

)


prevBtn.addEventListener('click', ()=>{

    if(currentIndex>0){
        currentIndex-=1;
        slider.style.transform='translateX(-${(100/imagesLength)*currentIndex}%)';
    }
    else if(currentIndex==0){
        slider.style.transform='translateX(-${(100/imagesLength)*(imagesLength-1)}';
        currentIndex=imagesLength-1;
    }

})





