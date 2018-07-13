anime({
    targets: ['.anim_container'],
    rotate: 180,
    duration: 1600,
    loop: true,
    elasticity: 600,
    easing: 'easeOutElastic',
    delay: function(el, index) {
        return index * 80;
    },
});

// Declaring variables
var load_screen = $("#load_screen");
var body = $(".container");

if(load_screen){
    window.addEventListener("load", loading());
}

// This function will return the number of steps
function steppedEasing(steps) {
    steps = parseInt(steps);
    return anime.easings['steppedEasing'] = function(progress) {
        return Math.round(progress * steps) * (1 / steps);
    };
}

function loading() {

    var timeLine = anime.timeline();
    var text = $("#front-text");
    var width = getWidth();
    
    if(text && width >= 1024) {
        steppedEasing(60);
        text.style.width = 0;
        timeLine
            .add({
                targets: load_screen,
                right: '-100%',
                duration: 800,
                easing: 'easeInOutExpo',
                complete: function(anim){
                    body.removeChild(load_screen);
                }
            })
            .add({
                targets: text,
                width: [ {value: '100%'} ],
                duration: 2500,
                easing: 'steppedEasing'
            });
    } else {
        timeLine
            .add({
                targets: load_screen,
                right: '-100%',
                opacity: [
                    {value: 0, duration: 1200}
                ],
                duration: 800,
                easing: 'easeInOutExpo',
                complete: function(anim){
                    body.removeChild(load_screen);
                }
            });
    }
}