var array = [];
var newArray = [];

function filter(array, than) {
    if (array.length === 0){
        throw new Error('пустой массив')
    }
    for (let j = 0; j < array.length; j++) {
        if (!isFinite(array[j])){
            throw new Error('элемент массива должен быть числом')
        } else if (array[j] < 0){
            throw new Error('элемент массива должен быть положительным')
        }
        if (array[j] > than) {
             newArray.push(array[j])
        }
    }return newArray
}

try{
    var result = filter(array, 35);
    console.log(result);
} catch (e) {
    console.log(e.message)
}



