const form = document.querySelector('form');
const corpoTabela = document.querySelector('tbody');
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputAgendacontato = document.getElementById('nome-contato');
    const inputNumcontato = document.getElementById('numero-contato');

    let linha = '<tr>';
    linha += `<td>${inputAgendacontato.value}</td>`;
    linha += `<td>${inputNumcontato.value}</td>`;
    linha += '</tr>';

    linhas += linha;
    corpoTabela.insertAdjacentHTML('beforeend', linha);

    inputAgendacontato.value = '';
    inputNumcontato.value = '';
});
