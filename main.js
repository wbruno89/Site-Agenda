const form = document.getElementById('formulario-agenda');
const contatos = [];
const telefones = [];
const emails = [];

form.addEventListener('submit', function(event) {
    event.preventDefault();

    adicionarLinha();
});

function adicionarLinha() {
    const inputNome = document.getElementById('input-nome-contato');
    const inputTel = document.getElementById('input-numero-contato');
    const inputEmail = document.getElementById('input-email-contato');

    // Verificando se nome, telefone ou email já foi adicionado
    if (contatos.includes(inputNome.value) || telefones.includes(inputTel.value) || emails.includes(inputEmail.value)) {
        alert('Nome, telefone ou email já cadastrado!');
    } else {
        contatos.push(inputNome.value);
        telefones.push(inputTel.value);
        emails.push(inputEmail.value);

        const corpoDaTabela = document.querySelector('tbody');
        const novaLinha = corpoDaTabela.insertRow();

        let cellNome = novaLinha.insertCell(0);
        let cellTelefone = novaLinha.insertCell(1);
        let cellEmail = novaLinha.insertCell(2);

        cellNome.textContent = inputNome.value;
        cellTelefone.textContent = inputTel.value;
        cellEmail.textContent = inputEmail.value;

        // Limpar os campos após adicionar
        inputNome.value = '';
        inputTel.value = '';
        inputEmail.value = '';
    }
}
