function senha(){
    let senha = document.getElementById("senha").value
    if(senha === "roma"){
    alert("Senha correta")
    window.location.href = "pagina2/index.html"
    }
    else{
    alert("senha errada")
    }

}