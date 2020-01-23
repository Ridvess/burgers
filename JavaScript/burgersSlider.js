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