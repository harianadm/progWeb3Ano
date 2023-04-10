function menu(){
    document.getElementById("menuDropdown").classList.toggle("show");
}

function autentication(){
    let usuario = document.getElementById("txtUsuario");
    let senha = document.getElementById("txtSenha");
    let usuarioAviso = document.getElementById("lblUsuAut");
    let senhaAviso = document.getElementById("lblSenAut");
    let senhaAvisoTam = document.getElementById("lblSenNum");

    if (usuario.value.trim() == ""){
        usuario.style.border = "solid 2px";
        usuario.style.borderBlockColor = "#ff0000";
        usuarioAviso.style.display = "block";
    }
    else{
        usuario.style.border = "solid 1px";
        usuario.style.borderBlockColor = "#00ff00";
        usuarioAviso.style.display = "none";
    }
    
    if(senha.value.trim() == ""){
        senhaAviso.style.display = "block";
    }
    else{
        senhaAviso.style.display = "none";
        if(senha.value.length < 6 || senha.value.length > 30){
            senha.style.border = "solid 2px";
            senha.style.borderBlockColor = "#ff0000";
            senhaAvisoTam.style.display = "block";
        }
        else{
            senha.style.border = "solid 1px";
            senha.style.borderBlockColor = "#00ff00";
            senhaAvisoTam.style.display = "none";
        }
    }
}