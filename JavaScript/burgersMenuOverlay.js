//jQuery code

let body = $("body");
let overlay  = $("#hamburgerOverlay");
let menu = $("#hamburgerMenu");
let link = $(".ham-menu__link");
let classes = ["open", "active", "hidden"];
let elements = [menu, overlay, body];

var _toggleClass = (element, className) => {
    element.forEach((item, index) => $(item).toggleClass(className[index]));
};

$(menu).on("click", e => {
    e.preventDefault();

    _toggleClass(elements, classes);
});

$(link).on("click", function (e) {
    e.preventDefault();
    const scroll_el = $(this).attr("href");
    console.log($(this).attr("href"));

    if ($(scroll_el).length > 0) {
        $("html").animate({scrollTop: $(scroll_el).offset().top}, 600, () =>{
            _toggleClass(elements,classes);
        });
    }
});
