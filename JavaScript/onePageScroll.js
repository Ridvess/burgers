const sections = $('.section');
const display = $('.one-page-scroll');
let inScroll = false;
const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();

let body2 = $("body");
let overlay2 = $("#hamburgerOverlay");
let menu2 = $("#hamburgerMenu");
let classes2 = ["open", "active", "hidden"];
let elements2 = [menu2, overlay2, body2];

let _toggleClass2 = (element, className) => {
    element.forEach((item, index) => $(item).toggleClass(className[index]));
};

const switchActiveClassSideMenu = menuItemIndex => {
    $('.section__nav__item')
        .eq(menuItemIndex)
        .addClass("section__nav__item-active")
        .siblings()
        .removeClass("section__nav__item-active")
};

const performTransition = sectionEq => {
    if (inScroll) return;

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

    if ($(body2).hasClass("hidden")) {

    } else {
        if (direction === "next" && nextSection.length){
            performTransition(nextSection.index());
        }

        if (direction === "prev" && prevSection.length){
            performTransition(prevSection.index());

        }
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

$("[data-overlay-menu]").on("click", e=>{
    e.preventDefault();
    const target = $(e.currentTarget).attr('data-overlay-menu');
    performTransition(target);
    _toggleClass2(elements2,classes2);
});
$("[data-scroll-to]").on("click", e=>{
    e.preventDefault();
    const target = $(e.currentTarget).attr('data-scroll-to');
    performTransition(target);


});

if(isMobile){
    $(window).swipe({
        swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
            const nextOrPrev = direction === "up" ? "next" : "prev";

            scrollToSection(nextOrPrev);
        }
    });
 }


