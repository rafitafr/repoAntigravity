/**
 * CONVERSOR DE BASES NUMÉRICAS - LÓGICA DE JAVASCRIPT (VANILLA JS)
 * ==========================================================================
 * Implementa la conversión automática en tiempo real, validación de caracteres
 * según la base de origen y el copiado independiente de resultados.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Referencias a los elementos de entrada del DOM
    const numberInput = document.getElementById('number-input');
    const baseSelect = document.getElementById('base-select');
    const errorAlert = document.getElementById('error-alert');
    const errorMessage = document.getElementById('error-message');
    const btnClear = document.getElementById('btn-clear');

    // Referencias a los campos de salida del DOM
    const outputDec = document.getElementById('output-dec');
    const outputBin = document.getElementById('output-bin');
    const outputHex = document.getElementById('output-hex');
    const outputOct = document.getElementById('output-oct');

    // Referencias a los botones de copiado
    const copyButtons = document.querySelectorAll('.copy-btn');

    // Mapeo de bases de entrada numéricas
    const baseMap = {
        '10': { name: 'Decimal', regex: /^[0-9]+$/ },
        '2': { name: 'Binario', regex: /^[01]+$/ },
        '16': { name: 'Hexadecimal', regex: /^[0-9a-fA-F]+$/ },
        '8': { name: 'Octal', regex: /^[0-7]+$/ }
    };

    // Configurar listeners de eventos para cálculos automáticos en tiempo real
    numberInput.addEventListener('input', handleConvert);
    baseSelect.addEventListener('change', () => {
        // Al cambiar de base, re-validamos y convertimos el valor existente
        handleConvert();
        numberInput.focus();
    });
    
    // Configurar listener para botón limpiar
    btnClear.addEventListener('click', handleClear);

    // Configurar listeners para botones de copiado
    copyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const targetId = button.getAttribute('data-target');
            const targetInput = document.getElementById(targetId);
            handleCopy(targetInput.value, button);
        });
    });

    /**
     * Valida la entrada y realiza las conversiones a todas las bases
     */
    function handleConvert() {
        const rawValue = numberInput.value.trim();
        const selectedBase = baseSelect.value;
        const baseConfig = baseMap[selectedBase];

        // Si el campo de entrada está vacío
        if (rawValue === '') {
            clearOutputs();
            hideError();
            return;
        }

        // Validar el formato según la base seleccionada
        if (!baseConfig.regex.test(rawValue)) {
            showError(`El valor ingresado no es un número ${baseConfig.name} válido.`);
            clearOutputs();
            return;
        }

        // Si la validación es correcta, quitar errores y calcular
        hideError();

        try {
            // 1. Convertir el número original a un entero decimal (Base 10)
            const decimalValue = parseInt(rawValue, parseInt(selectedBase, 10));

            if (isNaN(decimalValue)) {
                showError('Error matemático al procesar la conversión.');
                clearOutputs();
                return;
            }

            // 2. Convertir y rellenar los outputs en sus bases respectivas
            outputDec.value = decimalValue.toString(10);
            outputBin.value = decimalValue.toString(2);
            outputHex.value = decimalValue.toString(16).toUpperCase(); // Hexadecimal en mayúsculas
            outputOct.value = decimalValue.toString(8);

        } catch (error) {
            console.error('Error durante la conversión:', error);
            showError('Ocurrió un error inesperado al calcular las bases.');
            clearOutputs();
        }
    }

    /**
     * Copia un valor al portapapeles y da feedback visual en el botón respectivo
     * @param {string} value Texto a copiar
     * @param {HTMLElement} button Elemento botón clickeado
     */
    async function handleCopy(value, button) {
        if (!value) return; // No copiar si el campo está vacío

        try {
            await navigator.clipboard.writeText(value);
            
            // Retroalimentación visual premium
            button.classList.add('copied');
            const icon = button.querySelector('i');
            icon.className = 'bi bi-check2';

            // Restaurar estado original del botón
            setTimeout(() => {
                button.classList.remove('copied');
                icon.className = 'bi bi-clipboard';
            }, 2000);

        } catch (err) {
            console.error('Fallo al copiar texto:', err);
        }
    }

    /**
     * Limpia los inputs de salida
     */
    function clearOutputs() {
        outputDec.value = '';
        outputBin.value = '';
        outputHex.value = '';
        outputOct.value = '';
    }

    /**
     * Limpia completamente toda la aplicación
     */
    function handleClear() {
        numberInput.value = '';
        clearOutputs();
        hideError();
        numberInput.focus();
    }

    /**
     * Despliega la alerta de error y marca la entrada
     * @param {string} message Mensaje de error
     */
    function showError(message) {
        numberInput.classList.add('is-invalid');
        errorMessage.textContent = message;
        errorAlert.style.display = 'flex';
    }

    /**
     * Quita la marca de error e inactiva la alerta
     */
    function hideError() {
        numberInput.classList.remove('is-invalid');
        errorAlert.style.display = 'none';
        errorMessage.textContent = '';
    }
});
