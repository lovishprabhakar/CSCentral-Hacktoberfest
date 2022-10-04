const copy = document.querySelector("#copy_joke");


const jokeContainer = document.getElementById("joke");


const btn = document.getElementById("btn");
const url = "https://icanhazdadjoke.com/slack";

let getJoke = () => {
  jokeContainer.classList.remove("fade");


  fetch(url)
    .then((response) => response.json())
    .then((user) => {
      let j = user.attachments[0].text;
      // console.log(user.attachments[0].text);
      jokeContainer.textContent = j;
      jokeContainer.classList.add("fade");
    });
}

btn.addEventListener("click", getJoke);
getJoke();

// Fade in 
setTimeout(function () {
  jokeContainer.innerHTML = "Get Some Joke"
  jokeContainer.style.opacity = 1;
}, 500);



toggle.addEventListener("click", () => {
  body.classList.toggle("dark")
    ? (toggle.firstElementChild.className = "far fa-sun")
    : (toggle.firstElementChild.className = "far fa-moon");
});


copy.addEventListener("click", () => {
  const text = jokeContainer.textContent;
  navigator.clipboard.writeText(text);
  copy.querySelector("i").className = "fa-solid fa-check"
  setTimeout(function () {
    copy.querySelector("i").className = "fa-regular fa-copy"
  }, 1000);
});