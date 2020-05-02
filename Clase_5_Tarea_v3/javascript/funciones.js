"use strict";
function MostrarLogin() {
    var inputCorreo = document.getElementById("txtCorreo").value;
    var inputClave = document.getElementById("txtClave").value;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', "backend/mostrar.php", true);
    var form = new FormData();
    form.append('m', "Login");
    form.append('correo', inputCorreo);
    form.append('clave', inputClave);
    xhr.setRequestHeader("enctype", "multipart/form-data");
    xhr.send(form);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("divMostrar").innerHTML = xhr.responseText;
        }
    };
}
function MostrarListado() {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', "backend/mostrar.php", true);
    var form = new FormData();
    form.append('m', "Mostrar");
    xhr.setRequestHeader("enctype", "multipart/form-data");
    xhr.send(form);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("divMostrar").innerHTML = xhr.responseText;
        }
    };
}
//# sourceMappingURL=funciones.js.map