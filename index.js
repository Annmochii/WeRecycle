var btn = document.getElementsByClassName("btn");
var slide = document.getElementById("slide");

let actual = 0;
amount = 816.666

btn[0].onclick = function(){
  slide.style.transform = "translateX(0px)";
  for(i=0; i<4;i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
  actual = 0;
}

btn[1].onclick = function(){
  slide.style.transform = "translateX(-816.666px)";
  for(i=0; i<4;i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
  actual = 1;
}

btn[2].onclick = function(){
  slide.style.transform = "translateX(-1633.333px)";
  for(i=0; i<4;i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
  actual = 2;
}

btn[3].onclick = function(){
  slide.style.transform = "translateX(-2450px)";
  for(i=0; i<4;i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
  actual = 3;
}

console.log("teste")

document.getElementById("rnewarrowcontainer").addEventListener('click',()=>{
  if(actual<3){
    actual +=1;
    for(i=0; i<4;i++) {
      btn[i].classList.remove("active");
    }
    slide.style.transform = `translateX(-${amount*actual}px)`;
    btn[actual].classList.add("active");
  }
})

document.getElementById("lnewarrowcontainer").addEventListener('click',()=>{
  if(actual>0){
    actual -=1;
    for(i=0; i<4;i++) {
      btn[i].classList.remove("active");
    }
    slide.style.transform = `translateX(-${amount*actual}px)`;
    btn[actual].classList.add("active");
  }
})