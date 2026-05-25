# Portfolio de Mini Herramientas Web Estáticas

Este repositorio contiene un portfolio interactivo de mini herramientas web estáticas y ligeras desarrolladas con tecnologías nativas del lado del cliente. El proyecto está diseñado bajo una arquitectura modular y limpia, optimizada para un alto rendimiento y es totalmente publicable en **GitHub Pages**.

---

## 1. Descripción General

El propósito principal de este repositorio es recopilar una serie de utilidades y mini herramientas de desarrollo, conversión de datos, seguridad, electrónica y diseño en una interfaz unificada. Toda la experiencia de usuario se despliega en una web única (Single Page / Portal Index) que lee dinámicamente un archivo de configuración en formato JSON para listar y enlazar de forma fluida a cada mini proyecto.

Al ejecutarse exclusivamente en el lado del cliente (Client-Side), todas las herramientas garantizan una **privacidad del 100%**, ya que ningún dato es enviado a servidores externos; todo el procesamiento se ejecuta en el navegador web local del usuario.

*   **Autor:** Rafael Fernández Rodríguez
*   **Despliegue:** Compatible con hosting estático (GitHub Pages, Vercel, Netlify, etc.) abriendo directamente `index.html` en la raíz.

---

## 2. Tecnologías Utilizadas

Para garantizar un código limpio, un rendimiento excelente y el cumplimiento de las convenciones del repositorio, se ha seleccionado el siguiente stack tecnológico libre de dependencias pesadas:

*   **HTML5:** Estructuración semántica de componentes y etiquetado responsivo.
*   **CSS3 (Vanilla CSS):** Diseño de interfaz premium adaptativo con tema oscuro moderno, efectos translúcidos (*Glassmorphism*), degradados dinámicos y transiciones fluidas.
*   **JavaScript (Vanilla JS):** Lógica nativa encargada de manipular el DOM, realizar fetch y procesamiento de datos, controlar los buscadores y filtros e implementar interacciones.
*   **Bootstrap 5.3:** Utilizado para la estructuración fluida de layouts, rejillas de maquetación (grid) y estilizado base de controles e inputs.
*   **JSON:** Estructura de base de datos estática para la configuración y registro dinámico de mini proyectos.

---

## 3. Estructura del Repositorio

El proyecto mantiene una jerarquía de archivos estricta y modular:

```txt
repoAntigravity/
├── .agents/                    # Configuraciones de agentes y workflows
├── assets/                     # Recursos globales del index raíz
│   ├── css/
│   │   └── portfolio.css       # Estilos globales y personalización oscura premium
│   └── js/
│       └── portfolio.js        # Lógica de carga interactiva y filtros dinámicos
├── docs/                       # Documentación adicional del proyecto
├── projects/                   # Directorio contenedor de los mini proyectos
│   ├── {project-slug}/
│   │   ├── index.html          # Interfaz propia del proyecto (autónomo)
│   │   ├── style.css           # Estilos personalizados del proyecto
│   │   ├── script.js           # Lógica interactiva en JavaScript
│   │   └── README.md           # Documentación específica del mini proyecto
├── index.html                  # Índice general del portfolio en la raíz
├── projects.json               # Base de datos JSON de configuración de proyectos
├── promtps.md                  # Registro e historial de prompts ejecutados
└── README.md                   # Documentación general del repositorio (este archivo)
```

---

## 4. Listado de Mini Proyectos

La lista de herramientas y proyectos se encuentra registrada en `projects.json` y se clasifica de la siguiente manera según su estado:

### Proyectos Completados (`done`)

1.  **JSON Beautifier**
    *   *Categoría:* Herramientas de desarrollo
    *   *Ruta:* `projects/json-beautifier/`
    *   *Descripción:* Herramienta local para formatear con sangrías personalizables, validar sintaxis con alertas de error detalladas y minificar código JSON en una sola línea compacta.
    *   *Etiquetas:* `json`, `formatter`, `developer-tool`

2.  **Calculadora decimal/binario/hexadecimal/octal**
    *   *Categoría:* Conversores
    *   *Ruta:* `projects/base-converter/`
    *   *Descripción:* Calculadora conversora interactiva que traduce números instantáneamente entre sistemas decimal, binario, hexadecimal y octal con validación en tiempo real por expresiones regulares.
    *   *Etiquetas:* `decimal`, `binary`, `hexadecimal`, `octal`

3.  **Calculadora de colores de resistencias**
    *   *Categoría:* Electrónica
    *   *Ruta:* `projects/resistor-color-calculator/`
    *   *Descripción:* Herramienta para obtener el valor ohmico y la tolerancia de una resistencia eléctrica a partir de sus 4 bandas de colores, con modelado visual interactivo CSS y tabla de referencia rápida.
    *   *Etiquetas:* `resistors`, `electronics`, `calculator`

4.  **CSV JSON Converter**
    *   *Categoría:* Herramientas de desarrollo
    *   *Ruta:* `projects/csv-json-converter/`
    *   *Descripción:* Herramienta bidireccional local para convertir datos tabulares CSV a colecciones JSON y viceversa, con soporte para descargas directas locales y copiado rápido.
    *   *Etiquetas:* `csv`, `json`, `converter`, `developer-tool`

### Proyectos Planificados (`planned`)

5.  **Generador de contraseñas seguras**
    *   *Categoría:* Seguridad
    *   *Ruta:* `projects/password-generator/`
    *   *Descripción:* Herramienta para generar contraseñas seguras configurando longitud, mayúsculas, minúsculas, números y símbolos.
    *   *Etiquetas:* `password`, `security`, `generator`, `javascript`

6.  **Generador de paletas de colores**
    *   *Categoría:* Diseño
    *   *Ruta:* `projects/color-palette-generator/`
    *   *Descripción:* Herramienta para generar paletas de colores, copiar códigos HEX y guardar combinaciones favoritas.
    *   *Etiquetas:* `colors`, `palette`, `hex`, `design`

7.  **Validador de DNI/NIE**
    *   *Categoría:* Validadores
    *   *Ruta:* `projects/dni-nie-validator/`
    *   *Descripción:* Herramienta para validar, normalizar y comprobar la letra de documentos DNI y NIE españoles.
    *   *Etiquetas:* `dni`, `nie`, `validator`, `spain`

---

## 5. Cómo Añadir Nuevos Mini Proyectos

Para incorporar un nuevo proyecto al portfolio, se deben seguir de forma estricta los siguientes pasos:

1.  **Crear la estructura del directorio:**
    Crea una nueva carpeta dentro del directorio `/projects/` utilizando un slug único en formato kebab-case (ej: `projects/mi-nueva-herramienta/`). Dentro de ella, añade obligatoriamente la estructura mínima:
    ```txt
    projects/mi-nueva-herramienta/
    ├── index.html   # Interfaz web independiente con Bootstrap para maquetación
    ├── style.css    # Estilos CSS específicos (CSS Vanilla)
    ├── script.js    # Lógica JavaScript (JS Vanilla sin dependencias externas)
    └── README.md    # Documentación específica del mini proyecto firmado por el autor
    ```
2.  **Registrar el proyecto en la base de datos:**
    Abre el archivo `projects.json` en la raíz del repositorio y añade el objeto del nuevo proyecto al array de `"projects"`, detallando sus metadatos y configurando su `"status"` inicial en `"planned"` o `"done"` según corresponda.
3.  **Actualizar Historiales:**
    Asegúrate de documentar el prompt de creación del nuevo proyecto dentro del archivo general `promtps.md` de la raíz.

---

## 6. Estado Actual del Proyecto

Actualmente, el esqueleto del portfolio está completamente terminado y en producción local. El portal del index general lista de forma reactiva y con filtros dinámicos en tiempo real (por búsqueda textual y categorías) todos los proyectos.
*   **Proyectos Completados:** 4/7 (57% de avance).
*   **Proyectos en Planificación:** 3/7 (43%).
*   Los 4 proyectos en estado `"done"` están listos para ser abiertos y ejecutados con total interactividad.

---

## 7. Posibles Mejoras Futuras

*   **Soporte de Internacionalización (i18n):** Implementación de una opción para alternar el idioma de la interfaz del portfolio y de las herramientas entre español e inglés de forma estática.
*   **Modo de Visualización Altternativo:** Permitir alternar el listado de tarjetas de proyectos entre vista de cuadrícula (grid) y vista de lista compacta para facilitar la navegación rápida.
*   **Historial Local (localStorage):** Guardar en el navegador local el historial de últimas conversiones de bases, combinaciones de resistencias o archivos JSON/CSV procesados recientemente por seguridad y comodidad de uso.
