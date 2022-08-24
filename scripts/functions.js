const increaseKeys = (array) => {
    let firstKey = Object.keys(array)[0], lastKey = Object.keys(array).pop()
    for (let index = lastKey; index => firstKey; index--){
        console.log(array)
        array[parseInt(index)+1] = array[index]
        delete array[index]
    }
    return array
}

const decreaseKeys = (array) => {
    let firstKey = Object.keys(array)[0], lastKey = Object.keys(array).pop()
    for (let index = firstKey; index <= lastKey; index++){
        array[parseInt(index)-1] = array[index]
        delete array[index]
    }
    return array
}