$(document).on('ready', function() {
    $(".regular").slick({
        slidesToShow: 3,
        slidesToScroll: 1
    });
});

let team = ["analaura","annamaria","eloisa","raquel"];
let selectedMember = 1;

document.getElementById("carrosselarrowcontainer").addEventListener('click',()=>{
    team.forEach(member => {
        document.getElementById(member).style.display="none";
    });
    document.getElementById(team[selectedMember]).style.display="block";
    selectedMember++
    if (selectedMember>3){
        selectedMember=0
    }
})

var btn = document.getElementsByClassName("btn");
    var slide = document.getElementById("slide");

    btn[0].onclick = function(){
      slide.style.transform = "translateX(0px)";
      for(i=0; i<4;i++) {
        btn[i].classList.remove("active");
      }
      this.classList.add("active");
    }

    btn[1].onclick = function(){
      slide.style.transform = "translateX(-800px)";
      for(i=0; i<4;i++) {
        btn[i].classList.remove("active");
      }
      this.classList.add("active");
    }

    btn[2].onclick = function(){
      slide.style.transform = "translateX(-1600px)";
      for(i=0; i<4;i++) {
        btn[i].classList.remove("active");
      }
      this.classList.add("active");
    }

    btn[3].onclick = function(){
      slide.style.transform = "translateX(-2400px)";
      for(i=0; i<4;i++) {
        btn[i].classList.remove("active");
      }
      this.classList.add("active");
    }
