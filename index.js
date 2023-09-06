
document.addEventListener("DOMContentLoaded", function () {
    const URL = "https://jsonplaceholder.typicode.com/users";

    document.getElementById("enviar").addEventListener("click", function () {
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const nacimiento = document.getElementById("nacimiento").value;

        const data = {
            "Nombre": nombre,
            "Apellido": apellido,
            "Fecha de nacimiento": nacimiento
        };

        fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.status === 201) {
                console.table(data);
            } else {
                console.log("Error al crear el usuario");
            }
        })
        .catch(error => {
            console.log(error);
        });
    });
});
