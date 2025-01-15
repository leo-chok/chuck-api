document.querySelector('#avatar').addEventListener('click', () => {
fetch("https://api.chucknorris.io/jokes/random")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.joke)
    document.querySelector('#joke').textContent = data.value;
    document.querySelector('#joke').className += ' p-4 ';
  });
})


