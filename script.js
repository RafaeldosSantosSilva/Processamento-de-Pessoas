let pessoas = [];

function processarPessoas(pessoas) {
    const pagas = [];
    const naoPagas = [];
    const menores = [];

    pessoas.forEach(pessoa => {
        if (pessoa.idade < 18) {
            menores.push(pessoa.nome + " (Menor de idade)");
        } else if (pessoa.status === 'pago') {
            pagas.push({ nome: pessoa.nome, idade: pessoa.idade });
        } else {
            naoPagas.push({ nome: pessoa.nome, idade: pessoa.idade });
        }
    });

    return { pagas, naoPagas, menores };
}

document.getElementById('pessoa-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const idade = parseInt(document.getElementById('idade').value);
    const status = document.getElementById('status').value;

    pessoas.push({ nome, idade, status });
    document.getElementById('pessoa-form').reset();
});

document.getElementById('processar-btn').addEventListener('click', () => {
    const { pagas, naoPagas, menores } = processarPessoas(pessoas);
    
    const ulPago = document.getElementById('resultado-pago');
    ulPago.innerHTML = '';
    pagas.forEach(pessoa => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="circulo-verde"></span>${pessoa.nome} - Idade: ${pessoa.idade}`;
        ulPago.appendChild(li);
    });

    const ulNaoPago = document.getElementById('resultado-nao-pago');
    ulNaoPago.innerHTML = '';
    naoPagas.forEach(pessoa => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="circulo-vermelho"></span>${pessoa.nome} - Idade: ${pessoa.idade}`;
        ulNaoPago.appendChild(li);
    });

    const ulMenores = document.getElementById('resultado-menores');
    ulMenores.innerHTML = '';
    menores.forEach(nome => {
        const li = document.createElement('li');
        li.classList.add('alerta-menor');
        li.textContent = nome;
        ulMenores.appendChild(li);
    });
});