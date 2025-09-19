
const form = document.getElementById("form");
const historyList = document.getElementById("historyList");

//Creating the user input box

const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Type lyrics here';
input.style.width = '300px';
input.style.height = '25px';
input.style.fontSize = '18px';
input.style.marginTop = '40px';
form.appendChild(input);

//Create button

const button = document.createElement('button');
button.style.cursor = 'pointer';
button.style.fontSize = '18px';
button.textContent = "Enter";
form.appendChild(button);

//Display history list && add rhyme button

button.addEventListener('click', function handleClick(e){
    e.preventDefault();
    const userText = input.value.trim();
if (userText !== '' ){
    const listItem = document.createElement('li');
    listItem.textContent = userText;
    historyList.appendChild(listItem);
    input.value = '';

    const rhymeButton = document.createElement('button');
    rhymeButton.textContent = 'Rhyme';
    rhymeButton.id = 'rhymeButtonStyle';
    rhymeButton.classList.add('rhyme-button-style');
    document.querySelector('.homepage').appendChild(rhymeButton);

    rhymeButton.addEventListener('click', function handleClick(e) {
        e.preventDefault();
        fetch(`https://api.api-ninjas.com/v1/rhyme?word=${userText}`, {
            method: 'GET',
            headers: {
                'X-Api-Key': 'SyyRloP1rR4F3Ke5sBEXDw==gm9quogQtyLerbJ4'
            }
        })

    });




    
}


});






