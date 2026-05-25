/**
 * PORTFOLIO PRINCIPAL - LÓGICA DE JAVASCRIPT (VANILLA JS)
 * ==========================================================================
 * Encargado de cargar dinámicamente el listado de proyectos de projects.json,
 * maquetar las tarjetas mediante clases de Bootstrap y controlar los filtros y búsquedas.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Referencias a elementos del DOM
    const projectsGrid = document.getElementById('projects-grid');
    const searchInput = document.getElementById('search-input');
    const categoriesContainer = document.getElementById('categories-container');

    // Estado global de la aplicación
    let projectsData = [];
    let currentCategory = 'all';
    let searchQuery = '';

    // Inicializar el portfolio
    init();

    /**
     * Función principal de inicialización
     */
    async function init() {
        try {
            // Cargar datos de projects.json
            await fetchProjects();
            
            // Generar botones de categoría dinámicamente a partir de los datos
            renderCategoryButtons();
            
            // Renderizar los proyectos inicialmente
            renderProjects();
            
            // Configurar listeners de eventos
            setupEventListeners();
        } catch (error) {
            console.error('Error al inicializar el portfolio:', error);
            showErrorState();
        }
    }

    /**
     * Obtiene el listado de proyectos desde el JSON local
     */
    async function fetchProjects() {
        // Hacemos fetch al archivo projects.json en la raíz
        const response = await fetch('projects.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        projectsData = data.projects || [];
    }

    /**
     * Genera dinámicamente los botones de filtrado de categorías
     */
    function renderCategoryButtons() {
        // Extraemos las categorías únicas de los proyectos
        const categories = ['all', ...new Set(projectsData.map(p => p.category))];
        
        categoriesContainer.innerHTML = '';
        
        categories.forEach(category => {
            const btn = document.createElement('button');
            btn.className = `filter-btn ${category === 'all' ? 'active' : ''}`;
            btn.setAttribute('data-category', category);
            
            // Texto descriptivo para el botón
            btn.textContent = category === 'all' ? 'Todas' : category;
            
            categoriesContainer.appendChild(btn);
        });
    }

    /**
     * Renderiza las tarjetas de proyectos aplicando filtros y búsqueda
     */
    function renderProjects() {
        // Filtrar proyectos según categoría y término de búsqueda
        const filteredProjects = projectsData.filter(project => {
            const matchesCategory = currentCategory === 'all' || project.category === currentCategory;
            
            const textToSearch = `${project.title} ${project.description} ${project.tags.join(' ')}`.toLowerCase();
            const matchesSearch = textToSearch.includes(searchQuery.toLowerCase());
            
            return matchesCategory && matchesSearch;
        });

        // Limpiar el contenedor de tarjetas
        projectsGrid.innerHTML = '';

        if (filteredProjects.length === 0) {
            showEmptyState();
            return;
        }

        // Crear y añadir la tarjeta para cada proyecto
        filteredProjects.forEach((project, index) => {
            const cardCol = document.createElement('div');
            cardCol.className = 'col-md-6 col-lg-4 animate-fade-in';
            // Escalonar la animación de entrada para un efecto más fluido
            cardCol.style.animationDelay = `${index * 0.08}s`;

            // Mapear el estado del proyecto a una clase CSS de badge
            let statusClass = 'status-planned';
            let statusText = 'Planificado';
            let isLinkDisabled = false;

            switch (project.status) {
                case 'planned':
                    statusClass = 'status-planned';
                    statusText = 'Próximamente';
                    isLinkDisabled = true; // Deshabilitar enlaces para proyectos no creados
                    break;
                case 'in-progress':
                    statusClass = 'status-in-progress';
                    statusText = 'En Desarrollo';
                    break;
                case 'completed':
                case 'done':
                    statusClass = 'status-completed';
                    statusText = 'Completado';
                    break;
            }

            // Crear listado de etiquetas (tags)
            const tagsHTML = project.tags
                .map(tag => `<span class="project-tag">#${tag}</span>`)
                .join('');

            // Construir el HTML de la tarjeta
            cardCol.innerHTML = `
                <div class="project-card">
                    <span class="status-badge ${statusClass}">${statusText}</span>
                    <div class="card-body">
                        <div class="project-category">${project.category}</div>
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-description">${project.description}</p>
                        
                        <div class="tags-container">
                            ${tagsHTML}
                        </div>
                        
                        <a href="${project.liveUrl}" 
                           class="project-link ${isLinkDisabled ? 'disabled' : ''}" 
                           target="_blank"
                           role="button"
                           aria-disabled="${isLinkDisabled}">
                            <span>${isLinkDisabled ? 'No disponible' : 'Abrir Herramienta'}</span>
                            <i class="bi bi-arrow-right-short fs-5"></i>
                        </a>
                    </div>
                </div>
            `;

            projectsGrid.appendChild(cardCol);
        });
    }

    /**
     * Muestra una interfaz amigable cuando no hay resultados
     */
    function showEmptyState() {
        projectsGrid.innerHTML = `
            <div class="col-12">
                <div class="empty-state animate-fade-in">
                    <i class="bi bi-search"></i>
                    <h4>No se encontraron herramientas</h4>
                    <p>Prueba a buscar con otros términos o cambia la categoría seleccionada.</p>
                </div>
            </div>
        `;
    }

    /**
     * Muestra un mensaje de error si falla la conexión o la carga del JSON
     */
    function showErrorState() {
        projectsGrid.innerHTML = `
            <div class="col-12">
                <div class="empty-state animate-fade-in" style="border-color: rgba(239, 68, 68, 0.2)">
                    <i class="bi bi-exclamation-triangle text-danger" style="background: none; -webkit-text-fill-color: initial;"></i>
                    <h4 class="text-danger">Error al cargar proyectos</h4>
                    <p>No se pudo conectar con la base de datos de proyectos. Por favor, asegúrate de que projects.json exista en la raíz y sea válido.</p>
                </div>
            </div>
        `;
    }

    /**
     * Configura los controladores de eventos para los filtros y búsqueda
     */
    function setupEventListeners() {
        // Evento de búsqueda (tiempo real con input)
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            renderProjects();
        });

        // Evento de clic en las categorías (delegación de eventos)
        categoriesContainer.addEventListener('click', (e) => {
            const btn = e.target.closest('.filter-btn');
            if (!btn) return;

            // Cambiar clase activa en los botones
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Actualizar filtro y volver a renderizar
            currentCategory = btn.getAttribute('data-category');
            renderProjects();
        });
    }
});
