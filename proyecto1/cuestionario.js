<script>
        // Función para manejar el envío del formulario
        function enviarFormulario(event) {
            event.preventDefault(); // Evita el comportamiento de envío por defecto

            // Obtener los valores del formulario
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;

            // Crear un objeto con los datos a enviar
            const datosFormulario = {
                nombre: nombre,
                email: email,
                mensaje: mensaje
            };

            // Enviar los datos al webhook usando fetch
            fetch('https://webhook.site/7d580ff9-65b4-42eb-b1e2-c67d9a7a1667', {
                method: 'POST', // Usamos el método POST para enviar los datos
                headers: {
                    'Content-Type': 'application/json', // Especificamos que los datos son JSON
                },
                body: JSON.stringify(datosFormulario) // Convertimos los datos a formato JSON
            })
            .then(response => {
                if (response.ok) {
                    // Si la respuesta es exitosa, agregar los datos a la tabla
                    alert('Datos enviados correctamente al webhook.');
                    agregarATabla(datosFormulario);
                } else {
                    throw new Error('Error en el envío de datos.');
                }
            })
            .catch(error => {
                console.error('Error al enviar los datos:', error);
                alert('Hubo un error al enviar los datos.');
            });

            // Limpiar el formulario
            document.getElementById('formulario').reset();
        }

        // Función para agregar los datos a la tabla
        function agregarATabla(datos) {
            const tabla = document.getElementById('tablaDatos').getElementsByTagName('tbody')[0];

            // Crear una nueva fila
            const nuevaFila = tabla.insertRow();

            // Insertar las celdas con los datos
            const celdaNombre = nuevaFila.insertCell(0);
            const celdaEmail = nuevaFila.insertCell(1);
            const celdaMensaje = nuevaFila.insertCell(2);

            celdaNombre.textContent = datos.nombre;
            celdaEmail.textContent = datos.contraseña;
            celdaMensaje.textContent = datos.correo;
        }
    </script>
