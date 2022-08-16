let numberOne = +prompt('Enter number one, please');
let symbol = prompt('Choose simbol +-*/');
let numberTwo = +prompt('Enter number two, please');
let noteOne = 'Your result is RESULT';
let sum = +(numberOne + numberTwo);
let minus = +(numberOne - numberTwo);
let asterisk = +(numberOne * numberTwo);
let division = +(numberOne / numberTwo);

if (symbol === '+') {
    alert(noteOne + '' + '=' + '' + sum);
    console.log(sum);
}
else if (symbol === '-') {
    alert(noteOne + '' + '=' + '' + minus);
    console.log(minus)
}

else if (symbol === '*') {
    alert(noteOne + '' + '=' + '' + asterisk);
    console.log(asterisk)
}
else if (symbol === '/') {
    alert(noteOne + '' + '=' + '' + division);
    console.log(division)
}
else {
    if (symbol != sum && minus && asterisk && division) {
        (alert('This operation is not exist'))
    }
}
