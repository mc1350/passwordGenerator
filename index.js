let arrayOne = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "="]



let unoEl = document.getElementById("uno");
let dosEl = document.getElementById("dos");
let tresEl = document.getElementById("tres");
let cuatroEl = document.getElementById("cuatro");
//let answer = " "



function generate(aPass) {
  aPass.textContent = " "
  for (let i = 0; i < 10; i++) {
    let randomIndex = Math.floor( Math.random() *75)
    aPass.textContent += arrayOne[randomIndex]}
};
/*
function create() {
  for (let i = 0; i < 10; i++) {
    let randomIndex = Math.floor( Math.random() *75)
    dosEl.textContent += arrayOne[randomIndex]}
};

function make() {
  for (let i = 0; i < 10; i++) {
    let randomIndex = Math.floor( Math.random() *75)
    tresEl.textContent += arrayOne[randomIndex]}
};

function write() {
  for (let i = 0; i < 10; i++) {
    let randomIndex = Math.floor( Math.random() *75)
    cuatroEl.textContent += arrayOne[randomIndex]}
};

function clear(){
  answer = " "
  unoEl.textContent = " "
  dosEl.textContent = " "
  tresEl.textContent = " "
  cuatroEl.textContent = " "
}
*/
function test() {
  generate(unoEl)
  generate(dosEl)
  generate(tresEl)
  generate(cuatroEl)
  /*if (answer === " ") {
    generate()
    create()
    make()
    write()}
  else { clear()} */
};


