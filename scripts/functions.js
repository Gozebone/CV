const increaseKeys = (array) => {
    let lastKey = Object.keys(array).pop()
    for (let index = lastKey; index > lastKey - 5; index--){
        array[index+1] = array[index]
        delete array[index]
    }
    return array
}

const decreaseKeys = (array) => {
    let firstKey = Object.keys(array).pop()
    for (let index = firstKey; index < lastKey + 5; index++){
        array[index-1] = array[index]
        delete array[index]
    }
    return array
}