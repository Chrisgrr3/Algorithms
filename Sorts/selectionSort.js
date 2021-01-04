function selectionSort(array) {
    let temp;
    let minIndex;
    for (let i = 0; i < array.length; i++) {
        minIndex = i;
        for (j = i; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }
    return array;
}

console.log(selectionSort([6,7,3,2,4,2]));