function calculateDateDifference() {
    let chosenDate = document.getElementById('chosenDate').value;
    // Verifica se o campo está vazio ou contém apenas espaços em branco
    if (chosenDate.trim() === "") {
        alert("Por favor, digite uma data.");
        return;
    }

    let dateConvert = moment(chosenDate, "DD/MM/YYYY"); // Variável que vai converter a data digitada (string) para o formato de data utilizando o Moment.js
    // Verifica se a data digitada é inválida
    if (!dateConvert.isValid()) {
        alert("Data inválida. Por favor, digite uma data válida no formato DD/MM/YYYY.");
        return;
    }

    let today = moment(); // Moment utilizado apenas para pegar o dia atual
    let dateDiff = today.diff(dateConvert); // Correção

    let choice = document.getElementById('choice').value;
    let resultElement = document.getElementById('result');

    // Abaixo criei variáveis para cada possível escolha (segundos, minutos, horas ou dias), cada uma dentro de sua própria condicional
    if (choice === "1") {
        let distSeconds = Math.abs(Math.round(dateDiff / 1000));
        resultElement.innerHTML = "Distância de " + distSeconds + " segundos, entre as duas datas.";
    } else if (choice === "2") {
        let distMinutes = Math.abs(Math.round(dateDiff / 1000 / 60));
        resultElement.innerHTML = "Distância de " + distMinutes + " minutos, entre as duas datas.";
    } else if (choice === "3") {
        let distHours = Math.abs(Math.round(dateDiff / 1000 / 3600));
        resultElement.innerHTML = "Distância de " + distHours + " horas, entre as duas datas.";
    } else if (choice === "4") {
        let distDays = Math.abs(Math.round(dateDiff / 1000 / 3600 / 24));
        resultElement.innerHTML = "Distância de " + distDays + " dias, entre as duas datas.";
    } else {
        resultElement.innerHTML = "Digite uma opção válida.";
    }
}

// Abaixo criei uma função para inserir a '/', automaticamente quando o usuario digitar
function formatInputDate(event) {
    let input = event.target;
    let inputValue = input.value;

    // Remove caracteres não numéricos da entrada
    let formattedValue = inputValue.replace(/\D/g, '');

    // Formata a entrada com as barras (/) na posição correta
    if (formattedValue.length > 2) {
      formattedValue = formattedValue.slice(0, 2) + '/' + formattedValue.slice(2);
    }
    if (formattedValue.length > 5) {
      formattedValue = formattedValue.slice(0, 5) + '/' + formattedValue.slice(5, 9);
    }

    // Atualiza o valor do campo de texto com a entrada formatada
    input.value = formattedValue;
  }