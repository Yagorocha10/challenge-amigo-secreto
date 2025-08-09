let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById("amigo").value.trim();

    if (nome === "") {
        alert('Por favor, insira um nome');
    } else {
        amigos.push(nome);
        document.getElementById("amigo").value = "";
        
    }
}