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
  appendKitten = [...kittens, 'Broom']
  return appendKitten
}
function prependKitten(){
  prependKitten = ['Arnold',...kittens]
  return prependKitten
}
function removeLastKitten(){
  removeLastKitten = kittens.pop('Garfield')
  return removeLastKitten
}
function removeFirstKitten(){
  removeFirstKitten = kittens.shift('Milo')
  return removeFirstKitten
}