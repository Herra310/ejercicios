
//Leer archivo con las puntaciones
function leerArchivo(e){
    var arch = e.target.files[0];
    if(!arch){
        return;
    }
    var lector = new FileReader();
    lector.onload = function(e) {
        var contenido = e.target.result;
        mostrarContenido(contenido, 'entrada');
        var d = contenido.split('\n');
        var rondas;
        var dx= [];
        var jugador1= [];
        var jugador2= [];
        for(i=0; i<d.length; i++){
            if(i == 0){
                rondas= d[i];
            }else{
                dx = d[i].split(' ');
                jugador1[i-1]= parseInt(dx[0]);
                jugador2[i-1]= parseInt(dx[1]);
                dx=[];
            }
        }
        Juego(rondas, jugador1, jugador2);
      };
      lector.readAsText(arch);
}

function mostrarContenido(contenido,id) {
    var elemento = document.getElementById(id);
    elemento.innerHTML = contenido;
  }
document.getElementById('file').addEventListener('change', leerArchivo, false);

// rondas del juego
function Juego(rondas, jugador1, jugador2){
let dif = 0;
let ganadores= [];
for (i = 0; i<rondas; i++){
    console.log("valor del jugador 1:"+jugador1[i], " Valor del jugador2:"+jugador2[i]);
    if(jugador1[i] > jugador2[i]){
        dif = Math.abs(jugador1[i]-jugador2[i]);
        ganadores[i] = (" 1 " + dif);
    }else{
        dif = Math.abs(jugador1[i]-jugador2[i]);
        ganadores[i] = (" 2 " + dif);
    }
    dif = 0;
}
    mostrarContenido(ganadores, 'salida');
}