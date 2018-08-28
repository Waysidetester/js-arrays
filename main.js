const printDom = (stringToPrint, divID) => {
    const selectedDiv = document.getElementById(divID);
    selectedDiv.innerHTML += `<h3>${stringToPrint}</h3>`;
};

console.log('I am linked');