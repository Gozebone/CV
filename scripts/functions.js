const increaseKeys = (array) => {
    let firstKey = parseInt(Object.keys(array)[0]), lastKey = parseInt(Object.keys(array).pop())
    for (let index = lastKey; index >= firstKey; index--){
        array[index+1] = array[index]
        delete array[index]
    }

    return array
}

const decreaseKeys = (array) => {
    let firstKey = parseInt(Object.keys(array)[0]), lastKey = parseInt(Object.keys(array).pop())
    if (lastKey === 4) { // TODO make scrollable until 1 planet is visible
        return array
    }
    for (let index = firstKey; index <= lastKey; index++){
        array[index-1] = array[index]
        delete array[index]
    }
    return array
}