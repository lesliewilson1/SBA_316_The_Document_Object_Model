
const form = document.getElementById("form");
const historyList = document.getElementById("historyList");
const userInputs = [];

//Creating the user input box

const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Type phrase here';
input.required = true;
input.minLength = 1;
input.maxLength = 1000;
input.pattern = "[A-Za-z0-9]+";
input.style.width = '300px';
input.style.height = '25px';
input.style.fontSize = '18px';
input.style.marginTop = '40px';
form.appendChild(input);

//Create and attach button

const button = document.createElement('button');
button.style.cursor = 'pointer';
button.style.fontSize = '18px';
button.textContent = "Enter";
form.appendChild(button); 



// Prevent additional clicks and duplicates

button.addEventListener('click', function handleClick(e){
    e.preventDefault();
    const userText = input.value.trim();
if (userText !== '' ){
    let duplicate = false;
    for (let i = 0; i < userInputs.length; i++) {
        if (userInputs[i] === userText) {
        duplicate = true;
    }
        
}
    if(duplicate) {
        alert("Same phrase entered!");

    }

    userInputs.push(userText);
    console.log(userInputs);

    const listItem = document.createElement('li');
    listItem.textContent = userText;
    historyList.appendChild(listItem);
    input.value = '';

}
});



// Add new rhyme button and prevent additional clicks
    const rhymeButton = document.createElement('button');
    rhymeButton.textContent = 'Rhyme';
    rhymeButton.id = 'rhymeButtonStyle';
    rhymeButton.classList.add('rhyme-button-style');
    document.querySelector('.homepage').appendChild(rhymeButton);
    console.log("Parent:", rhymeButton.parentNode);
    console.log("Previous Sibling:", rhymeButton.previousElementSibling);
    console.log("Window width:", window.innerWidth);
    
    rhymeButton.addEventListener('click', function handleClick(e) {
        e.preventDefault();
        alert("🔒For subscribers only🔒");

     let inputCount = 0;
        if (inputCount >= 100000){
            rhymeButton.disabled = false;
        }
}
);

//Clone (not sure what's going on here)

const template = document.getElementById('template');
const clone = template.content.cloneNode(true);
const listItem = clone.querySelector('.history-item');
listItem.textContent = userText;
historyList.appendChild(clone);





// Attempting to fetch API data
        // fetch(`https://api.api-ninjas.com/v1/rhyme?word=${userText}`, {
        //     method: 'GET',
        //     headers: {
        //         'X-Api-Key': 'SyyRloP1rR4F3Ke5sBEXDw==gm9quogQtyLerbJ4'
        //     }
        // })
        // .then(response => response.json())
        // .then(data => {
        //     console.log("Rhymes:", data);

        // })
        // .catch(error => {
        //     console.error("Error", error);
        // })










