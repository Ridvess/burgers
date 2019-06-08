const sections = $('.section');
const display = $('.one-page-scroll');
let inScroll = false;
// const md = new MobileDetect(window.navigator.userAgent);
// const isMobile = md.mobile();

const switchActiveClassSideMenu = menuItemIndex => {
    $('.section__nav__item')
        .eq(menuItemIndex)
        .addClass("section__nav__item-active")
        .siblings()
        .removeClass("section__nav__item-active")
};

const performTransition = sectionEq => {
    if (inScroll) return;

    const transitionDuration = 0;
    const endOfInertion = 300;

        inScroll = true;
        const position = `${sectionEq * -100}%`;

        sections
            .eq(sectionEq)
            .addClass("is-active")
            .siblings()
            .removeClass("is-active");

        display.css({
            transform: `translateY(${position})`
        });

        setTimeout(()=>{
            switchActiveClassSideMenu(sectionEq);
            inScroll = false
            }, 1300)
};

const scrollToSection = direction => {
    const activeSection = sections.filter('.is-active');
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();

    if (direction === "next" && nextSection.length){
        performTransition(nextSection.index());
    }

    if (direction === "prev" && prevSection.length){
        performTransition(prevSection.index());
        console.log(nextSection.index())
    }
};



$(".wrapper").on('wheel', e =>{
    const deltaY = e.originalEvent.deltaY;


    if (deltaY > 0){
       scrollToSection("next")
    }

    if (deltaY < 0){
        scrollToSection("prev")
    }
});

$(".wrapper").on({
    wheel: e=>{
        const deltaY = e.originalEvent.deltaY;
    }

});

$(".wrapper").on('touchmove',e =>{
    e.preventDefault()
});

$(document).on("keydown", e =>{
    switch(e.keyCode){
        case 40:
            scrollToSection("next");
            break;
        case 38:
            scrollToSection("prev");
    }
});


$("[data-scroll-to]").on("click", e=>{
    e.preventDefault();
    const target = $(e.currentTarget).attr('data-scroll-to');
    console.log(target);
    performTransition(target);
});

// if(isMobile){
//     $(window).swipe({
//         swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
//             const nextOrPrev = direction === "up" ? "next" : "prev";
//
//             scrollToSection(nextOrPrev);
//         }
//     });
//
// }


