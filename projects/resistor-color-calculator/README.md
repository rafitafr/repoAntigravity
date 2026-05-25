# Calculadora de Código de Colores de Resistencias - Mini Herramienta Web

Esta herramienta estática e interactiva te permite descifrar el valor de resistencia óhmica y la tolerancia de cualquier resistencia de 4 bandas seleccionando de forma visual sus bandas de colores. Todo el cálculo se realiza en tiempo real y 100% de forma local en tu navegador.

## Funcionalidades principales

- **Cálculo instantáneo interactivo**: Obtén inmediatamente el valor en ohmios ($\Omega$) y su tolerancia porcentual al variar cualquiera de los selectores de banda.
- **Formateado automático inteligente**: Representa el resultado teórico de manera limpia utilizando los prefijos métricos apropiados ($\Omega$, $k\Omega$, $M\Omega$ y $G\Omega$) para evitar lecturas complejas de cifras extremadamente largas.
- **Simulador físico en CSS**: Cuenta con un modelo gráfico digital detallado que replica la silueta física de una resistencia real y repinta sus 4 bandas dinámicamente con transiciones fluidas.
- **Apartado Teórico y Guía Educativa**: Incluye explicaciones claras sobre la fórmula matemática de decodificación y una tabla interactiva detallando los valores asignados a cada color por el estándar internacional.
- **Botón de reinicio rápido**: Configura la calculadora con un clic al valor de resistencia estándar común de 1 kΩ ±5% (Marrón, Negro, Rojo y Oro).
- **Ejecución 100% en el cliente**: Ningún dato o combinación de colores se envía a servidores web externos, garantizando una respuesta inmediata y total privacidad.

## Tecnologías utilizadas

- **HTML5**: Estructuración semántica y accesible.
- **CSS3**: Diseño de interfaz premium adaptativo en modo oscuro (*Glassmorphism*), modelado tridimensional del cuerpo de la resistencia y animaciones fluidas.
- **JavaScript (Vanilla JS)**: Captura de eventos, algoritmos de cálculo, asignación dinámica de clases CSS y mapeo de magnitudes físicas.
- **Bootstrap 5.3**: Maquetación responsiva con rejillas y componentes optimizados.

## Autor

Desarrollado por **Rafael Fernández Rodríguez** para el Portfolio de Herramientas Web Estáticas.
