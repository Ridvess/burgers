
let accoItem = $(document.getElementsByClassName('accordeon__item'));


$(accoItem).on("click", function (e) {
    e.preventDefault();

    if(!$(this).hasClass('accordeon__item-active')){
        $('ul.accordeon__list li ').removeClass('accordeon__item-active');
    $(this).addClass('accordeon__item-active');
    $(this).next('accordeon__item__desc'); } else {
        $(this).removeClass('accordeon__item-active');
    }
});


