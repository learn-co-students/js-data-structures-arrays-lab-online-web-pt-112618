const drivers = ['Milo', 'Otis', 'Garfield'];
const driversCopy = drivers.slice()

function destructivelyAppendDriver() {
  let driver = 'Ralph';
  return drivers.push(driver);
}

function destructivelyPrependDriver() {
  let driver = 'Bob';
  return drivers.unshift(driver);
}

function destructivelyRemoveLastDriver() {
  return drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  return drivers.shift();
}

function appendDriver() {
  const driversCopy = drivers.slice();
  driversCopy.push('Broom');
  return driversCopy;
}

function prependDriver() {
  const driversCopy = drivers.slice();
  driversCopy.unshift('Arnold');
  return driversCopy;
}

function removeLastDriver() {
  const driversCopy = drivers.slice();
  driversCopy.pop();
  return driversCopy;
}

function removeFirstDriver() {
  const driversCopy = drivers.slice();
  driversCopy.shift();
  return driversCopy;
}
