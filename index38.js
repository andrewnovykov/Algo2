function print(numbers) {

    console.log('dfgfg');

    numbers.forEach(function(number){
        console.log(number)
    })

    console.log('dfgfg');

    numbers.forEach(function (firstNumber) {
        numbers.forEach(function (secondNumber) {
            console.log(firstNumber + secondNumber)
        })
    })


}

print([1,2,3,4,5])

//O(n + n^2)