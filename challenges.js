const numbers = [1,2, 3, 3, 2, 6, 8, 1, 3, 5 ]

const max = numbers.reduce(callback, -Infinity)

function callback(accumulator, value){
    if(accumulator > value){
        return accumulator
    }else{
       return value
    }
}

console.log(max)

