<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lenguas Indo-Americanas</title>
</head>
<body>
    <header>
        <h1 id='participantes'>
            558B - TAMAYO PALOMINO LUISA FERNANDA
        </h1>
    </header>
    <div id='Lengua_Romance' class="Lengua"  align='center'>
        <div id='Mapa_romance' class='Mapa'>
            <header>
                <h4 id='Titulo_romance' class='Titulo_mapa'>
                    Lenguas romances
                </h4>
            </header>
            <div id='Imagen_mapa_romance' class='imagen'>
                <img src='Mapas/Mapa_romance.jpg'>
            </div>
            
        </div>

        <table border='1'> 
            <tr>
                <td>
                    <div id='Info_lengua_romance' class='info_mapa'>
                        <ul>
                            <li style="color: #0ed145;"
                                onclick='Agregar("español")'>Español</li>
                            <li style="color: #8cfffb;"
                                onclick='Agregar("frances")'>Francés</li>
                            <li style="color: #ec1c24;"
                                onclick='Agregar("portugues")'>Portugués</li>
                            <li style="color: #fff200;"
                                onclick='Agregar("dalmata")'>Dálmata</li>
                            <li style="color: #b97a56;"
                                onclick='Agregar("italiana")'>Italiana</li>
                            <li style="color: #ffaec8;"
                                onclick='Agregar("rumano")'>Rumano</li>
                            <li style="color: #b83dba;"
                                onclick='Agregar("provenzal")'>Provenzal</li>
                            <li style="color: #ff7f27;"
                                onclick='Agregar("retico")'>Retico</li>
                            <li style="color: #3f48cc;"
                                onclick='Agregar("catalan")'>Catalán</li>
                            <li style="color: #c3c3c3;"
                                onclick='Agregar("sardo")'>Sardo</li>
                        </ul>
                    </div>
                </td>
                <td>
                    <div id='Lista_paises_romance' class='info_mapa'>
                        Lista de Países:
                        <ul id='romance_lista'>
                        
                        </ul>
                    </div>
                </td>
            </tr>
        </table>
            
    </div>

    <div id='Lengua_indo' class="Lengua"  align='center'>
        <div id='Mapa_indo' class='Mapa'>
            <header>
                <h4 id='Titulo_indo' class='Titulo_mapa'>
                    Lenguas Indoeuropeas
                </h4>
            </header>
            <div id='Imagen_mapa_indo' class='imagen'>
                <img src='Mapas/Mapa_indo.jpg'>
            </div>
        </div>

        <table border='1'> 
            <tr>
                <td>
                    <div id='Info_lengua_indo' class='info_mapa'>
                        <ul>
                            <li style="color: #ff7f27;"
                                onclick='Agregar("hitatia")'>Hitatia</li>
                            <li style="color: #0ed145;"
                                onclick='Agregar("beltoeslavas")'>Beltoeslavas</li>
                            <li style="color: #8cfffb;"
                                onclick='Agregar("griego")'>Griego</li>
                            <li style="color: #c3c3c3;"
                                onclick='Agregar("armenia")'>Armenia</li>
                            <li style="color: #fff200;"
                                onclick='Agregar("germana")'>Germana</li>
                            <li style="color: #ec1c24;"
                                onclick='Agregar("italo")'>Italo Celtica</li>
                            <li style="color: #3f48cc;"
                                onclick='Agregar("albanesas")'>Albanesas</li>
                            <li style="color: #ffaec8;"
                                onclick='Agregar("indoarianas")'>Indoarianas</li>
                            <li style='color: #b83dba;'
                                onclick='Agregar("tocarias")'>Tocaria</li>
                        </ul>
                    </div>
                </td>
                <td>
                    <div id='Lista_paises_indo' class='info_mapa'>
                        Lista de Países:
                        <ul id='indo_lista'>

                        </ul>
                    </div>
                </td>
            </tr>
        </table>
        
    </div>

    <script src="JS/Texto.js"></script>

</body>
</html>