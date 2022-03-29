function leerArchivo(e) {
  var arch = e.target.files[0];
  if (!arch) {
    return;
  }
  var lector = new FileReader();
  lector.onload = function (e) {
    var contenido = e.target.result;
    mostrarContenido(contenido, "entrada");
    contenido = contenido.split("\n");
    encontrarMensaje(contenido);
  };
  lector.readAsText(arch);
}

function encontrarMensaje(msg) {
  var pInstruccion = msg[1];
  var sInstruccion = msg[2];
  var descifrar = msg[3];
  descifrar = descifrar
    .split('')
    .filter((el, i) => i == 0 || descifrar[i - 1] != el)
    .join('');
    //elimina elementos repetidos

  if (descifrar.includes(pInstruccion)) {
    mostrarContenido("SI \n NO", "salida");
  } else if(descifrar.includes(sInstruccion)){
    mostrarContenido("NO \n SI", "salida");
  } else{
    mostrarContenido("NO \n NO", "salida");
  }
}

function mostrarContenido(contenido, id) {
  var elemento = document.getElementById(id);
  elemento.innerHTML = contenido;
}
document.getElementById("file").addEventListener("change", leerArchivo, false);
