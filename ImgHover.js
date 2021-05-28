let modal=document.getElementById('myModal');
let img=document.getElementById('myImg');
let modalImg=document.getElementById('img01')
let captiontxt=document.getElementById('caption');
img.onclick=function(){
    modal.style.display="block";
    modalImg.src=this.src;
    captiontxt.innerHTML=this.alt;
}

let close=document.getElementsByClassName("close")[0];
close.onclick=function(){
    modal.style.display="none";
}