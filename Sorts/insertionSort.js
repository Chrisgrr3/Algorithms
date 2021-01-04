function insertionSort(array) {
    let temp;
    for (let i = 1; i < array.length; i++) {
        j = i;
        while (j > 0 && array[j] < array[j - 1]) {
            temp = array[j];
            array[j] = array[j - 1];
            array[j - 1] = temp;
            j--;
        }
    }
    return array;
}

console.log(insertionSort([6,7,3,2,4,2]));