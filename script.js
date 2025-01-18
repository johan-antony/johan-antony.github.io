const question = document.getElementById('question');
const buttons = document.getElementById('buttons');
const response = document.getElementById('response');

// Step 1: Initial buttons


// Event listeners for the first question
yesButton.addEventListener('click', handleYes);
noButton.addEventListener('click', handleNo);

function handleYes() {
    question.textContent = "Do you want me to decide what we’ll do?";
    buttons.innerHTML = '';
    const decideYesButton = document.createElement('button');
    const decideNoButton = document.createElement('button');
    decideYesButton.textContent = "Yes 💡";
    decideNoButton.textContent = "No ❌";
    buttons.appendChild(decideYesButton);
    buttons.appendChild(decideNoButton);

    // Event listeners for the second question
    decideYesButton.addEventListener('click', handleDecideYes);
    decideNoButton.addEventListener('click', handleDecideNo);
}

function handleNo() {
    response.textContent = "Heart broken. No more JK till 76. 💔";
    buttons.innerHTML = ''; // Remove buttons after no
}

function handleDecideYes() {
    question.textContent = "What kind of food should we make?";
    buttons.innerHTML = '';

    const cuisines = ['Italian 🍝', 'Mexican 🌮', 'English 🥧', 'Chinese 🥡', 'Indian 🍛'];
    cuisines.forEach((cuisine) => {
        const button = document.createElement('button');
        button.textContent = cuisine;
        buttons.appendChild(button);

        button.addEventListener('click', () => {
            response.textContent = `Making  ${cuisine.split(' ')[0]} food! 👨‍🍳`;
        buttons.innerHTML = ''; // Clear buttons after selection
                showCelebrationMessage(); // Show celebration message
            });
        });
}

function handleDecideNo() {
    response.textContent = "Wrong answer Kish!";
    buttons.innerHTML = ''; // Clear buttons
}
    
function showCelebrationMessage() {
    // Create a massive text message
    const celebrationMessage = document.createElement('div');
    celebrationMessage.innerHTML = `
        <h1 style="font-size: 50px; color: red; text-align: center;">JK Valentine's Day 2025</h1>
        <h2 style="text-align: center; font-size: 100px; color: red;">❤️</h2>
    `;
    document.body.appendChild(celebrationMessage);
}