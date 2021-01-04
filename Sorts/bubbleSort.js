var bubbleSort = array => {
    let isSorted = false;
    let temp;
    while(isSorted == false) {
        isSorted = true;
        for(let i = 0; i < array.length-1; i++) {
            if(array[i] > array[i+1]) {
                temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                isSorted = false;
            }
        }
    }
    return array;
}
