# CSV JSON Converter - Mini Herramienta Web

Esta herramienta estática e interactiva te permite convertir de manera bidireccional y rápida tus conjuntos de datos entre los formatos CSV (valores delimitados por comas) y JSON estructurado. Todo el procesamiento se realiza en local, garantizando privacidad absoluta de tus datos y velocidad de respuesta.

## Funcionalidades principales

- **Conversión bidireccional inteligente**:
  - **CSV a JSON**: Transforma tablas de texto plano delimitadas por comas en arrays estructurados de objetos JSON.
  - **JSON a CSV**: Traduce colecciones de objetos o arrays JSON complejos en formato CSV tabular.
- **Configuración de cabeceras**: Activa o desactiva la opción "CSV tiene cabecera" para indicar si la primera fila representa las llaves de los objetos o si la herramienta debe autogenerar nombres de columnas correlativos.
- **Validación con alertas detalladas**: El sistema verifica dinámicamente la sintaxis JSON mediante parseado estructurado y detecta anomalías en el formateo del CSV, desplegando mensajes claros de error si las entradas no son válidas.
- **Acciones rápidas**:
  - **Copiado al Portapapeles**: Copia el código resultante con un clic mediante retroalimentación visual de confirmación.
  - **Descargador de archivos local**: Genera descargas locales instantáneas de los archivos resultantes con extensiones `.json` o `.csv` respectivamente de forma local usando Blobs.
- **Instrucciones Didácticas**: Sección de documentación rápida integrada en el panel que detalla los pasos para realizar las conversiones con éxito.
- **Privacidad del 100%**: Al funcionar completamente del lado del cliente usando JavaScript vanilla, tus datos nunca salen de tu ordenador ni se transmiten a servidores externos.

## Tecnologías utilizadas

- **HTML5**: Estructuración semántica de controles e inputs.
- **CSS3**: Diseño de interfaz premium adaptativo en modo oscuro (*Glassmorphism*) y animaciones sutiles.
- **JavaScript (Vanilla)**: Parseado de cadenas de texto CSV con soporte para celdas con comillas y saltos de línea, validaciones de sintaxis JSON, inyección del DOM, manipulación de la API del portapapeles y generación dinámica de Blobs de descarga.
- **Bootstrap 5.3**: Maquetado fluido y responsivo mediante componentes de control y rejillas fluidas.

## Autor

Desarrollado por **Rafael Fernández Rodríguez** para el Portfolio de Herramientas Web Estáticas.
