
let accoItem1 = $(document.getElementsByClassName('menu-acco__item'));
let accoClose = $(document.getElementsByClassName('menu-acco__content__close'));


$(accoItem1).on("click", function (e) {
    e.preventDefault();

    if(!$(this).hasClass('accordeon__item-active')){
        $('ul.menu-acco li ').removeClass('active');
        $(this).addClass('active');} else {
        $(this).removeClass('active');
    }
});

$(accoClose).on("click", e=>{
    e.preventDefault();
    if(!$(this).hasClass('accordeon__item-active')) {
        $('ul.menu-acco li ').removeClass('active');
        console.log("click")
    }
});
// if(!$(this).hasClass('accordeon__item-active')){
//     $('ul.menu-acco li ').removeClass('active');
//     // this.style.position = "absolute";
//     // this.style.zIndex = "10";
//     $(this).addClass('active');} else {
//     $(this).removeClass('active');
//     // this.style.position = "relative";
//     // this.style.zIndex = "0";
// }
// });




