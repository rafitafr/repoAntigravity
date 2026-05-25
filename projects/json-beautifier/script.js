/**
 * JSON BEAUTIFIER - LÓGICA DE JAVASCRIPT (VANILLA JS)
 * ==========================================================================
 * Implementa las funciones de validación, formateo indentado, minificación,
 * copiado al portapapeles y limpieza de datos con tratamiento de errores claro.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Referencias a los elementos del DOM
    const jsonInput = document.getElementById('json-input');
    const jsonOutput = document.getElementById('json-output');
    const indentSelect = document.getElementById('indent-select');
    
    // Botones de acción
    const btnValidate = document.getElementById('btn-validate');
    const btnFormat = document.getElementById('btn-format');
    const btnMinify = document.getElementById('btn-minify');
    const btnCopy = document.getElementById('btn-copy');
    const btnClear = document.getElementById('btn-clear');
    
    // Contenedores de alertas para validación
    const validationAlert = document.getElementById('validation-alert');
    const validationMessage = document.getElementById('validation-message');
    const validationIcon = document.getElementById('validation-icon');

    // Configurar los manejadores de eventos (event listeners)
    btnValidate.addEventListener('click', handleValidate);
    btnFormat.addEventListener('click', handleFormat);
    btnMinify.addEventListener('click', handleMinify);
    btnCopy.addEventListener('click', handleCopy);
    btnClear.addEventListener('click', handleClear);

    /**
     * Valida si el texto ingresado es un JSON correcto
     */
    function handleValidate() {
        const rawValue = jsonInput.value.trim();
        
        if (!rawValue) {
            showAlert('warning', 'Por favor, introduce algún texto JSON en el campo de entrada antes de validar.');
            return false;
        }

        try {
            JSON.parse(rawValue);
            showAlert('success', '¡El JSON es válido y correcto!');
            return true;
        } catch (error) {
            // Capturar la descripción del error para mostrarla
            showAlert('error', `JSON Inválido: ${error.message}`);
            return false;
        }
    }

    /**
     * Formatea el JSON de entrada con la indentación seleccionada
     */
    function handleFormat() {
        const rawValue = jsonInput.value.trim();
        
        if (!rawValue) {
            showAlert('warning', 'Introduce un JSON para poder formatearlo.');
            return;
        }

        try {
            // Validar e interpretar el JSON
            const parsedJSON = JSON.parse(rawValue);
            
            // Obtener el tipo de indentación
            let indentValue = indentSelect.value;
            if (indentValue !== 'tab') {
                indentValue = parseInt(indentValue, 10);
            } else {
                indentValue = '\t';
            }
            
            // Formatear JSON e inyectar el resultado
            const formatted = JSON.stringify(parsedJSON, null, indentValue);
            jsonOutput.value = formatted;
            
            showAlert('success', '¡JSON formateado correctamente!');
        } catch (error) {
            showAlert('error', `No se pudo formatear debido a un error de sintaxis: ${error.message}`);
            jsonOutput.value = ''; // Limpiar salida si hay error
        }
    }

    /**
     * Minifica el JSON de entrada (remueve todos los espacios y saltos de línea)
     */
    function handleMinify() {
        const rawValue = jsonInput.value.trim();
        
        if (!rawValue) {
            showAlert('warning', 'Introduce un JSON para poder minificarlo.');
            return;
        }

        try {
            // Validar e interpretar el JSON
            const parsedJSON = JSON.parse(rawValue);
            
            // Minificar (convertir a string sin indentación)
            const minified = JSON.stringify(parsedJSON);
            jsonOutput.value = minified;
            
            showAlert('success', '¡JSON minificado correctamente!');
        } catch (error) {
            showAlert('error', `No se pudo minificar debido a un error de sintaxis: ${error.message}`);
            jsonOutput.value = ''; // Limpiar salida si hay error
        }
    }

    /**
     * Copia el JSON formateado/minificado de la salida al portapapeles
     */
    async function handleCopy() {
        const outputValue = jsonOutput.value.trim();
        
        if (!outputValue) {
            showAlert('warning', 'No hay ningún resultado en el panel de salida para copiar.');
            return;
        }

        try {
            // Utilizar la API Clipboard del navegador
            await navigator.clipboard.writeText(outputValue);
            
            // Retroalimentación visual en el botón de copiar (micro-interacción)
            const originalHTML = btnCopy.innerHTML;
            btnCopy.innerHTML = '<i class="bi bi-check2-circle"></i> ¡Copiado!';
            btnCopy.classList.remove('btn-outline-custom');
            btnCopy.classList.add('btn-success');
            btnCopy.style.borderColor = 'transparent';
            
            // Restaurar estado del botón después de 2 segundos
            setTimeout(() => {
                btnCopy.innerHTML = originalHTML;
                btnCopy.classList.remove('btn-success');
                btnCopy.classList.add('btn-outline-custom');
                btnCopy.style.borderColor = '';
            }, 2000);
            
        } catch (err) {
            console.error('Fallo al copiar texto: ', err);
            showAlert('error', 'Error al copiar al portapapeles. Por favor, selecciónalo y cópialo manualmente.');
        }
    }

    /**
     * Limpia los campos de texto y restablece el estado de las alertas
     */
    function handleClear() {
        jsonInput.value = '';
        jsonOutput.value = '';
        hideAlert();
        jsonInput.focus();
    }

    /**
     * Despliega la alerta visual en la interfaz de usuario
     * @param {string} type Tipo de alerta ('success', 'error', 'warning')
     * @param {string} message Mensaje a mostrar
     */
    function showAlert(type, message) {
        // Resetear clases previas
        validationAlert.className = 'validation-alert';
        validationAlert.style.display = 'flex';
        validationMessage.textContent = message;

        // Configurar según tipo
        if (type === 'success') {
            validationAlert.classList.add('validation-success');
            validationIcon.className = 'bi bi-check-circle-fill';
        } else if (type === 'error') {
            validationAlert.classList.add('validation-error');
            validationIcon.className = 'bi bi-exclamation-octagon-fill';
        } else {
            // Advertencias
            validationAlert.classList.add('validation-error'); // Usar estilo visual similar para simplificar
            validationIcon.className = 'bi bi-exclamation-triangle-fill';
        }
    }

    /**
     * Oculta el contenedor de la alerta
     */
    function hideAlert() {
        validationAlert.style.display = 'none';
        validationMessage.textContent = '';
    }
});
