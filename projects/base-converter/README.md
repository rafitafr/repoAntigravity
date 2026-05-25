# Conversor de Bases Numéricas - Mini Herramienta Web

Esta herramienta interactiva te permite realizar conversiones numéricas automáticas en tiempo real entre los sistemas decimal, binario, hexadecimal y octal, con validaciones estrictas y de forma totalmente local en el navegador.

## Funcionalidades principales

- **Conversión en tiempo real**: Los cálculos se realizan de forma automática a medida que escribes el número, actualizando el resto de bases al instante.
- **Selector de base original**: Permite elegir qué sistema numérico estás ingresando (Decimal, Binario, Hexadecimal u Octal) para realizar la traducción inversa de forma transparente.
- **Validación robusta por expresiones regulares**: El sistema verifica dinámicamente si los caracteres ingresados pertenecen a la base elegida:
  - Decimal: Números enteros positivos (0-9).
  - Binario: Únicamente ceros y unos (0-1).
  - Octal: Números del 0 al 7.
  - Hexadecimal: Dígitos 0-9 y letras de la A a la F (sin distinguir mayúsculas/minúsculas).
- **Copiado independiente**: Cada campo de resultado cuenta con su propio botón de copiado rápido al portapapeles, incluyendo animaciones de confirmación visual.
- **Apartado Educativo**: Una sección explicativa que detalla brevemente las definiciones e importancia de los sistemas Decimal, Binario, Hexadecimal y Octal.
- **Limpieza rápida**: Botón dedicado para limpiar de forma instantánea todos los campos y devolver el cursor al campo de entrada.
- **Ejecución 100% en el cliente**: Los cálculos no se envían a ningún servidor web, protegiendo tus datos al ejecutarse únicamente en JavaScript local.

## Tecnologías utilizadas

- **HTML5**: Maquetación estructurada y semántica.
- **CSS3**: Estilos adaptados al tema oscuro del portfolio principal (*Glassmorphism*).
- **JavaScript (Vanilla)**: Captura de eventos, validación con expresiones regulares, lógica de conversión y manejo de portapapeles.
- **Bootstrap 5.3**: Maquetado fluido mediante rejillas responsivas, tarjetas y estilos tipográficos limpios.

## Autor

Desarrollado por **Rafael Fernández Rodríguez** para el Portfolio de Herramientas Web Estáticas.
