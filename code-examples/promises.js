//renvoie YOU WIN si le résultat du random est superieur à 0.5
//sinon la promesse est rejetée
const maRandomPromesse = new Promise((resolve, reject) => {
  // réaliser une tâche asynchrone et appeler :
  const randomNumber = Math.random();
  if (randomNumber > 0.5) {
    resolve({ message: 'YOU WIN!!!', res }); // si la promesse est tenue
  } else {
    reject({ message: 'YOU LOSE...', res }); // si elle est rompue
  }
});

const res = maRandomPromesse()
  .then(res => console.log('o/', res))
  .catch(res => console.log(':(', res))
  .finally(() => console.log('thanks for playing'));
