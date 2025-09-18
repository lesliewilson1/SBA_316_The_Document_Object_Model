
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
button.textContent = "Enter";
form.appendChild(button);

//Display history list

button.addEventListener('click', function handleClick(e){
    e.preventDefault();
    const userText = input.value.trim();
if (userText !== '' ){
    const listItem = document.createElement('li');
    listItem.textContent = userText;
    historyList.appendChild(listItem);
    input.value = '';
}

});






