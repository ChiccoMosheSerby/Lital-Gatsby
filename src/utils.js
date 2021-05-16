export function removeDups(arr) {
  let unique = {}
  arr.forEach(function (i) {
    if (!unique[i]) {
      unique[i] = true
    }
  })
  return Object.keys(unique)
}
