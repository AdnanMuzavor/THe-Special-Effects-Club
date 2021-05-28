function button(){
    let btn=document.getElementById('btn');
    let yourps=document.getElementById('yourups');
    if(yourps.style.display!='none'){
       yourps.style.display='none';
       btn.style.transition="all 1s";
        btn.style.transform="translateY(-100%)";
        btn.innerHTML="CLICK ME!";
    }
    else {
     

        yourps.style.display='block';
        yourps.style.transition="all 2s";

        btn.style.transition="all 1s";
        btn.innerHTML="X";
     
        btn.style.transform="translateY(130px)";
        btn.style.transform="translate(40px,158px)";
        
    }



    }
