let catImage = undefined
window.onload = () => {
  catImage = document.getElementById('catImage')
  getCat()
}
function getCat () {
  fetch('/cats')
    .then(response => {
      return response.json()
    })
    .then(json => {
      // Work with JSON data here
      if (catImage) {
        catImage.src = json.urlRandom
      }
    })
}
