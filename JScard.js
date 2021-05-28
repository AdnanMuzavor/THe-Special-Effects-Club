function buttoned() {
    console.log("Button clicked");
    let upper = document.getElementById("upper");
    let lower = document.getElementById("lower");
    let btn = document.getElementById("btn");
    if (lower.style.display != "none")
    {
      console.log("display-not-none");
      lower.style.opacity = "1";

      lower.style.transition = "all 1s";
      lower.style.transform = "translate(-100px,-125px)";
      // btn.innerHTML = "X";
    }
  }
  function buttoned2() {
    let btn2 = document.getElementById("btn2");
   // console.log("html-X");
    //console.log("html-X");
    btn.innerHTML = "click";
    lower.style.transition = "all 1s";
    lower.style.transform = "translate(100px,125px)";
    lower.style.opacity = "0";
  }

  let text = document.getElementById("text");
  text.addEventListener('mouseover', function run() {
    alert('Click on the link below to know more');
  });
  let link = document.getElementById('link');
  link.addEventListener('click', function view() {
    let con = confirm("This effect will amaze you");
    let count = 0;
    if (con == true)
    {
    
      count = 1;
      let btn2 = document.getElementById('btn2');
      btn2.style.transform = "translate(350px,24px)";


      let cont2 = document.getElementById('lower');
      cont2.style.width = "500px";
      cont2.style.height = "300px";
      let ul = document.getElementById('ul');
      ul.style.transform = "translate(205px,138px)";
      let btn3 = document.getElementById("btn3");
      btn3.style.transform = "translate(-95px,148px)";
      let about = document.getElementById('about').style.display = "block";
      about.style.transition = "all 2s";
      about.style.tranform = "translate(-100px,0px)";

      //let link=document.getElementById('link');
      //link.style.transition="all 1s";
      //link.style.transform="translateX(100px)";
    }

  });
  function buttoned3() {
    count=0;
    let cont2 = document.getElementById('lower');
    cont2.style.width = "120px";
    cont2.style.height = "120px";
    let about = document.getElementById('about').style.display = "none";
    let ul = document.getElementById('ul');
    ul.style.transform = "translate(0px,-5px)";
    let btn2 = document.getElementById('btn2');
    btn2.style.transform = "translate(-28px,-0px)";
  }