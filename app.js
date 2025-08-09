let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById("amigo").value.trim();

    if (nome === "") {
        alert('Por favor, insira um nome');
    } else {
        amigos.push(nome);
        document.getElementById("amigo").value = "";
        atualizarListaAmigos();
    }


}

function atualizarListaAmigos() {
     let lista = document.getElementById("listaAmigos");  
     lista.innerHTML = "";
    
     for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
     }
}


