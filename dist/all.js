
let accoItem1 = $(document.getElementsByClassName('menu-acco__item'));
let accoClose = $(document.getElementsByClassName('acco__close-cross'));


$(accoItem1).on("click", function (e) {
    e.preventDefault();

    if(!$(this).hasClass('accordeon__item-active')){
        $('ul.menu-acco li ').removeClass('active');
        $(this).addClass('active');} else {
        $(this).removeClass('active');
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

// $(accoClose).on("click", e=>{
//
//     $('ul.menu-acco li ').removeClass('active');
//
//     console.log("click")
// });




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



//jQuery code

let body = $("body");
let overlay = $("#hamburgerOverlay");
let menu = $("#hamburgerMenu");
let link = $(".ham-menu__link");
let classes = ["open", "active", "hidden"];
let elements = [menu, overlay, body];

var _toggleClass = (element, className) => {
    element.forEach((item, index) => $(item).toggleClass(className[index]));
};

$(menu).on("click", e => {
    e.preventDefault();
    console.log("click");
// cross animation
    _toggleClass(elements, classes);
});

$(link).on("click", function (e) {
    e.preventDefault();
    const scroll_el = $(this).attr("href");
    console.log($(this).attr("href"));

    if ($(scroll_el).length > 0) {
        $("html").animate({scrollTop: $(scroll_el).offset().top}, 600, () => {
            _toggleClass(elements, classes);
        });
    }
});

// slider

const sliderList = document.querySelector(".slider__list");
let sliderItems = document.querySelectorAll(".slider__item");


const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
let counter = 1;
sliderList.style.transform = "translateX(" + -100 * counter + "%)";

["first", "last"].forEach(side => createClone(side)) ;

sliderItems = document.querySelectorAll(".slider__item");

function createClone(side){
    let cloneElement = document.createElement("li");
    cloneElement.classList.add("burger__content", "slider__item");
    cloneElement.id = side+"Clone" ;

    if(side === "first"){
        cloneElement.innerHTML = sliderItems[sliderItems.length - 1].innerHTML;
        sliderList.insertBefore(cloneElement, sliderList.firstChild)
    }
    if(side === "last"){
        cloneElement.innerHTML = sliderItems[0].innerHTML;
        sliderList.appendChild(cloneElement);
    }
}

function animateSlide(){
    sliderList.style.transform = "translateX(" + -100 * counter + "%)";
    sliderList.style.transition = "transform 1s ease-in-out"
}

prevBtn.addEventListener("click", e =>{
    e.preventDefault();
    if(counter <= 0) return;
    animateSlide(counter--);
});

nextBtn.addEventListener("click", e =>{
    e.preventDefault();
    if(counter >= sliderItems.length - 1) return;
    animateSlide(counter++)
});

sliderList.addEventListener("transitionend", e => {
    if (sliderItems[counter].id === "lastClone"){
        sliderList.style.transition = "none";
        counter = sliderItems.length - counter;
        sliderList.style.transform = "translateX(" + -100 * counter + "%)";
    }

    if (sliderItems[counter].id === "firstClone"){
        sliderList.style.transition = "none";
        counter = sliderItems.length - 2;
        sliderList.style.transform = "translateX(" + -100 * counter + "%)";
    }
});

console.log("-First task");
let name = "Роман";
console.log(name);
name = "Алексей";
console.log(name);
//-------------------
console.log("-Second task");

if ( 1 == 1 ) {
    console.log("true")
} else {
    console.log("false");
}

if ( 12 == 1 ) {
    console.log("true")
} else {
    console.log("false");
}

console.log("-Third task");

for(let i = 0; i < 10; i++){
    let a = 1;
    a+=a;
    console.log(a)
}

console.log("-Fourth task");

function sum(p1, p2, p3) {
    let result = 0;
    result = p1 + p2 + p3;
    return result;
}

console.log(sum(3, 10, 1));


console.log("-Fifth task");

var array = ['привет', 'loftschool'];
array.push('я изучаю', 'javascript');
console.log(array.length);
for (i = 0; i < array.length; i++){
    console.log(array[i])
}

console.log("-Sixth task");

let numberArray = [23, 542, 56, 543, 211, 1, 34, 99, 100, 111];
for (i=0; i<numberArray.length; i++){
    if(numberArray[i] > 100){
        console.log(numberArray[i]);
    }
}

console.log("-Seventh task");

let person = {name: 'Роман', lastName: 'Филипенко', age: 20 };

console.log(person.name);
console.log(person.lastName);
console.log(person.age);

person.name = 'Виктор';

console.log(person.name);

console.log("-Eighth task");

var human = {name:'', lastName: '', age: 0};
human.name = 'Роман';
human.lastName = 'Филипенко';
human.age = 20;

function hello(human) {
    return ("Привет, меня зовут " + human.name +" "+ human.lastName +
        " и мне " + human.age + " лет!")
}

console.log(hello(human));

var array = [];
var newArray = [];

function filter(array, than) {
    if (array.length === 0){
        throw new Error('пустой массив')
    }
    for (let j = 0; j < array.length; j++) {
        if (!isFinite(array[j])){
            throw new Error('элемент массива должен быть числом')
        } else if (array[j] < 0){
            throw new Error('элемент массива должен быть положительным')
        }
        if (array[j] > than) {
             newArray.push(array[j])
        }
    }return newArray
}

try{
    var result = filter(array, 35);
    console.log(result);
} catch (e) {
    console.log(e.message)
}




const template = document.querySelector("#overlayTemplate").innerHTML;
const overlay1 = createOverlay(template);

    function createOverlay(template){
        let fragment = document.createElement("div");

        fragment.innerHTML = template;

        const overlayElement = fragment.querySelector(".overlay");
        const title = fragment.querySelector(".overlay__title");
        const text = fragment.querySelector(".overlay__text");
        const closeElement = fragment.querySelector("#close-overlay");

        fragment = null;

        overlayElement.addEventListener("click", e => {
            if (e.target === overlayElement){
                closeElement.click();
            }
        });

        closeElement.addEventListener("click", e =>{
            e.preventDefault();

            document.body.removeChild(overlayElement);
            $("body").attr("style", "overflow: visible");
        });

        return {
            open(){
                document.body.appendChild(overlayElement);
                $("body").attr("style", "overflow: hidden");
            },
            close(){
                closeElement.click();
            },
            setContent(customText, customTitle){
                if(customTitle){
                    title.innerHTML = customTitle;
                }
                text.innerHTML = customText;
            }
        }
    }

//reviews
    const openReview = $(".reviewBtn");

    $(openReview).on("click", e =>{
        e.preventDefault();

        const item = $(e.currentTarget).closest(".reviews__item");
        const name = $(item)
            .find(".review__title ")
            .text();
        const text = $(item)
            .find(".review__text p")
            .text();

        overlay1.open();
        overlay1.setContent(text, name);
    });

// order form
    const orderForm = document.querySelector("#order-form");

    orderForm.addEventListener("submit", submitForm);

    function submitForm(e) {
        e.preventDefault();
        const form = e.target;
        console.log(form);
        const request = ajaxForm(form);

        request.addEventListener("load", function () {
            if(request.status >= 400) {
                overlay1.open();
                overlay1.setContent("Произошла ошибка: " + request.response.message);
            } else {
                overlay1.open();
                overlay1.setContent(request.response.message);
            }
        });
    }

    const ajaxForm = function (form) {
        const formData = new FormData(form);
        const url= "https://webdev-api.loftschool.com/sendmail";
        const mail = "shylemming@gmail.com";
        formData.append("to", mail);

        const xhr = new XMLHttpRequest();
        xhr.responseType = "json";
        xhr.open("POST", url);
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        xhr.send(formData);

        return xhr;
    };





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



ymaps.ready(init);

var placemarks = [
    {
        latitude: 59.97,
        longitude: 30.31,
        hintContent: '<div class="map__hint">ул. Литераторов, д.19</div>',
        balloonContent: [
            '<div class="map__balloon">',
            'Самые вкусные бургеры у нас!',
            '</div>'
        ]
    },
    {
        latitude: 59.94,
        longitude: 30.25,
        hintContent: '<div class="map__hint">Малый проспект В О, д. 64</div>',
        balloonContent: [
            '<div class="map__balloon">',
            'Самые вкусные бургеры у нас!',
            '</div>'
        ]
    },
    {
        latitude: 59.93,
        longitude: 30.34,
        hintContent: '<div class="map__hint">наб. реки Фонтанки, д. 56</div>',
        balloonContent: [
            '<div class="map__balloon">',
            'Самые вкусные бургеры у нас!',
            '</div>'
        ]
    }
];

var geoObjects= [];

function init() {
    var map = new ymaps.Map("mapContainer", {
        center: [59.94, 30.32],
        zoom: 12,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });

    for(var i = 0; i < placemarks.length; i++){
        geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude], {
                hintContent: placemarks[i].hintContent,
                balloonContent: placemarks[i].balloonContent.join('')
            },
            {
                iconLayout: 'default#image',
                iconImageHref: 'img/icons/map-marker.svg',
                iconImageSize: [46,58],
                iconImageOffset: [-23,-57]
            });
    }

    var clusterer = new ymaps.Clusterer({

    });

    map.geoObjects.add(clusterer);
    //map.geoObjects.add(placemark);
    clusterer.add(geoObjects);
}