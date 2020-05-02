function MostrarLogin():void
{

    
    let inputCorreo : string = (<HTMLInputElement>document.getElementById("txtCorreo")).value;
    let inputClave : string = (<HTMLInputElement>document.getElementById("txtClave")).value;

    let xhr : XMLHttpRequest = new XMLHttpRequest();
    
    xhr.open('POST', "backend/mostrar.php", true);

    let form : FormData = new FormData();
    form.append('m', "Login");
    form.append('correo', inputCorreo);
    form.append('clave', inputClave);
    

    xhr.setRequestHeader("enctype", "multipart/form-data");
    

    xhr.send(form);
    


    xhr.onreadystatechange = () => {
        
        if (xhr.readyState == 4 && xhr.status == 200) {

            (<HTMLInputElement> document.getElementById("divMostrar")).innerHTML = xhr.responseText;
        }
        
    };
        
}


function MostrarListado():void
{
    let xhr : XMLHttpRequest = new XMLHttpRequest();

    xhr.open('POST', "backend/mostrar.php", true);

    let form : FormData = new FormData();
    form.append('m', "Mostrar");

    xhr.setRequestHeader("enctype", "multipart/form-data");
    
    xhr.send(form);

    xhr.onreadystatechange = () => {
        
        if (xhr.readyState == 4 && xhr.status == 200) {

            (<HTMLInputElement> document.getElementById("divMostrar")).innerHTML = xhr.responseText;
        }
        
    };
}