//Le plus simple des objets
const person = { name: 'John Doe' };
//affichera 'John Doe'
console.log(person.name);

person.name = 'John Connor';
//affichera 'John Connor'
console.log(person.name);

class Rectangle {
  constructor(hauteur, largeur) {
    this.hauteur = hauteur;
    this.largeur = largeur;
  }

  get area() {
    return this.calcArea();
  }

  calcArea() {
    return this.largeur * this.hauteur;
  }
}

const rectangle = new Rectangle(10, 20);
//affichera 200
rectangle.area;
//affichera 200
rectangle.calcArea();

class Animal {
  constructor(nom) {
    this.nom = nom;
  }

  parle() {
    console.log(`${this.nom} fait du bruit.`);
  }
}

class Chat extends Animal {
  constructor(nom) {
    // appelle le constructeur parent avec le paramètre
    super(nom);
  }
  parle() {
    console.log(`${this.nom} miaule.`);
  }
}

const pluto = new Animal('PLuto');
//affichera "Pluto fait du bruit"
pluto.parle();

const felix = new Chat('Félix');
//affichera "Félix miaule"
felix.parle();
