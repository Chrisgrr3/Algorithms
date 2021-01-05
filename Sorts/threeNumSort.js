function threeNumberSort(array, order) {
    let firstI = 0;
    let temp;
    let lastI = array.length - 1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == order[0]) {
            temp = array[firstI];
            array[firstI] = array[i];
            array[i] = temp;
            firstI++;
        }
    }
    for (let j = array.length - 1; j >= 0; j--) {
        if (array[j] == order[2]) {
            temp = array[lastI];
            array[lastI] = array[j];
            array[j] = temp;
            lastI--;
        }
    }
    return array;
}