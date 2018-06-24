var code = Array.prototype.slice.call(document.getElementsByClassName("code"), 0);
code.forEach(function(line) {
    line.setAttribute("future-x2", line.getAttribute("x2"));
    line.setAttribute("x2", line.getAttribute("x1"));
});

function codeSVGAnimation() {
    var code = Array.prototype.slice.call(document.getElementsByClassName("code"), 0);
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

var activated = false;
var handler = onVisibilityChange(document.getElementById("svg-code"), function() {
    if (!activated && isElementInViewport(document.getElementById("svg-code"))) {
        codeSVGAnimation();
        activated = true;
    }
});

if (window.addEventListener) {
    addEventListener('DOMContentLoaded', handler, false); 
    addEventListener('load', handler, false); 
    addEventListener('scroll', handler, false); 
    addEventListener('resize', handler, false); 
} else if (window.attachEvent)  {
    attachEvent('onDOMContentLoaded', handler);
    attachEvent('onload', handler);
    attachEvent('onscroll', handler);
    attachEvent('onresize', handler);
}
