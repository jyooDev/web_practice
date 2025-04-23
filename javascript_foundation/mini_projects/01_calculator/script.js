function num(x){
    document.getElementById('display').value += x;
    displayLog();
}

function dot(){
    document.getElementById('display').value += '.';
    displayLog();
}

function operators(op){
    document.getElementById('display').value += ' ' + op + ' ';
    displayLog();
}

function calculate(){
    let expression = document.getElementById('display').value.replace('X', "*");
    let result = eval(expression);
    document.getElementById('display').value = result;
    displayLog();
}

function reset(){
    console.log("RESET");
    document.getElementById('display').value = '';
}

function displayLog(){
    console.log(document.getElementById('display').value);
}