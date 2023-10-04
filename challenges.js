// const numbers = [1,2, 3, 3, 2, 6, 8, 1, 3, 5 ]

// const max = numbers.reduce(callback, -Infinity)

// function callback(accumulator, value){
//     if(accumulator > value){
//         return accumulator
//     }else{
//        return value
//     }
// }

// console.log(max)

// const store = [

//     { product: 'TV',
//       price: 26,
//       quantity: 10
//     },
//     { product: 'Pot',
//       price: 34,
//       quantity: 7
//     },
//     { product: 'Laptop',
//       price: 43,
//       quantity: 20
//     }
// ]

// // const totalValue = store.reduce((acc, item) => 
// // acc + item.price * item.quantity, 0)
// // console.log(totalValue)

//     const lessThen = store.filter(value => value.price < 35
//     )

//     console.log(lessThen)


// function sum(num1, num2 = 2, num3 = 3){
//     return num1 +num2 +num3
// }

// let values =[1, 5]
// let total = sum(4, ...values)
// console.log(total)

const a = {x: 1}
const b = {x: 1}

console.log(a === b)