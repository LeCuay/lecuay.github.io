var code = Array.prototype.slice.call(document.querySelectorAll("svg line"), 0);
code.forEach(function(line) {
    line.setAttribute("future-x2", line.getAttribute("x2"));
    line.setAttribute("x2", line.getAttribute("x1"));
});

function codeSVGAnimation(element) {
    var code = Array.prototype.slice.call(element, 0);
    code.forEach(function(line) {
        anime({
            targets: [line],
            x2: parseInt(line.getAttribute("future-x2")),
            round: 1,
            easing: 'easeInOutCirc',
            duration: 2000,
        });
    });
}

function isElementInViewport (el) {

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function onVisibilityChange(el, callback) {
    var old_visible;
    return function () {
        var visible = isElementInViewport(el);
        if (visible != old_visible) {
            old_visible = visible;
            if (typeof callback == 'function') {
                callback();
            }
        }
    }
}

var svgCodeAct = false;
var svgCode = document.getElementById("svg-code");
var handler = onVisibilityChange(svgCode, function() {
    if (!svgCodeAct && isElementInViewport(svgCode)) {
        codeSVGAnimation(document.getElementsByClassName("code"));
        svgCodeAct = true;
    }
});

var svgArticleAct = false;
var svgArticle = document.getElementById("svg-article");
var handler2 = onVisibilityChange(svgArticle, function() {
    if (!svgArticleAct && isElementInViewport(svgArticle)) {
        codeSVGAnimation(document.getElementsByClassName("line"));
        svgArticleAct = true;
    }
});

if (window.addEventListener) {
    addEventListener('DOMContentLoaded', handler, false); 
    addEventListener('load', handler, false); 
    addEventListener('scroll', handler, false); 
    addEventListener('resize', handler, false); 

    addEventListener('DOMContentLoaded', handler2, false); 
    addEventListener('load', handler2, false); 
    addEventListener('scroll', handler2, false); 
    addEventListener('resize', handler2, false); 
} else if (window.attachEvent)  {
    attachEvent('onDOMContentLoaded', handler);
    attachEvent('onload', handler);
    attachEvent('onscroll', handler);
    attachEvent('onresize', handler);

    attachEvent('onDOMContentLoaded', handler2);
    attachEvent('onload', handler2);
    attachEvent('onscroll', handler2);
    attachEvent('onresize', handler2);
}
