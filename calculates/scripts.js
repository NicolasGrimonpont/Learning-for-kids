function calculates(operator) {

    var first = Math.floor(Math.random() * 10);
    var second = Math.floor(Math.random() * 10);
    var operator, result = '';

    if (operator === 'addition') {
        result = first + second;
        operator = '+';
    } else if (operator === 'soustraction') {
        result = first - second;
        operator = '-';
    } else if (operator === 'multiplication') {
        result = first * second;
        operator = 'x';
    } else if (operator === 'division') {
        result = first / second;
        operator = '/';
    }

    document.getElementById('first').innerHTML = first;
    document.getElementById('second').innerHTML = second;
    document.getElementById('result').innerHTML = '';
    document.getElementById('operator-mark').innerHTML = operator;

    setTimeout(function () {
        document.getElementById('result').innerHTML = result;
    }, 7000);
}

function initCalculates() {

    // Display response element
    document.getElementById('question').style.display = "none";
    document.getElementById('answer').style.display = "block";

    // Initialize calculates
    var self = this;

    calculates(self.dataset.operator);

    setInterval(function () {
        calculates(self.dataset.operator);
    }, 10000);
};

document.querySelectorAll('#question button').forEach(element => {
    element.onclick = initCalculates;
});