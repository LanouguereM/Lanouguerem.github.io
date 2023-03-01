document.getElementById("boton").onclick = function () {  
    document.getElementById("formulario").style.display = "block";
}


function validando () { 
    var nombre=document.getElementById("Nombre").value
    if(!isNaN (nombre) ) {alert ("Nombre invalido"); return false ;} else {
    document.getElementById("botonEnviar").innerText = "GRACIAS!!";
    document.getElementById("botonEnviar").style.backgroundColor= "green";
    return true;    
}
}

