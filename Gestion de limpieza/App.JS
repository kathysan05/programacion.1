document.addEventListener("DOMContentLoaded", function () {
    const btnRegistrar = document.getElementById('btnRegistrar');
    const btnLimpiar = document.getElementById('btnLimpiar');
    const tablaRegistros = document.getElementById('tablaRegistros').getElementsByTagName('tbody')[0];

    // Función para agregar un registro a la tabla
    function agregarRegistro(producto, cantidad, precio, encargado, empleado) {
        const nuevaFila = tablaRegistros.insertRow();

        // Crear celdas y agregar datos a la fila
        nuevaFila.insertCell(0).textContent = producto;
        nuevaFila.insertCell(1).textContent = cantidad;
        nuevaFila.insertCell(2).textContent = precio;
        nuevaFila.insertCell(3).textContent = encargado;
        nuevaFila.insertCell(4).textContent = empleado;
    }

    // Función para limpiar el formulario
    function limpiarFormulario() {
        document.getElementById('producto').value = '';
        document.getElementById('cantidad').value = '';
        document.getElementById('precio').value = '';
        document.getElementById('encargado').value = '';
        document.getElementById('empleado').value = '';
    }

    // Evento para registrar el producto
    btnRegistrar.addEventListener('click', function () {
        const producto = document.getElementById('producto').value;
        const cantidad = document.getElementById('cantidad').value;
        const precio = document.getElementById('precio').value;
        const encargado = document.getElementById('encargado').value;
        const empleado = document.getElementById('empleado').value;

        // Validación de campos
        if (!producto || !cantidad || !precio || !encargado || !empleado) {
            alert('Por favor, complete todos los campos.');
            return;
        }

        // Agregar el registro a la tabla
        agregarRegistro(producto, cantidad, precio, encargado, empleado);

        // Limpiar el formulario
        limpiarFormulario();
    });

    // Evento para limpiar el formulario
    btnLimpiar.addEventListener('click', limpiarFormulario);
});
