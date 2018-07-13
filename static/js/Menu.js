// Ejecutaremos este codigo cuando el documento esta listo
document.addEventListener('DOMContentLoaded', display_menu);

var menu_button = $("#bt-menu");
var displayed_menu = true;

// Usamos addEventListener y attachEvent para que todos los navegadores lo reconozcan
if (menu_button.addEventListener) {
    menu_button.addEventListener('click', display_menu);
} else {
    menu_button.attachEvent('onclick', display_menu)
}

function display_menu() {

    if (isSmartPhone()) {
        // En caso de que Si este desplegado lo ocultamos
        if(displayed_menu) {
            // Comprobamos si hay element 'icon-cross'
            if($(".icon-cross") != null) {
                anime({
                    targets: menu_button,
                    rotate: 0,
                    duration: 1000,
                    elasticity: 100,
                });
                $(".icon-cross").classList.add("icon-menu");
                $(".icon-cross").classList.remove("icon-cross");
            }
            
            anime({
                targets: '#navigator',
                left: [
                    {value: '-100%',
                    duration: 500}
                ],
                easing: 'easeInBack'
            });
            anime({
                targets: ".header, #navigator",
                backgroundColor: 'rgba(1, 82, 63, 0.9)',
                duration: 500,
                easing: 'easeInBack',
            });

            displayed_menu = false;
        // En caso contrario lo desplegamos
        } else {
            anime({
                targets: menu_button,
                rotate: 180,
                duration: 1000,
                elasticity: 100,
            });
            $(".icon-menu").classList.add("icon-cross");
            $(".icon-menu").classList.remove("icon-menu");

            anime({
                targets: '#navigator',
                left: [
                    {value: '0',
                    duration: 500}
                ],
                easing: 'easeOutBack',
            });
            anime({
                targets: ".header, #navigator",
                backgroundColor: 'rgba(0, 109, 84, 0.9)',
                duration: 500,
                easing: 'easeOutBack',
            });

            displayed_menu = true;
        }
    }
}

// Obtendremos el navBar y el contenido principal
var navigatorBar = $(".navigator");
if (isSmartPhone()) {
    var navBar = $(".nav-bar");
    var fixedNav = navBar.offsetTop;
} else {
    var fixedNav = navigatorBar.offsetTop;
}
var main = $("main");

if (window.addEventListener) {
    window.addEventListener('scroll', FixNav);
} else {
    window.attachEvent('onscroll', FixNav);
}

function FixNav() {
    // Comprobamos en qué momento el navBar desaparece de la página
    if (window.pageYOffset >= fixedNav) {

        // Y le asignamos la clase
        if (isSmartPhone()) {
            navBar.classList.add("fixed-nav");
            navigatorBar.style.top = navBar.offsetHeight + 'px';
            main.style.paddingTop = navBar.offsetHeight + 'px';
        } else {
            main.style.paddingTop = navigatorBar.offsetHeight + 'px';
            navigatorBar.style.position = 'fixed';
        }
        navigatorBar.classList.add("fixed-nav");
        
        if(!isSmartPhone())
        {
            anime({
                targets: navigatorBar,
                borderBottomLeftRadius: [
                    {value: '25px', duration: 400}
                ],
                borderBottomRightRadius: [
                    {value: '25px', duration: 400}
                ],
                easing: 'linear',
            })
        }
    } else {

        if (isSmartPhone()) {
            navBar.classList.remove("fixed-nav");
            navigatorBar.style.top = 'initial';
        } else {
            navigatorBar.style.position = 'relative';
        }
        navigatorBar.classList.remove("fixed-nav");
        main.style.paddingTop = '0px';
        
        if(!isSmartPhone())
        {
            anime({
                targets: navigatorBar,
                borderBottomLeftRadius: [
                    {value: '0', duration: 400}
                ],
                borderBottomRightRadius: [
                    {value: '0', duration: 400}
                ],
                easing: 'linear',
            })
        }
    }
}

/** Dos espacios: [Menú móvil, Menú Desktop-Tablet] */
var search_buttons = $all("[id^='bt-search'");
var cancel_buttons = $all(".search_cancel");
var displayed_search = false;

search_buttons.forEach(button => {
    if (button != null) {
        if (button.addEventListener) {
            button.addEventListener('click', display_search);
        } else {
            button.attachEvent('onclick', display_search);
        }
    }
});

cancel_buttons.forEach(button => {
    if (button != null) {
        if (button.addEventListener) {
            button.addEventListener('click', display_search);
        } else {
            button.attachEvent('onclick', display_search);
        }
    }
});

function display_search() {
    if (isSmartPhone()) {
        var search_bar = $(".nav-bar .search_section");
    } else {
        var search_bar = $(".navigator .search_section");
    }

    if(displayed_search) {
        anime({
            targets: search_bar,
            right: [
                {value: '-100%', duration: 350}
            ],
            easing: 'easeInExpo'
        });
        displayed_search = false;
    } else {
        anime({
            targets: search_bar,
            right: [
                {value: 0, duration: 500}
            ],
            easing: 'easeOutExpo'
        });
        displayed_search = true;
    }
}