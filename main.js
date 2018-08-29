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
    let newWord = word.split('');
    newWord = newWord.reverse();
    newWord = newWord.join('');
    if (newWord === word) {                     //yes if palindrome
        console.log(`${word} is a Palindrome`);
    } else {                                    //no if not
        console.log(`${word} is NOT a Palindrome`);
    }

};

palChecker('mom');
palChecker('monkeyButt');
palChecker('racecar');

let animals = ['cat', 'dog', 'bird', 'penguin'];

// console.log('Animals array:', animals);

animals.pop();

// console.log('Animals array:', animals);

animals.shift();

// console.log('Animals array:', animals);

animals.push('frog');

// console.log('Animals array:', animals);

animals.unshift('bats');

// console.log('Animals array:', animals);


//FOR LOOPS
//What is starting value = 
//what is stopping value = name.length
//How do you increment = +1

for (let i = 0; i<animals.length; i++ ) {
    console.log('Animals:', animals[i]);
}