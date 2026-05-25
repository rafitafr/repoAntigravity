# Historial de Prompts

## Prompt 1: Creación del Portfolio Principal (Raíz)
**Fecha:** 24 de Mayo de 2026
**Prompt del Usuario:**
> Ejecuta el workflow @[c:\Users\nicko\Desktop\curso Antigravity\repoAntigravity\.agents\workflows\update-root-index.md] 
> 
> Quiero crear la base del portfolio en la raíz del repositorio.
> 
> Debe crear o actualizar:
> - index.html
> - assets/css/portfolio.css
> - assets/js/portfolio.js
> 
> Debe leer @[c:\Users\nicko\Desktop\curso Antigravity\repoAntigravity\projects.json]  y mostrar los proyectos como tarjetas.
> 
> No crees todavía los mini proyectos dentro de /projects.
> Sigue las reglas de @[c:\Users\nicko\Desktop\curso Antigravity\repoAntigravity\.agents\rules\general-dev.md]

**Acción realizada:**
Creación de la base de diseño del portfolio utilizando Bootstrap 5.3 e implementación de la lógica dinámica de carga de tarjetas de `projects.json` con filtros interactivos de búsqueda y categorías.

## Prompt 2: Actualización de Autor según Reglas
**Fecha:** 24 de Mayo de 2026
**Prompt del Usuario:**
> Se ha añadido un apartado nuevo de AUTHOR en @[c:\Users\nicko\Desktop\curso Antigravity\repoAntigravity\.agents\rules\general-dev.md] , aplícalo a lo que ya está realizado y tenlo en cuenta para futuras peticiones

**Acción realizada:**
Actualización del metatag `author` y del pie de página de `index.html` para reflejar el nombre del autor oficial: "Rafael Fernández Rodríguez".

## Prompt 3: Creación de la herramienta JSON Beautifier
**Fecha:** 24 de Mayo de 2026
**Prompt del Usuario:**
> Sigueitne el workflow @[c:\Users\nicko\Desktop\curso Antigravity\repoAntigravity\.agents\workflows\create-mini-project.md] 
> 
> Crea el mini proyecto "JSON Beautifier".
> 
> Ruta:
> projects/json-beautifier/
> 
> Funcionalidades obligatorias:
> - Pegar JSON en un textarea.
> - Validar si el JSON es correcto.
> - Formatear JSON con indentación.
> - Minificar JSON.
> - Copiar resultado al portapapeles.
> - Limpiar entrada y resultado.
> - Mostrar errores claros si el JSON no es válido.
> - Enlace para volver al índice principal.
> 
> Archivos a crear:
> - projects/json-beautifier/index.html
> - projects/json-beautifier/style.css
> - projects/json-beautifier/script.js
> - projects/json-beautifier/README.md
> 
> Además:
> - Actualiza projects.json y cambia el estado de json-beautifier a "done".
> - No modifiques otros mini proyectos.
> - No uses frameworks ni dependencias externas.
> - Sigue las reglas de @[c:\Users\nicko\Desktop\curso Antigravity\repoAntigravity\.agents\rules\general-dev.md]

**Acción realizada:**
Implementación del mini proyecto JSON Beautifier utilizando maquetado Bootstrap (regla de prioridad del usuario) con un diseño oscuro premium. Se actualizó el estado a 'done' en `projects.json` y se adaptó `portfolio.js` para admitir y renderizar el estado 'done' como proyecto completado en la raíz del portfolio.

## Prompt 4: Creación de la herramienta Calculadora de Conversión de Bases Numéricas
**Fecha:** 24 de Mayo de 2026
**Prompt del Usuario:**
> Ejecuta el workflow @[c:\Users\nicko\Desktop\curso Antigravity\repoAntigravity\.agents\workflows\create-mini-project.md] 
> 
> Crea el mini proyecto "Calculadora decimal/binario/hexadecimal/octal".
> 
> Ruta:
> projects/base-converter/
> 
> Funcionalidades:
> - Seleccionar la base de entrada: decimal, binario, hexadecimal u octal.
> - Introducir un número.
> - Convertir automáticamente al resto de bases.
> - Validar que el número introducido corresponde a la base seleccionada.
> - Mostrar errores claros si el valor no es válido.
> - Permitir copiar cada resultado.
> - Botón para limpiar.
> - Breve explicación de cada sistema numérico.
> - Enlace para volver al índice principal.
> 
> Archivos que debe crear:
> - projects/base-converter/index.html
> - projects/base-converter/style.css
> - projects/base-converter/script.js
> - projects/base-converter/README.md
> 
> Además:
> - Actualiza projects.json.
> - Cambia el estado de base-converter a "done".
> - No modifiques json-beautifier.
> - No uses frameworks ni dependencias externas.
> - Sigue las reglas de @[c:\Users\nicko\Desktop\curso Antigravity\repoAntigravity\.agents\rules\general-dev.md]

**Acción realizada:**
Implementación del mini proyecto Base Converter utilizando maquetación Bootstrap 5.3 (prioridad del usuario) y estilos oscuros. Se actualizó el estado del proyecto a 'done' en `projects.json`.

## Prompt 5: Creación de la herramienta Calculadora de código de colores de resistencias
**Fecha:** 25 de Mayo de 2026
**Prompt del Usuario:**
> Ejecuta el workflow @[c:\Users\nicko\Desktop\curso Antigravity\repoAntigravity\.agents\workflows\create-mini-project.md] 
> 
> Crea el mini proyecto "Calculadora de código de colores de resistencias".
> 
> Ruta:
> projects/resistor-color-calculator/
> 
> Funcionalidades:
> - Seleccionar colores para las bandas de una resistencia.
> - Permitir modo de 4 bandas:
>   - banda 1: primer dígito
>   - banda 2: segundo dígito
>   - banda 3: multiplicador
>   - banda 4: tolerancia
> - Calcular el valor final en ohmios.
> - Mostrar el resultado formateado en Ω, kΩ o MΩ según corresponda.
> - Mostrar la tolerancia.
> - Representar visualmente una resistencia sencilla con CSS y las bandas seleccionadas.
> - Mostrar una breve explicación de cómo leer las bandas.
> - Botón para limpiar/restablecer.
> - Enlace para volver al índice principal.
> 
> Archivos que debe crear:
> - projects/resistor-color-calculator/index.html
> - projects/resistor-color-calculator/style.css
> - projects/resistor-color-calculator/script.js
> - projects/resistor-color-calculator/README.md
> 
> Además:
> - Actualiza projects.json.
> - Cambia el estado de resistor-color-calculator a "done".
> - No modifiques json-beautifier ni base-converter.
> - No uses frameworks ni dependencias externas.
> - Sigue las reglas de @[c:\Users\nicko\Desktop\curso Antigravity\repoAntigravity\.agents\rules\general-dev.md]

**Acción realizada:**
Implementación de la Calculadora de código de colores de resistencias utilizando maquetación Bootstrap 5.3 (regla de prioridad global) y estilos CSS oscuros con visualización interactiva. Se actualizó el estado a 'done' en `projects.json`.

## Prompt 6: Corrección de contraste en la tabla de referencia de resistencias
**Fecha:** 25 de Mayo de 2026
**Prompt del Usuario:**
> en el mini proyecto Calculadora de código de colores de resistencias está la tabla de referencia rápida, pero el color de la fuente es negra y no se ve con el fondo oscuro, cambiar el color de la fuente para que sea legible.

**Acción realizada:**
Se corrigieron los estilos de `.table-custom td` en `projects/resistor-color-calculator/style.css` para forzar la propiedad `color: var(--text-primary) !important;`, solucionando el conflicto con los valores heredados de Bootstrap 5 y garantizando una legibilidad óptima sobre el fondo oscuro premium.

## Prompt 7: Creación de la herramienta CSV JSON Converter
**Fecha:** 25 de Mayo de 2026
**Prompt del Usuario:**
> Ejecuta el workflow @[c:\Users\nicko\Desktop\curso Antigravity\repoAntigravity\.agents\workflows\create-mini-project.md] 
> 
> Crea el mini proyecto "CSV JSON Converter".
> 
> Ruta:
> projects/csv-json-converter/
> 
> Funcionalidades:
> - Pegar contenido CSV en un textarea.
> - Convertir CSV a JSON.
> - Pegar contenido JSON en un textarea.
> - Convertir JSON a CSV.
> - Permitir elegir si el CSV tiene cabecera.
> - Mostrar errores claros si el CSV o JSON no es válido.
> - Copiar el resultado al portapapeles.
> - Descargar el resultado como archivo .json o .csv.
> - Limpiar entrada y resultado.
> - Mostrar una breve explicación de uso.
> - Enlace para volver al índice principal.
> 
> Archivos que debe crear:
> - projects/csv-json-converter/index.html
> - projects/csv-json-converter/style.css
> - projects/csv-json-converter/script.js
> - projects/csv-json-converter/README.md
> 
> Además:
> - Actualiza @[c:\Users\nicko\Desktop\curso Antigravity\repoAntigravity\projects.json]  añadiendo csv-json-converter con status "done".
> - No modifiques los mini proyectos existentes.
> - No uses frameworks ni dependencias externas.
> - Usa solo HTML, CSS y JavaScript vanilla.
> - Sigue las reglas de @[c:\Users\nicko\Desktop\curso Antigravity\repoAntigravity\.agents\rules\general-dev.md]

**Acción realizada:**
Implementación del mini proyecto CSV JSON Converter en HTML, CSS y JS con soporte dinámico para conversiones de CSV a JSON y viceversa, copiado rápido, descarga en local y alerta de errores. Se actualizó `projects.json` con status "done" para habilitar la tarjeta en la página raíz.

## Prompt 8: Actualización del README.md general del repositorio
**Fecha:** 25 de Mayo de 2026
**Prompt del Usuario:**
> Lee la estructura actual del repositorio, el archivo @[c:\Users\nicko\Desktop\curso Antigravity\repoAntigravity\.agents\rules\general-dev.md]  y el archivo @[c:\Users\nicko\Desktop\curso Antigravity\repoAntigravity\projects.json] 
> 
> Necesito que completes o actualices el archivo @[c:\Users\nicko\Desktop\curso Antigravity\repoAntigravity\README.md] 
> 
> El README debe describir claramente el propósito del repositorio: un portfolio de mini herramientas web desarrolladas con HTML, CSS, JavaScript y JSON, publicable en GitHub Pages.
> 
> Incluye estas secciones:
> 
> 1. Título del proyecto.
> 2. Descripción general.
> 3. Tecnologías utilizadas.
> 4. Estructura del repositorio.
> 5. Listado de mini proyectos leyendo la información existente en projects.json.
> 6. Cómo añadir nuevos mini proyectos.
> 7. Estado actual del proyecto.
> 8. Posibles mejoras futuras.
> 
> Condiciones:
> - No inventes mini proyectos que no estén en projects.json.
> - No modifiques los mini proyectos existentes.
> - No modifiques index.html, CSS ni JavaScript.
> - Solo actualiza README.md.
> - Usa un tono profesional, claro y conciso.
> - El README debe estar en español.

**Acción realizada:**
Se rellenó y estructuró completamente el archivo `README.md` de la raíz del repositorio siguiendo los 8 apartados requeridos. Se leyeron dinámicamente los 7 proyectos actuales (4 completados, 3 planificados) registrados en `projects.json` y se describieron bajo la firma oficial de autoría de Rafael Fernández Rodríguez.







