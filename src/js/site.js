

function step1() {
    setTimeout(step2, 2000);
}

function step2() {

    $("#block1").animate({ width: "50vw" }, 1000);
    $("#block2").animate({ left: "50vw" }, 1000);
    setTimeout(step3, 1000);

}

function step3() {
    $("#block2")
        .animate({ height: "50vh" }, 1000)
        .animate({ height: "33.33vh" }, 1000);
    $("#block3").animate({ top: "50vh" }, 1000, step4)
        .animate({ top: "33.33vh", height: "33.33vh" }, 1000);

}

function step4() {
    $("#block4").animate({
        top: "66.66vh"
    }, 1000);
}

$(document).ready(function () {
    step1();
    $("#icon-menu-page").hide();

    $('.menu').click(function () {
        $(this).toggleClass('open');
        $("#icon-menu-page").fadeToggle();

    });


    // working on it page

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });

    $('.web-detail-intrduce').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });

});


function onmouseover(changeWidth) {
    var changeWidth = document.getElementById(changeWidth);
    if (changeWidth(1) == "transform: scale(1.5, 1.0);") {

        changeWidth(2) == "transform: scale(1, 1.0);"
    } else {
        changeWidth(1) == "transform: scale(1, 1.0);"
    };
}

(function ($) {

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *     the user visible viewport of a web browser.
     *     only accounts for vertical position, not horizontal.
     */

    $.fn.visible = function (partial) {

        var $t = $(this),
            $w = $(window),
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            _top = $t.offset().top,
            _bottom = _top + $t.height(),
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };

})(jQuery);

$(window).scroll(function (event) {

    $(".animatable").each(function (i, el) {
        var jElement = $(el);
        if (jElement.visible(true) && !jElement.hasClass("animated")) {
            var newone = el.cloneNode(true);
            $(newone).addClass("animated");
            el.parentNode.replaceChild(newone, el);
        }
    });

});



const buttons = document.querySelectorAll(".buttons button");
const cat = document.getElementsByClassName("cat")[0];

const sad = document.getElementsByClassName('.mouth');

/*for (i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", manageCatClasses);
}
*/
buttons.forEach((button) => {
    button.addEventListener("click", manageCatClasses);
})

function manageCatClasses() {
    if (this.getAttribute("data-add")) {

        cat.classList.add(this.getAttribute("data-add"));

    }
    if (this.getAttribute("data-remove")) {

        cat.classList.remove(this.getAttribute("data-remove"));

    }
}



