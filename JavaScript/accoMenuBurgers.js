
let accoItem1 = $(document.getElementsByClassName('menu-acco__item'));


$(accoItem1).on("click", function (e) {
    e.preventDefault();

    if(!$(this).hasClass('accordeon__item-active')){
        $('ul.menu-acco li ').removeClass('active');
        $(this).addClass('active');} else {
        $(this).removeClass('active');
    }
});


