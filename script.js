// script.js
const jokeButton = document.getElementById('joke-button');
const jokeDisplay = document.getElementById('joke-display');

jokeButton.addEventListener('click', () => {
  jokeDisplay.innerText = 'Loading joke... 😂'; // Loading animation
  fetchJoke();
});

async function fetchJoke() {
  try {
    const response = await fetch('https://medium.com/@khushi1399gupta/9-common-mistakes-made-by-javascript-programmers-a3189ee4bdfa ', {
      headers: { 'X-Api-Key': 'YOUR_API_KEY' } // Replace with your API key
    });
    
    if (!response.ok) throw new Error('Failed to fetch joke');
    
    const data = await response.json();
    jokeDisplay.innerText = data[0].joke; // Display the joke
  } catch (error) {
    jokeDisplay.innerText = 'Oops! Could not load a joke. Try again later! 😂';
    console.error(error);
  }
}
