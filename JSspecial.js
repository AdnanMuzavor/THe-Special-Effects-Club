function button(){
    let btn=document.getElementById('btn');
    let yourps=document.getElementById('yourps');
    if(yourps.style.display!='none'){
       yourps.style.display='none';
       btn.style.transition="all 1s";
        btn.style.transform="translateY(-100%)";
      
    }
    else {
       

        yourps.style.display='block';
        btn.style.transition="all 1s";
        btn.style.transform="translateY(5%)";
    }



    }