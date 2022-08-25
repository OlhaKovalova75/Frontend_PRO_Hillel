
const inputEmail = 'admin@test.io';
const inputPassword = 'admin1234';
const answerRight = 'Good job!';
const answerWrong = 'Email is wrong';

while (true) {
    const askedEmail = prompt('Enter your email');

    if (askedEmail == inputEmail) {
        alert(answerRight);
        console.log(answerRight);
        break;
    };

    if (askedEmail != inputEmail) {
        alert(answerWrong);
        console.log(answerWrong);
        continue;
    };
}
while (true) {

    const askedPassword = prompt('Enter your password');

    if (askedPassword == inputPassword) {
        alert(answerRight);
        break;
    };
    if (askedPassword != inputPassword) {
        alert(answerWrong);
        continue;
    }
}
