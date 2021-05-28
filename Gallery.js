function left(){
    document.getElementById("left1").style.transform="translate(-515px,-10px)";
    document.getElementById("left1").style.opacity="1";
    document.getElementById("side3").style.zIndex="0";
    document.getElementById("right1").style.transform="translate(508px,-5px)";
    document.getElementById("right1").style.opacity="1";
    document.getElementById("side7").style.zIndex="0";
     }
    
    
    function aleft(){
        document.getElementById("left1").style.transform="translateX(0px)";
        document.getElementById("right1").style.transform="translateX(0px)"; 
        document.getElementById("side3").style.zIndex="1"; 
        document.getElementById("left1").style.opacity="0";
      //  document.getElementById("hd").style.opacity="0";
        document.getElementById("side7").style.zIndex="1"; 
        document.getElementById("left1").style.opacity="0";
        document.getElementById("right1").style.opacity="0"; 
        document.getElementById("right1").style.opacity="0";
    }
    