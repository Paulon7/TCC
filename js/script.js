/* script.js */
document.addEventListener("DOMContentLoaded", function () {
    console.log("Página carregada com sucesso!");

    const btnOrcamento = document.querySelector(".btn");
    if (btnOrcamento) {
        btnOrcamento.addEventListener("click", function (event) {
            event.preventDefault();
            alert("Redirecionando para a página de orçamento...");
            window.location.href = "orcamento.html";
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("orcamento-form");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const servico = document.getElementById("servico").value;
        const mensagem = document.getElementById("mensagem").value.trim();

        if (nome === "" || email === "" || servico === "") {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        alert("Orçamento enviado com sucesso! Entraremos em contato em breve.");
        form.reset();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const botoesAdicionar = document.querySelectorAll(".btn-adicionar");
    const listaCarrinho = document.getElementById("lista-carrinho");
    const totalElemento = document.getElementById("total");
    const finalizarCompra = document.getElementById("finalizar-compra");

    let carrinho = [];
    let total = 0;

    botoesAdicionar.forEach(botao => {
        botao.addEventListener("click", () => {
            const nome = botao.getAttribute("data-nome");
            const preco = parseFloat(botao.getAttribute("data-preco"));

            carrinho.push({ nome, preco });
            total += preco;

            atualizarCarrinho();
        });
    });

    function atualizarCarrinho() {
        listaCarrinho.innerHTML = "";
        carrinho.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
            listaCarrinho.appendChild(li);
        });

        totalElemento.textContent = `R$ ${total.toFixed(2)}`;
    }

    finalizarCompra.addEventListener("click", () => {
        if (carrinho.length === 0) {
            alert("Seu carrinho está vazio!");
        } else {
            alert("Compra finalizada! Obrigado por comprar conosco.");
            carrinho = [];
            total = 0;
            atualizarCarrinho();
        }
    });
});

document.querySelectorAll('.btn-adicionar').forEach(button => {
    button.addEventListener('click', function() {
        // Alterando o texto do botão para "Comprar"
        this.textContent = 'Comprar';
        
        // Exibindo o ícone de carrinho ao lado do botão
        const carrinhoIcon = this.nextElementSibling;
        carrinhoIcon.style.display = 'inline-block';
        
        // Adicionando o produto ao carrinho
        const produtoNome = this.closest('.produto').getAttribute('data-nome');
        const produtoPreco = this.closest('.produto').getAttribute('data-preco');
        
        // Criando um item na lista do carrinho
        const itemCarrinho = document.createElement('li');
        itemCarrinho.textContent = `${produtoNome} - R$ ${produtoPreco}`;
        document.getElementById('lista-carrinho').appendChild(itemCarrinho);
        
        // Atualizando o total
        const totalElement = document.getElementById('total');
        const total = parseFloat(totalElement.textContent.replace('R$ ', ''));
        const precoProduto = parseFloat(produtoPreco);
        totalElement.textContent = `R$ ${(total + precoProduto).toFixed(2)}`;
    });
});
