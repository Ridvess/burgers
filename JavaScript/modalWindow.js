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
                    title.innerHtml = customTitle;
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
        const request = ajaxForm(form);

        request.addEventListener("load", function () {
            if(request.status >= 400) {
                overlay1.open();
                overlay1.setContent('Произошла ошибка' + $(request.response.message));
            } else {
                overlay1.open();
                overlay1.setContent(request.response.message);
            }
        });
    }

    const ajaxForm = function (form) {
        const formData = new FormData(form);
        const url= " https://webdev-api.loftschool.com/sendmail";
        const mail = "shylemming@gmail.com";
        formData.append("to", mail);

        const xhr = new XMLHttpRequest();
        xhr.responseType = "json";
        xhr.open("POST", url);
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        xhr.send(formData);

        return xhr;
    };




