//jQuery code

const body = $("body");
const overlay  = $("#hamburgerOverlay");
const menu = $("#hamburgerMenu");
const link = $(".ham-menu__link");
const classes = ["open", "active", "hidden"];
const elements = [menu, overlay, body];

const _toggleClass = (element, className) => {
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
            console.log("animation");
            _toggleClass(elements,classes);
        });
    }
});
