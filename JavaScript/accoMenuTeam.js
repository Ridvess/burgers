
let item = $("#accoTeamItem");
let accoItem = $(document.getElementsByClassName('accordeon__item'));
let teamLink = $(".accordeon__item__link");
let accoLink = $(document.getElementsByClassName('accordeon__item__link'));
let teamClasses = ["accordeon__item-active"];
let teamElements = [item];

for (let i = 0; i < accoLink.length; i++){
    accHD[i].addEventListener('click', toggleItem, false);}

$(teamLink).on("click", function (e) {
    e.preventDefault();
    _toggleClass(teamElements, teamClasses)
;

});