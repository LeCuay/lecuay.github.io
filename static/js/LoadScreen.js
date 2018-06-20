anime ({
    targets: ['.loader'],
    rotate: 180,
    duration: 1600,
    loop: true,
    elasticity: 600,
    easing: 'easeOutElastic',
    delay: function(el, index) {
        return index * 80;
    },
});

var load_screen = document.getElementById("load_screen");
var body = document.getElementsByClassName("container")[0];

if(load_screen){
    window.addEventListener("load", loading());
}

function steppedEasing(steps) {
    return anime.easings['steppedEasing'] = function(progress) {
        return Math.round(progress * steps) * (1 / steps);
    };
}

function loading() {

    var timeLine = anime.timeline();
    var text = document.getElementById('front-text');
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    
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