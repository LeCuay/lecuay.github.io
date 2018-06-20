// Ejecutaremos este codigo cuando el documento esta listo
document.addEventListener('DOMContentLoaded', display_menu);

// Obtenemos el navegador y la barra para desplegarlo
var menu_button = document.getElementById("bt_menu");
var navi = document.getElementById("navigator");
var displayed_menu = true;

// Obtendremos el header y el contenido principal
var header = document.getElementById("header");
var main = document.getElementsByTagName("main")[0];
var fixedNav = header.offsetTop;

// Asignamos la función al scroll
window.onscroll = function() {FixNav()};

// Asignamos la funcion a un 'onclick'
// Usamos addEventListener y attachEvent para que todos los navegadores lo reconozcan
if (menu_button.addEventListener) {
    menu_button.addEventListener('click', display_menu);
} else {
    menu_button.attachEvent('onclick', display_menu)
}

function display_menu() {
    // Obtenemos el tamano de la pantalla (para evitar que se ejecute en Desktop)
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

    if (width < 1024) {
        // En caso de que Si este desplegado lo ocultamos
        if(displayed_menu) {
            // Comprobamos si hay element 'icon-cross'
            if(typeof document.getElementsByClassName("icon-cross")[0] !== 'undefined') {
                anime({
                    targets: '#bt_menu',
                    rotate: 0,
                    duration: 1000,
                    elasticity: 100,
                });
                document.getElementsByClassName("icon-cross")[0].className = "icon-menu";
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
                targets: header,
                backgroundColor: 'rgba(1, 82, 63, 0.9)',
                duration: 500,
                easing: 'easeInBack',
            });

            displayed_menu = false;
        // En caso contrario lo desplegamos
        } else {
            anime({
                targets: '#bt_menu',
                rotate: 180,
                duration: 1000,
                elasticity: 100,
            });
            document.getElementsByClassName("icon-menu")[0].className = "icon-cross";

            anime({
                targets: '#navigator',
                left: [
                    {value: '0',
                    duration: 500}
                ],
                easing: 'easeOutBack',
            });
            anime({
                targets: header,
                backgroundColor: 'rgba(0, 109, 84, 0.9)',
                duration: 500,
                easing: 'easeOutBack',
            });

            displayed_menu = true;
        }
    }
}

function FixNav() {
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    var landscapeTablet = width > 768 && window.matchMedia("(orientation: landscape)").matches;
    // Comprobamos en qué momento el header desaparece de la página
    if (window.pageYOffset >= fixedNav) {
        // Y le asignamos la clase
        header.classList.add("fixed-nav");
        main.style.paddingTop = header.offsetHeight + 'px';

        if(landscapeTablet)
        {
            anime({
                targets: [header, '#navigator'],
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
        header.classList.remove("fixed-nav");
        main.style.paddingTop = '0px';
        
        if(landscapeTablet)
        {
            anime({
                targets: [header, '#navigator'],
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

var search_button = document.getElementById("bt_search");
var search_button_xl = document.getElementById("bt_search_xl");
var search_cancel = document.getElementById("search_cancel");
var search_cancel_xl = document.getElementById("search_cancel_xl");
var displayed_search = false;

if(search_button.addEventListener) {
    search_button.addEventListener("click", display_search);
    search_cancel.addEventListener("click", display_search);
    search_button_xl.addEventListener("click", display_search);
    search_cancel_xl.addEventListener("click", display_search);
} else {
    search_button.attachEvent('onclick', display_search);
}

function display_search() {
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (width < 1024) {
        var search_bar = document.getElementById("search_section");
    } else {
        var search_bar = document.getElementById("search_section_xl");
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