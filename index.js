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
function destructivelyRemoveLastKitten(){
  kittens.pop('Garfield')
  return kittens
}
function destructivelyRemoveFirstKitten(){
  kittens.shift('Milo')
  return kittens
}
function appendKitten(){
  var appendKitten = [...kittens, 'Broom'];
  return appendKitten
}
function prependKitten(){
  var prependKitten = ['Arnold',...kittens]
  return prependKitten
}
function removeLastKitten(){
  var removeLastKitten = kittens.slice('Garfield')
  return removeLastKitten
}
function removeFirstKitten(){
  var removeFirstKitten = kittens.shift('Milo')
  return removeFirstKitten
}