const numbers = [1,2, 3, 3, 2, 6, 8, 1, 3, 5 ]

const nums = numbers.filter((value, index, arr) =>{
  return arr.indexOf(value) === index
})

console.log(nums)

