module.exports = function(arr, str) {
  if (!Array.isArray(arr)) throw new TypeError('第一个参数必须为数组')
  let index = -1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === str) {
      index = i
      break
    }
  }
  return index
}
