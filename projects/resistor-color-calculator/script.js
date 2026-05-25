/**
 * CALCULADORA DE CÓDIGO DE COLORES DE RESISTENCIAS - LÓGICA DE JAVASCRIPT (VANILLA JS)
 * ==========================================================================
 * Implementa el cálculo matemático de ohmios en base a 4 bandas de color,
 * el formateado comprensible de magnitudes y la actualización interactiva
 * del cuerpo físico de la resistencia mediante inyección de clases CSS en tiempo real.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Referencias a los selectores de banda del DOM
    const selectBand1 = document.getElementById('select-band-1');
    const selectBand2 = document.getElementById('select-band-2');
    const selectBand3 = document.getElementById('select-band-3');
    const selectBand4 = document.getElementById('select-band-4');

    // Referencias al cuerpo visual de la resistencia (las bandas físicas)
    const visualBand1 = document.getElementById('visual-band-1');
    const visualBand2 = document.getElementById('visual-band-2');
    const visualBand3 = document.getElementById('visual-band-3');
    const visualBand4 = document.getElementById('visual-band-4');

    // Referencias a los contenedores de resultados del DOM
    const textValue = document.getElementById('text-value');
    const textTolerance = document.getElementById('text-tolerance');
    const btnReset = document.getElementById('btn-reset');

    // Mapeo de valores y clases asociadas para el cálculo
    const digitValues = {
        'black': 0, 'brown': 1, 'red': 2, 'orange': 3, 'yellow': 4,
        'green': 5, 'blue': 6, 'violet': 7, 'gray': 8, 'white': 9
    };

    const multiplierValues = {
        'black': 1,
        'brown': 10,
        'red': 100,
        'orange': 1000,
        'yellow': 10000,
        'green': 100000,
        'blue': 1000000,
        'violet': 10000000,
        'gray': 100000000,
        'white': 1000000000,
        'gold': 0.1,
        'silver': 0.01
    };

    const toleranceValues = {
        'brown': '±1%',
        'red': '±2%',
        'green': '±0.5%',
        'blue': '±0.25%',
        'violet': '±0.1%',
        'gray': '±0.05%',
        'gold': '±5%',
        'silver': '±10%'
    };

    // Configurar listeners para cambios interactivos
    const bandSelectors = [selectBand1, selectBand2, selectBand3, selectBand4];
    bandSelectors.forEach(select => {
        select.addEventListener('change', calculateResistor);
    });

    // Configurar botón restablecer
    btnReset.addEventListener('click', handleReset);

    // Calcular valores inicialmente al arrancar
    calculateResistor();

    /**
     * Toma las selecciones de banda, realiza el cálculo y actualiza el HTML
     */
    function calculateResistor() {
        const color1 = selectBand1.value;
        const color2 = selectBand2.value;
        const color3 = selectBand3.value;
        const color4 = selectBand4.value;

        // 1. Actualizar el color en la resistencia física interactiva
        updateVisualBands(color1, color2, color3, color4);

        // 2. Extraer valores numéricos correspondientes
        const d1 = digitValues[color1];
        const d2 = digitValues[color2];
        const mult = multiplierValues[color3];
        const tol = toleranceValues[color4];

        // 3. Realizar el cálculo del valor matemático de la resistencia
        const calculatedOhms = (d1 * 10 + d2) * mult;

        // 4. Formatear la magnitud de los ohmios (Ω, kΩ, MΩ, GΩ)
        const formattedValue = formatOhms(calculatedOhms);

        // 5. Inyectar los valores en el DOM de la tarjeta de resultado
        textValue.textContent = formattedValue;
        textTolerance.textContent = `Tolerancia: ${tol}`;
    }

    /**
     * Limpia las clases previas de las bandas visuales y aplica las nuevas
     */
    function updateVisualBands(c1, c2, c3, c4) {
        // Banda 1
        clearBandClasses(visualBand1);
        visualBand1.classList.add(`band-${c1}`);

        // Banda 2
        clearBandClasses(visualBand2);
        visualBand2.classList.add(`band-${c2}`);

        // Banda 3
        clearBandClasses(visualBand3);
        visualBand3.classList.add(`band-${c3}`);

        // Banda 4
        clearBandClasses(visualBand4);
        visualBand4.classList.add(`band-${c4}`);
    }

    /**
     * Remueve todas las clases posibles de banda del elemento
     * @param {HTMLElement} bandEl Elemento de banda
     */
    function clearBandClasses(bandEl) {
        const allColors = [
            'band-black', 'band-brown', 'band-red', 'band-orange', 'band-yellow',
            'band-green', 'band-blue', 'band-violet', 'band-gray', 'band-white',
            'band-gold', 'band-silver'
        ];
        allColors.forEach(cls => bandEl.classList.remove(cls));
    }

    /**
     * Formatea el valor de ohmios a un string entendible utilizando prefijos métricos estándar
     * @param {number} ohms Valor en ohmios
     * @returns {string} Valor formateado con símbolo de unidad correspondiente
     */
    function formatOhms(ohms) {
        if (ohms >= 1000000000) {
            const rawG = ohms / 1000000000;
            // Eliminar decimales innecesarios (Ej: 1.0 -> 1)
            return `${parseFloat(rawG.toFixed(2))} GΩ`;
        }
        if (ohms >= 1000000) {
            const rawM = ohms / 1000000;
            return `${parseFloat(rawM.toFixed(2))} MΩ`;
        }
        if (ohms >= 1000) {
            const rawK = ohms / 1000;
            return `${parseFloat(rawK.toFixed(2))} kΩ`;
        }
        // Para ohmios bajos
        return `${parseFloat(ohms.toFixed(2))} Ω`;
    }

    /**
     * Restablece los selectores a un valor estándar común (Marrón, Negro, Rojo, Oro = 1 kΩ ±5%)
     */
    function handleReset() {
        selectBand1.value = 'brown';
        selectBand2.value = 'black';
        selectBand3.value = 'red';
        selectBand4.value = 'gold';

        // Ejecutar cálculo nuevamente
        calculateResistor();
    }
});
