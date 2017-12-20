const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name){
  kittens.push('Ralph')
  return kittens
}
function destructivelyPrependKitten(name){
  kittens.unshift('Bob')
  return kittens
}
function destructivelyRemoveLastKitten(name){
  kittens.pop('Garfield')
  return kittens
}
function destructivelyRemoveFirstKitten(name){
  kittens.shift('Milo')
  return kittens
}
function appendKitten(name){
  kittens = [...kittens, 'Broom']
  return kittens
}
function prependKitten(name){
  kittens = ['Broom', ...name]
  return kittens
}
function removeLastKitten(){
  kittens.pop()
  return kittens
}
function removeFirstKitten(){
  kittens.unshift()
  return kittens
}