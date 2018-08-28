const printDom = (stringToPrint, divID) => {
    const selectedDiv = document.getElementById(divID);
    selectedDiv.innerHTML += `<h3>${stringToPrint}</h3>`;
};

console.log('I am linked');

const cats = ['fluffy', 'spike', 'killer'];

console.log('First cat:',cats[0]);

const favoriteAnimal = 'cow';

const favoriteAnimalArray= favoriteAnimal.split('');

console.log('fav animal array:', favoriteAnimalArray);

const numArray = [1,2,3,4,5];

const newNum = numArray.join('');

console.log('numArray:',numArray);
console.log('newNum:',newNum);

//write func that takes a word and tells us if it is a palindrome

const palChecker = (word) => {
    //yes if palindrome
    //no if not
    let newWord = word.split('');
    newWord = newWord.reverse();
    newWord = newWord.join('');
    if (newWord === word) {
        console.log(`${word} is a Palindrome`);
    } else {
        console.log(`${word} is NOT a Palindrome`);
    }

};

palChecker('mom');
palChecker('monkeyButt');
palChecker('racecar');