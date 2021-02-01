let lenguas = [];

function seRepite( array, elemento ){

    let cont= 0;

    for ( i=0; i<array.length; i++ ) {

        cont += array[i] === elemento ?1 :0;       
        console.log( array[i] === elemento );

    }

    let es = cont > 0 ? true : false; 
    return es;
}

function Agregar( Lengua ){

    let seRepiteLengua = seRepite(lenguas, Lengua);

    let Lista_romance = document.getElementById('romance_lista');

    let Lista_indo = document.getElementById('indo_lista');

    let Español = ["España", "México", "Guatemala", "Costa Rica",
     "El Salvador", "Nicaragua", "Honduras", 
     "Panamá", "Venezuela", "Colombia", 
     "Ecuador","Perú", "Bolivia", 
     "Chile", "Argentina", "Uruguay",
     "Cuba", "Puerto Rico","República Dominicana", 
     "Paraguay"];

     let Frances = [ "Francia", "Haití", "Quebec" ];

     let Portugues = [ "Brasil", "Portugal" ];

     let Dalmata = [ "Croacia", "Montenegro", "Bosnia y Herzegovina" ];

     let Italiana = [ "Italia", "Suiza", "San Marino", 
    "Ciudad del Vaticano", "Croacia", "Eslovenia" ];

    let Rumano = [ "Rumania", "Moldavia", "Italia",
    "España", "Alemania", "Ucrania",
    "Israel", "Serbia", "Hungría",
    "Kazajistán" ];

    let Provenzal = [ "Francia" ];

    let Retico = [ "Austria", "Italia" ];

    let Catalan = [ "Andorra", "Francia", "España", "Italia" ];

    let Sardo = [ "Isla Cerdeña" ];

    let Hitita = [ "Turquía" ];

    let Beltoeslavas = [ "Lituania", "Bulgaria", "República Checa",
    "Eslovaquia", "Polonia", "Bielorrusia",
    "Ucrania", "Rusia", "Letonia",
    "Macedonia", "Serbia", "Croacia",
    "Eslovenia", "Alemania" ];

    let Griego = [ "Grecia", "Italia", "Sicilia" ];

    let Armenia = [ "Armenia", "Georgia" ];

    let Germana = [ "Alemania", "Países Bajos" ];

    let Italo = [ "Francia", "España", "Italia",
    "Portugal", "Andorra", "San Marino", 
    "Ciudad del Vaticano", "Moldavia", "Rumania",
    "Mónaco" ];

    let Indoarianas = [ "Afganistán", "Azerbaiyán", "Bengladesh",
    "India", "Irán", "Irak",
    "Nepal", "Osetia", "Pakistán",
    "Armenia", "Siria", "Sri Lanka",
    "Tayikistán", "Turquía" ];

    let Albanesas = [ "Albania", "Montenegro", "Macedonia",
    "Grecia" ];

    let Tocaria = [ "China" ];

    if ( Lengua === "español" && !(seRepiteLengua) ){

        Lista_romance.innerHTML= "";

        for (let index = 0; index < Español.length; index++) {
            
            let elemento = document.createElement('li');
            elemento.innerText = Español[index];
            Lista_romance.append( elemento );
            
        }

    } else if ( Lengua === "frances" && !(seRepiteLengua) ){

        Lista_romance.innerHTML= "";

        for (let index = 0; index < Frances.length; index++) {
            
            let elemento = document.createElement('li');
            elemento.innerText = Frances[index];
            Lista_romance.append( elemento );
            
        }

    } else if ( Lengua === "portugues" && !(seRepiteLengua) ){

        Lista_romance.innerHTML= "";

        for (let index = 0; index < Portugues.length; index++) {
            
            let elemento = document.createElement('li');
            elemento.innerText = Portugues[index];
            Lista_romance.append( elemento );
            
        }

    } else if ( Lengua === "dalmata" && !(seRepiteLengua) ){

        Lista_romance.innerHTML= "";

        for (let index = 0; index < Dalmata.length; index++) {
            
            let elemento = document.createElement('li');
            elemento.innerText = Dalmata[index];
            Lista_romance.append( elemento );
            
        }

    } else if ( Lengua === "italiana" && !(seRepiteLengua) ){

        Lista_romance.innerHTML= "";

        for (let index = 0; index < Italiana.length; index++) {
            
            let elemento = document.createElement('li');
            elemento.innerText = Italiana[index];
            Lista_romance.append( elemento );
            
        }

    } else if ( Lengua === "rumano" && !(seRepiteLengua) ){

        Lista_romance.innerHTML= "";

        for (let index = 0; index < Rumano.length; index++) {
            
            let elemento = document.createElement('li');
            elemento.innerText = Rumano[index];
            Lista_romance.append( elemento );
            
        }

    } else if ( Lengua === "provenzal" && !(seRepiteLengua) ){

        Lista_romance.innerHTML= "";

        for (let index = 0; index < Provenzal.length; index++) {
            
            let elemento = document.createElement('li');
            elemento.innerText = Provenzal[index];
            Lista_romance.append( elemento );
            
        }

    } else if ( Lengua === "retico" && !(seRepiteLengua) ){

        Lista_romance.innerHTML= "";

        for (let index = 0; index < Retico.length; index++) {
            
            let elemento = document.createElement('li');
            elemento.innerText = Retico[index];
            Lista_romance.append( elemento );
            
        }

    } else if ( Lengua === "catalan" && !(seRepiteLengua) ){

        Lista_romance.innerHTML= "";

        for (let index = 0; index < Catalan.length; index++) {
            
            let elemento = document.createElement('li');
            elemento.innerText = Catalan[index];
            Lista_romance.append( elemento );
            
        }

    } else if ( Lengua === "sardo" && !(seRepiteLengua) ){

        Lista_romance.innerHTML= "";

        for (let index = 0; index < Sardo.length; index++) {
            
            let elemento = document.createElement('li');
            elemento.innerText = Sardo[index];
            Lista_romance.append( elemento );
            
        }

    } else if ( Lengua === "hitatia" && !(seRepiteLengua) ){

        Lista_indo.innerHTML= "";

        for (let index = 0; index < Hitita.length; index++) {
            
            let elemento = document.createElement('li');
            elemento.innerText = Hitita[index];
            Lista_indo.append( elemento );
            
        }

    } else if ( Lengua === "beltoeslavas" && !(seRepiteLengua) ){

        Lista_indo.innerHTML= "";

        for (let index = 0; index < Beltoeslavas.length; index++) {
            
            let elemento = document.createElement('li');
            elemento.innerText = Beltoeslavas[index];
            Lista_indo.append( elemento );
            
        }

    } else if ( Lengua === "griego" && !(seRepiteLengua) ){

        Lista_indo.innerHTML= "";

        for (let index = 0; index < Griego.length; index++) {
            
            let elemento = document.createElement('li');
            elemento.innerText = Griego[index];
            Lista_indo.append( elemento );
            
        }

    } else if ( Lengua === "armenia" && !(seRepiteLengua) ){

        Lista_indo.innerHTML= "";

        for (let index = 0; index < Armenia.length; index++) {
            
            let elemento = document.createElement('li');
            elemento.innerText = Armenia[index];
            Lista_indo.append( elemento );
            
        }

    } else if ( Lengua === "germana" && !(seRepiteLengua) ){

        Lista_indo.innerHTML= "";

        for (let index = 0; index < Germana.length; index++) {
            
            let elemento = document.createElement('li');
            elemento.innerText = Germana[index];
            Lista_indo.append( elemento );
            
        }

    } else if ( Lengua === "italo" && !(seRepiteLengua) ){

        Lista_indo.innerHTML= "";

        for (let index = 0; index < Italo.length; index++) {
            
            let elemento = document.createElement('li');
            elemento.innerText = Italo[index];
            Lista_indo.append( elemento );
            
        }

    } else if ( Lengua === "albanesas" && !(seRepiteLengua) ){

        Lista_indo.innerHTML= "";

        for (let index = 0; index < Albanesas.length; index++) {
            
            let elemento = document.createElement('li');
            elemento.innerText = Albanesas[index];
            Lista_indo.append( elemento );
            
        }

    } else if ( Lengua === "indoarianas" && !(seRepiteLengua) ){

        Lista_indo.innerHTML= "";

        for (let index = 0; index < Indoarianas.length; index++) {
            
            let elemento = document.createElement('li');
            elemento.innerText = Indoarianas[index];
            Lista_indo.append( elemento );
            
        }

    } else if ( Lengua === "tocarias" && !(seRepiteLengua) ){

        Lista_indo.innerHTML= "";

        for (let index = 0; index < Tocaria.length; index++) {
            
            let elemento = document.createElement('li');
            elemento.innerText = Tocaria[index];
            Lista_indo.append( elemento );
            
        }

    }

}