// Write your solution in this file!

let driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  let newObj = Object.assign({}, driver, {[key]: value})
  return newObj
}
