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