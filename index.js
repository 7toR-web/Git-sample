out1 = document.querySelector(`.out-1`)
console.log(out1);

document.querySelector(`.b-1`).addEventListener(`click`, () => {
  out1.classList.toggle("inPurple")
  console.log(123);
})

console.log(1);

const obj = {
  name: `Kostya`,
  age: 17,
  isMaried: false,
  family: {
    mom: true,
    dad:true,
    sister: true,
    brother: false
  },
  food: `sushi`
}

const clone = JSON.parse(JSON.stringify(obj))
console.log(obj)
console.log(clone)
console.log(obj == clone);



let calculator = {
  sum() {
    this.a + this.b
  },
  mul() {
    this.a * this.b
  },
  read() {
    this.a = prompt(`a?`, ``)
    this.b = prompt(`b?`, ``)
  }
}

calculator.read()
console.log(calculator.sum());
console.log(calculator.mul());