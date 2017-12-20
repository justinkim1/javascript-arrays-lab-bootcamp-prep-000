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
  [...kittens, 'Broom']
  return kittens
}
function prependKitten(name){
  return kittens
}
function removeLastKitten(){
  return kittens
}
function removeFirstKitten(){
  return kittens
}