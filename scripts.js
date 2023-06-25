const btn = document.getElementById('btn')
const text = document.getElementById('text')

// Integrate API
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"

const getJoke = async () => {
    await fetch(url).then(response => response.json()).then(item => text.textContent = item.joke).then(show => console.log(show))
}

btn.addEventListener("click", getJoke);