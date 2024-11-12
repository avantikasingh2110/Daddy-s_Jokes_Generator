const jokeButton = document.getElementById('joke-button');
const jokeDisplay = document.getElementById('joke-display');

jokeButton.addEventListener('click', () => {
  let loadingMsg = document.createElement("p");
  jokeDisplay.innerHTML = "";
  loadingMsg.innerText = 'Loading joke... 😂';
  jokeDisplay.appendChild(loadingMsg);
  // jokeDisplay.innerText = 'Loading joke... 😂'; 
  fetchJoke();
});

async function fetchJoke() {
  try {
    const response = await fetch(`https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,sexist,explicit&type=single`);
    
    if (!response.ok) throw new Error('Failed to fetch joke');
    
    const data = await response.json();
    console.log(data);
    let p = document.createElement("p");
    p.innerText = data.joke;
    jokeDisplay.innerHTML = "";
    jokeDisplay.appendChild(p); 
    
  } catch (error) {
    jokeDisplay.innerText = 'Oops! Could not load a joke. Try again later! 😂';
    console.error(error);
  }
}
