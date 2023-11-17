function removerFilme(event) {
    event.target.parentElement.remove();
}

function adicionarFilme() {
    let filmeFavorito = document.getElementById("filme").value;
    let elementoListaFilmes = document.getElementById("listaFilmes");
    let item = document.createElement("div");
    item.classList.add("card-filme");
    let imagem = document.createElement("img");
    let botaoRemover = document.createElement("button");
    botaoRemover.classList.add("botao-remover-filme")

    imagem.src = filmeFavorito;
    imagem.addEventListener("click", removerFilme);
    botaoRemover.innerHTML = "Remover";
    botaoRemover.addEventListener("click", removerFilme);

    item.appendChild(imagem);
    item.appendChild(botaoRemover);
    elementoListaFilmes.appendChild(item);

    document.getElementById("filme").value = "";
}