document.addEventListener('DOMContentLoaded', function () {
    const monthDropdown = document.getElementById('monthDropdown');
    const yearDropdown = document.getElementById('yearDropdown');
    const letterDropdown = document.getElementById('letterDropdown');
    const calendar = document.getElementById('calendar');

    // Función para cargar la imagen del calendario para el mes y año seleccionados
    function cargarImagenCalendario(mes, anio) {
        // Agrega tu lógica para cargar la imagen aquí
        // Por ejemplo:
        // calendar.innerHTML = `<img src="calendario_${mes}_${anio}.jpg" alt="Calendario ${mes}/${anio}">`;
    }

    // Función para llenar el menú desplegable de años con el rango desde 2022 hasta 2100
    function llenarAnios() {
        const fechaActual = new Date();
        const anioActual = fechaActual.getFullYear();
        for (let i = 2022; i <= 2030; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            yearDropdown.appendChild(option);
        }
        yearDropdown.value = anioActual; // Seleccionar el año actual por defecto
    }

    // Manejar la selección de mes y año
    function handleMonthAndYearSelection() {
        const selectedMonth = parseInt(monthDropdown.value);
        const selectedYear = parseInt(yearDropdown.value);
        cargarImagenCalendario(selectedMonth, selectedYear);
    }

    monthDropdown.addEventListener('change', handleMonthAndYearSelection);
    yearDropdown.addEventListener('change', handleMonthAndYearSelection);

    // Manejar la búsqueda por letra
    letterDropdown.addEventListener('change', () => {
        const selectedLetter = letterDropdown.value;
        if (selectedLetter) {
            // Agregar la lógica para buscar la primera fecha que comienza con la letra seleccionada
            // Luego, cargar la imagen del calendario para esa fecha
        }
    });

    // Llenar el menú desplegable de años al cargar la página
    llenarAnios();

    // Inicialmente, cargar la imagen del calendario para el mes y año actual
    const fechaActual = new Date();
    const mesActual = fechaActual.getMonth() + 1; // Los meses en JavaScript son 0 indexados, por lo que sumamos 1
    monthDropdown.value = mesActual;
    cargarImagenCalendario(mesActual, fechaActual.getFullYear());
});
