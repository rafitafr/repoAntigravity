---
trigger: always_on
---

## Objetivo del repositorio

Este repositorio contiene un portfolio de mini herramientas web estáticas desarrolladas con HTML, CSS, JavaScript y JSON.

Cada mini proyecto debe vivir dentro de `/projects/{project-slug}/` y debe poder ejecutarse de forma independiente abriendo su propio `index.html`.

La raíz del proyecto contiene un índice general (`index.html`) que lista todos los mini proyectos definidos en `projects.json`.

## PROMPTS
Todos los prompts ejecutados se guardarán a modo de historial en el archivo prompts.md de la raíz del proyecto.

## AUTHOR
Siempre que tengas que hacer referencias al autor de proyecto su nombre es Rafael Fernández Rodríguez

---

## Stack permitido

Usar únicamente:

- HTML5
- CSS3
- JavaScript vanilla
- JSON

No usar frameworks salvo autorización explícita del usuario.

No usar:

- React
- Vue
- Angular
- TypeScript
- Bootstrap
- Tailwind
- jQuery
- dependencias externas innecesarias
- CDNs salvo aprobación expresa

---

## Reglas generales de comportamiento

Antes de modificar código:

1. Leer la estructura actual del repositorio.
2. Revisar `projects.json`.
3. Revisar `docs/project-conventions.md`.
4. Identificar si la tarea afecta:
   - a un mini proyecto existente,
   - a un nuevo mini proyecto,
   - al índice raíz,
   - a reglas/documentación,
   - o a varios elementos.

No modificar archivos fuera del alcance de la tarea.

No reestructurar el proyecto completo salvo petición explícita.

No borrar archivos existentes sin explicar el motivo.

No cambiar nombres de carpetas ya existentes sin actualizar todas las referencias.

---

## Convenciones de mini proyectos

Cada mini proyecto debe tener esta estructura mínima:

```txt
projects/{project-slug}/
├── index.html
├── style.css
├── script.js
└── README.md