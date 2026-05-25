/**
 * CSV JSON CONVERTER - LÓGICA DE JAVASCRIPT (VANILLA JS)
 * ==========================================================================
 * Implementa la conversión dinámica bidireccional entre formatos CSV y JSON,
 * validación estructurada de datos, copiado rápido y descarga local en tiempo real.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Elementos del DOM
    const conversionMode = document.getElementById('conversion-mode');
    const hasHeaderCheck = document.getElementById('has-header-check');
    const inputData = document.getElementById('input-data');
    const outputData = document.getElementById('output-data');
    const headerOptionContainer = document.getElementById('header-option-container');

    // Botones
    const btnConvert = document.getElementById('btn-convert');
    const btnDownload = document.getElementById('btn-download');
    const btnCopy = document.getElementById('btn-copy');
    const btnClear = document.getElementById('btn-clear');

    // Alertas de error
    const errorAlert = document.getElementById('error-alert');
    const errorMessage = document.getElementById('error-message');

    // Configurar manejadores de eventos
    conversionMode.addEventListener('change', handleModeChange);
    btnConvert.addEventListener('click', handleConvert);
    btnDownload.addEventListener('click', handleDownload);
    btnCopy.addEventListener('click', handleCopy);
    btnClear.addEventListener('click', handleClear);

    // Arrancar la interfaz con el modo seleccionado por defecto
    handleModeChange();

    /**
     * Adapta dinámicamente la UI según la dirección de conversión seleccionada
     */
    function handleModeChange() {
        const mode = conversionMode.value;
        hideError();

        if (mode === 'csv-to-json') {
            headerOptionContainer.style.display = 'block';
            inputData.placeholder = 'Pega tu texto CSV aquí...\nEjemplo:\nnombre,rol,edad\nRafael,Desarrollador,28\nNicko,Estudiante,24';
            outputData.placeholder = 'El resultado JSON estructurado aparecerá aquí...';
        } else {
            headerOptionContainer.style.display = 'none';
            inputData.placeholder = 'Pega tu JSON estructurado aquí...\nEjemplo:\n[\n  {"nombre": "Rafael", "rol": "Desarrollador"},\n  {"nombre": "Nicko", "rol": "Estudiante"}\n]';
            outputData.placeholder = 'El resultado CSV delimitado por comas aparecerá aquí...';
        }
    }

    /**
     * Orquesta la conversión dependiendo del modo activo
     */
    function handleConvert() {
        const rawInput = inputData.value.trim();
        const mode = conversionMode.value;

        if (!rawInput) {
            showError('Por favor, ingresa contenido en el campo de entrada antes de proceder.');
            outputData.value = '';
            return;
        }

        hideError();

        if (mode === 'csv-to-json') {
            convertCSVToJSON(rawInput);
        } else {
            convertJSONToCSV(rawInput);
        }
    }

    /**
     * Parsea CSV y genera una cadena estructurada JSON
     * @param {string} csvText Texto CSV
     */
    function convertCSVToJSON(csvText) {
        try {
            const hasHeader = hasHeaderCheck.checked;
            
            // 1. Dividir líneas gestionando saltos de línea (básico seguro)
            const rows = parseCSVRows(csvText);

            if (rows.length === 0 || (rows.length === 1 && rows[0].length === 1 && rows[0][0] === '')) {
                throw new Error('El contenido CSV está vacío o es inválido.');
            }

            let headers = [];
            let startIndex = 0;

            if (hasHeader) {
                headers = rows[0].map(h => h.trim());
                startIndex = 1;
                
                if (headers.some(h => h === '')) {
                    throw new Error('El CSV contiene una cabecera vacía o inválida.');
                }
            } else {
                // Generar cabeceras secuenciales si no tiene
                const columnCount = rows[0].length;
                for (let i = 1; i <= columnCount; i++) {
                    headers.push(`columna_${i}`);
                }
            }

            const jsonList = [];

            for (let i = startIndex; i < rows.length; i++) {
                const currentRow = rows[i];
                
                // Evitar líneas vacías
                if (currentRow.length === 1 && currentRow[0] === '') continue;

                const obj = {};
                for (let j = 0; j < headers.length; j++) {
                    // Si la fila actual tiene menos columnas, rellenar con nulo o vacío
                    const val = currentRow[j] !== undefined ? currentRow[j].trim() : '';
                    obj[headers[j]] = val;
                }
                jsonList.push(obj);
            }

            // Inyectar salida formateada
            outputData.value = JSON.stringify(jsonList, null, 2);

        } catch (error) {
            console.error('Error al convertir CSV a JSON:', error);
            showError(`Error en el formato CSV: ${error.message}`);
            outputData.value = '';
        }
    }

    /**
     * Parsea JSON y genera una representación CSV delimitada por comas
     * @param {string} jsonText Texto JSON
     */
    function convertJSONToCSV(jsonText) {
        try {
            let parsed = JSON.parse(jsonText);

            // Si es un objeto simple, envolverlo en una lista para procesamiento uniforme
            if (!Array.isArray(parsed)) {
                if (typeof parsed === 'object' && parsed !== null) {
                    parsed = [parsed];
                } else {
                    throw new Error('El JSON debe estructurarse como un Objeto o un Array de Objetos.');
                }
            }

            if (parsed.length === 0) {
                throw new Error('El array de objetos JSON está vacío.');
            }

            // 1. Extraer todas las llaves exclusivas de todos los objetos para la cabecera
            const headersSet = new Set();
            parsed.forEach(item => {
                if (typeof item === 'object' && item !== null) {
                    Object.keys(item).forEach(key => headersSet.add(key));
                } else {
                    throw new Error('Todos los elementos del array de JSON deben ser objetos válidos.');
                }
            });

            const headers = Array.from(headersSet);
            const csvRows = [];

            // 2. Insertar fila de cabeceras
            csvRows.push(headers.join(','));

            // 3. Insertar celdas formateando cadenas especiales
            parsed.forEach(item => {
                const values = headers.map(header => {
                    const val = item[header];
                    if (val === undefined || val === null) {
                        return '';
                    }
                    
                    let valStr = String(val);
                    // Si el valor contiene comas, comillas o saltos de línea, es necesario escaparlo
                    if (valStr.includes(',') || valStr.includes('"') || valStr.includes('\n') || valStr.includes('\r')) {
                        // Reemplazar comillas por doble comilla e incluir valor entre comillas dobles
                        valStr = `"${valStr.replace(/"/g, '""')}"`;
                    }
                    return valStr;
                });
                csvRows.push(values.join(','));
            });

            // Inyectar salida
            outputData.value = csvRows.join('\n');

        } catch (error) {
            console.error('Error al convertir JSON a CSV:', error);
            showError(`Error en el formato JSON: ${error.message}`);
            outputData.value = '';
        }
    }

    /**
     * Parsea filas de CSV gestionando celdas con comillas y saltos de línea (algoritmo básico y seguro)
     */
    function parseCSVRows(text) {
        const rows = [];
        let row = [''];
        rows.push(row);
        let inQuotes = false;

        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            const nextChar = text[i + 1];

            if (char === '"') {
                if (inQuotes && nextChar === '"') {
                    row[row.length - 1] += '"'; // Comilla escapada
                    i++;
                } else {
                    inQuotes = !inQuotes; // Iniciar o terminar bloque de comillas
                }
            } else if (char === ',' && !inQuotes) {
                row.push(''); // Siguiente columna
            } else if ((char === '\r' || char === '\n') && !inQuotes) {
                if (char === '\r' && nextChar === '\n') {
                    i++; // Saltar '\n' de Windows
                }
                row = [''];
                rows.push(row); // Nueva fila
            } else {
                row[row.length - 1] += char; // Carácter normal
            }
        }
        
        // Limpiar última fila si queda vacía
        if (rows.length > 0 && rows[rows.length - 1].length === 1 && rows[rows.length - 1][0] === '') {
            rows.pop();
        }

        return rows;
    }

    /**
     * Descarga el resultado como archivo local utilizando Blobs
     */
    function handleDownload() {
        const content = outputData.value;
        const mode = conversionMode.value;

        if (!content) {
            showError('No hay ningún resultado en el panel de salida para poder descargarlo.');
            return;
        }

        let filename = 'conversion_resultado';
        let mimeType = 'text/plain';

        if (mode === 'csv-to-json') {
            filename += '.json';
            mimeType = 'application/json';
        } else {
            filename += '.csv';
            mimeType = 'text/csv';
        }

        try {
            const blob = new Blob([content], { type: mimeType });
            const url = URL.createObjectURL(blob);
            
            const link = document.createElement('a');
            link.href = url;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            
            // Limpieza del DOM
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error al generar la descarga:', error);
            showError('Ocurrió un error inesperado al intentar procesar la descarga de tu archivo.');
        }
    }

    /**
     * Guarda el texto resultante en el portapapeles
     */
    async function handleCopy() {
        const content = outputData.value;

        if (!content) {
            showError('No hay contenido resultante en el panel de salida para poder copiarlo.');
            return;
        }

        try {
            await navigator.clipboard.writeText(content);
            
            // Feedback interactivo en el botón copiar
            const originalHTML = btnCopy.innerHTML;
            btnCopy.innerHTML = '<i class="bi bi-check2"></i> ¡Copiado!';
            btnCopy.classList.remove('btn-outline-custom');
            btnCopy.classList.add('btn-outline-custom', 'copied');

            setTimeout(() => {
                btnCopy.innerHTML = originalHTML;
                btnCopy.classList.remove('copied');
            }, 2000);

        } catch (error) {
            console.error('Error al copiar:', error);
            showError('Ocurrió un fallo de permisos al copiar al portapapeles. Selecciónalo y cópialo manualmente.');
        }
    }

    /**
     * Limpia todos los controles e inputs
     */
    function handleClear() {
        inputData.value = '';
        outputData.value = '';
        hideError();
        inputData.focus();
    }

    /**
     * Despliega mensaje de error y resalta el input
     */
    function showError(message) {
        errorMessage.textContent = message;
        errorAlert.style.display = 'flex';
        inputData.classList.add('is-invalid');
    }

    /**
     * Oculta la alerta de error
     */
    function hideError() {
        errorAlert.style.display = 'none';
        errorMessage.textContent = '';
        inputData.classList.remove('is-invalid');
    }
});
