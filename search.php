<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- Iconos -->
    <link rel="stylesheet" href="static/icons/icons.css">

    <!-- Hojas de estilos Generales -->
    <link rel="stylesheet" href="static/css/load_screen.css">
    <link rel="stylesheet" href="static/css/general.css">

    <title>Búsqueda</title>
</head>
<body>
    <div class="container">

        <!-- Load Screen -->
        <div id="load_screen">
            <p>Cargando...</p>
            <div class="loader">
                <div class="punto1"></div>
                <div class="punto2"></div>
            </div>
        </div>

        <!-- Header -->
        <header id="header">
            
            <div id="menu_bar">
                <a href="#" onclick="return false" id="bt_menu">
                    <span class="icon-menu"></span>
                </a>
                <a href="/" id="bt_home">
                    <span class="icon-home"></span>
                </a>
                <a class="search_engine" href="#" onclick="return false" id="bt_search">
                    <span class="icon-magnifying-glass"></span>
                </a>
                <form id="search_section" action="search.php" method="get">
                    <input type="search" placeholder="Búsqueda" name="search_name" id="search_engine">
                    <div id="search_buttons">
                        <input type="submit" value="OK" id="search_send">
                        <a href="#" onclick="return false" id="search_cancel">
                            <span class="icon-squared-cross"></span>
                        </a>
                    </div>
                </form>
            </div>
            
            <nav class="navigator" id="navigator">
                <a class="menu-item" href="/"><span class="icon-home"></span>Home</a>
                <a class="menu-item" href="#"><span class="icon-book"></span>Texto Aleatorio 2</a>
                <a class="menu-item" href="#"><span class="icon-bowl"></span>Texto Aleatorio 3</a>
                <a class="menu-item" href="#"><span class="icon-message"></span>Texto Aleatorio 4</a>
                <a class="menu-item search_engine" id="bt_search_xl" href="#" onclick="return false"><span class="icon-magnifying-glass"></span></a>
                <span class="menu-item dummy"></span>
                <form id="search_section_xl" action="search.php" method="get">
                    <input type="search" placeholder="Búsqueda" name="search_name" id="search_engine_xl">
                    <div id="search_buttons_xl">
                        <input type="submit" value="OK" id="search_send_xl">
                        <a href="#" onclick="return false" id="search_cancel_xl">
                            <span class="icon-squared-cross"></span>
                        </a>
                    </div>
                </form>
            </nav>
        </header>

        <main>
            <h1>Has buscado <?php echo $_GET["search_name"]; ?> </h1>
            <p>El sistema de búsqueda está en fase de pruebas, muchas gracias por su paciencia y espero finalizarlo pronto.</p>
        </main>

        <!-- Footer -->
        <footer>
            <p class="copyright">&copy; 2018, LeCuay I don't know legal stuff</p>
            <div class="opciones">
                <a href="#" class="contacto">Contacto</a>
                <a href="#" class="volver">Volver</a>
            </div>
            <div class="redes_sociales">
                <a href="https://github.com/LeCuay" target="_blank">
                    <span class="icon-github github"></span>
                </a>
                <a href="https://www.instagram.com/jc_chechu/" target="_blank" >
                    <span class="icon-instagram instagram"></span>
                </a>
                <a href="https://steamcommunity.com/id/Cuayteron1" target="_blank">
                    <span class="icon-steam steam"></span>
                </a>
                <a href="https://twitter.com/Cuayteron1" target="_blank" >
                    <span class="icon-twitter twitter"></span>
                </a>
                <a href="https://discordapp.com/" target="_blank">
                    <span class="icon-discord discord"></span>
                </a>
            </div>
        </footer>

    </div>

    <!-- Libraries -->
    <script src="static/js/libs/anime.js"></script>
    <!-- Scripts -->
    <script src="static/js/Menu.js"></script>
    <script src="static/js/LoadScreen.js"></script>
</body>
</html>