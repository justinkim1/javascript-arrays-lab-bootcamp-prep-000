const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(){
  kittens.push('Ralph')
  return kittens
}
function destructivelyPrependKitten(){
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
function appendKitten(){
  appendKitten = [...kittens, 'Broom']
  return appendKitten
}
function prependKitten(){
  prependKitten = ['Arnold',...kittens]
  return prependKitten
}
function removeLastKitten(){
  removeLastKitten = kittens.push('Garfield')
  return removeLastKitten
}
function removeFirstKitten(){
  removeFirstKitten = kittens.unshift('Milo')
  return removeFirstKitten
}