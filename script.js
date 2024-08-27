const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

/*function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}*/

function btnEncriptar() {
    const texto = textArea.value;
    
    // Validar si el texto contiene letras mayúsculas o caracteres no permitidos
    if (!validarTexto(texto)) {
        mensaje.style.backgroundImage = "url('imagenes/prohibition.png')";
        mensaje.style.backgroundRepeat = "no-repeat";
        mensaje.style.backgroundPosition = "center";
        mensaje.style.backgroundSize = "contain";
        alert("El texto contiene letras mayúsculas o caracteres no permitidos. Solo se permiten letras minúsculas y sin acentos.");
        return
    }

    // Si la validación es exitosa, procede a encriptar
    const textoEncriptado = encriptar(texto);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    alert("Texto encriptado");
    return stringEncriptada
}

function btnDesencriptar(){
    const texto = textArea.value;
    
    // Validar si el texto contiene letras mayúsculas o caracteres no permitidos
    if (!validarTexto(texto)) {
        mensaje.style.backgroundImage = "url('imagenes/prohibition.png')";
        mensaje.style.backgroundRepeat = "no-repeat";
        mensaje.style.backgroundPosition = "center";
        mensaje.style.backgroundSize = "contain";
        alert("El texto contiene letras mayúsculas o caracteres no permitidos. Solo se permiten letras minúsculas y sin acentos.");
        return;
        
    }

    // Si la validación es exitosa, procede a encriptar
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    mensaje.style.backgroundImage = "none";
    textArea.value = "";
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    alert("Texto desencriptado");
    return stringDesencriptada
    
}

function copiarTexto() {
    // Selecciona el texto en el primer textarea
    const texto = document.getElementById('mensaje1');
    
    // Selecciona el contenido del textarea
    texto.select();
    // texto.setSelectionRange(0, 99999); // Para dispositivos móviles    
    // Copia el texto al portapapeles
    document.execCommand('copy');
    
    // Mensaje opcional para confirmar que se ha copiado
    alert("Texto copiado: " + texto.value);
}

function validarTexto(texto) {
    const regex = /^[a-z\s]*$/; // Expresión regular para permitir solo letras minúsculas y espacios
    return regex.test(texto);
}