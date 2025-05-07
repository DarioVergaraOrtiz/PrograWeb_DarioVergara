// Agrega dígitos y operadores al display
function mostrarEnDisplay(valor) {
    const display = document.getElementById('id_display');
    display.innerText += valor;
}

// Borra todo el display
function clearDisplay() {
    const display = document.getElementById('id_display');
    display.innerText = '';
}

// Borra el último carácter
function borrarCaracter() {
    const display = document.getElementById('id_display');
    display.innerText = display.innerText.slice(0, -1);
}

// Convierte el número actual en porcentaje
function porcentaje() {
    const display = document.getElementById('id_display');
    if (!display.innerText) return;
    const valor = parseFloat(display.innerText);
    display.innerText = (valor / 100).toString();
}

// Calcula el resultado de la expresión en el display
function calcularResultado() {
    const display = document.getElementById('id_display');
    const expr = display.innerText;
    if (!expr) return;
    try {
        display.innerText = eval(expr);
    } catch {
        display.innerText = 'Error';
    }
}
