let catImage = undefined;
window.onload = () => {
  catImage = document.getElementById('catImage');
  getRandomCat();
};
function getRandomCat() {
  fetch('/cats/random')
    .then(response => {
      return response.json();
    })
    .then(json => {
      // Work with JSON data here
      if (catImage) {
        catImage.src = json.urlRandom;
        catImage.style.width = '400px';
      }
    });
}
