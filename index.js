// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name)
  return drivers
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
  return drivers
}

function destructivelyRemoveLastDriver(name) {
  drivers.pop()
  return drivers
}

function destructivelyRemoveFirstDriver(name) {
  drivers.shift()
  return drivers
}

function appendDriver(name) {
  const newDriver = [...drivers, name]
  //equal to let newDriver = drivers.slice()
  //newDriver.push(name)
  return newDriver
}

function prependDriver(name) {
  const newDriver = drivers.slice()
  newDriver.splice(0,0,name)
  //newDriver.unshift(name)
  return newDriver
}

function removeLastDriver() {
  const newDriver = drivers.slice()
  newDriver.splice(-1,1)
  //newDriver.pop()
  return newDriver
}

function removeFirstDriver() {
  const newDriver = drivers.slice()
  newDriver.splice(0,1)
  //newDriver.shift()
  return newDriver
}
