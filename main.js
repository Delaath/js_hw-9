function logItems(array) {
    for (let i = 0; i < array.length; i += 1) {
        console.log(`${i + 1} - ${array[i]}`);
    }
}

const items = ['tomato', 'poly', 'ajax'];
logItems(items);



function calculateEngravingPrice(message, pricePerWord) {
    const words = message.split(' ');
    return words.length * pricePerWord;
}

const message = 'Happy Birthday!';
const pricePerWord = 10;

const totalPrice = calculateEngravingPrice(message, pricePerWord);
console.log(totalPrice);


function findLongestWord(string) {
    const words = string.split(' ');

    let longestWord = '';

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

const sentence = 'The quick brown fox jumps over the lazy dog';
const longest = findLongestWord(sentence);
console.log(longest);


function formatString(string) {
    if (string.length < + 40) {
        return string;
    } else {
        return string.slice(0, 40) + '...';
    }
}

const stringCheck = 'i love JavaScript 198273198273198273109273198273198723';
console.log(formatString(stringCheck));

function checkForSpam(message) {
    const lowerCaseMessage = message.toLowerCase();
    return lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale');
}

const messageSpam = 'hello i am a spam!';
console.log(checkForSpam(messageSpam));

let numbers = [];
let input;

// while (true) {
//     input = prompt("Введіть число:");

//     if (input === null) {
//         break;
//     }

//     if (!isNaN(input) && input.trim() !== "") {
//         numbers.push(Number(input));
//     } else {
//         alert("Будь ласка, введіть число!");
//     }
// }

if (numbers.length > 0) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    console.log(`Загальна сума чисел дорівнює ${total}`);
} else {
    console.log("Ви не ввели жодного числа.");
}

const logins = ['dog2342', 'maxim343', 'katya1231', 'oleg'];
let userLogin = prompt('Введіть ваш новий логін');

function isLoginValid(login) {
    if (login.length < 4 || login.length > 16 || login.trim() === "") {
        return false;
    }
    return true;
}

function isLoginUnique(allLogins, login) {
    return !allLogins.includes(login);
}

function addLogin(allLogins, login) {
    if (!isLoginValid(login)) {
        return 'Помилка! Логін повинен бути від 4 до 16 символів';
    }
    if (!isLoginUnique(allLogins, login)) {
        return 'Такий логін уже використовується!';
    }
    allLogins.push(login);
    return 'Логін успішно додано!';
}

console.log(addLogin(logins, userLogin));
console.log(logins);
