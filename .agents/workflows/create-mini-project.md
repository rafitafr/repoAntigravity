---
description: create mini projects
---

## Objetivo

Crear un nuevo mini proyecto dentro de `/projects/{project-slug}/`, siguiendo las convenciones del repositorio.

---

## Entrada esperada del usuario

El usuario debe proporcionar, como mínimo:

- nombre del mini proyecto,
- finalidad,
- funcionalidad principal.

Si falta información, hacer una propuesta razonable y continuar, salvo que el requisito sea ambiguo de forma crítica.

---

## Pasos obligatorios

### 1. Analizar contexto

Antes de crear archivos:

- leer `AGENTS.md`,
- leer `docs/project-conventions.md`,
- leer `projects.json`,
- revisar si ya existe una carpeta con el mismo slug.

Si ya existe, no sobrescribir sin confirmación explícita.

---

### 2. Definir metadatos

Crear o confirmar:

- `id`,
- `title`,
- `description`,
- `category`,
- `tags`,
- `path`,
- `liveUrl`,
- `status`.

El `id` debe ser kebab-case.

---

### 3. Crear estructura

Crear:

```txt
projects/{project-slug}/
├── index.html
├── style.css
├── script.js
└── README.md