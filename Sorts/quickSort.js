function quickSort(array) {
    function quickSortHelper(array, startIdx, endIdx) {
        if (startIdx >= endIdx) {
            return;
        }
        let pivotIdx = startIdx;
        let leftIdx = startIdx + 1;
        let temp;
        let rightIdx = endIdx;
        while (rightIdx >= leftIdx) {
            if (array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]) {
                temp = array[leftIdx];
                array[leftIdx] = array[rightIdx];
                array[rightIdx] = temp;
            }
            if (array[leftIdx] <= array[pivotIdx]) {
                leftIdx++;
            }
            if (array[rightIdx] >= array[pivotIdx]) {
                rightIdx--;
            }
        }
        temp = array[pivotIdx];
        array[pivotIdx] = array[rightIdx];
        array[rightIdx] = temp;
        let leftSubSmaller = rightIdx - 1 - startIdx < endIdx - (rightIdx + 1);
        if (leftSubSmaller) {
            quickSortHelper(array, startIdx, rightIdx - 1);
            quickSortHelper(array, rightIdx + 1, endIdx);
        }
        else {
            quickSortHelper(array, rightIdx + 1, endIdx);
            quickSortHelper(array, startIdx, rightIdx - 1);
        }
    }
    quickSortHelper(array, 0, array.length - 1);
    return array;
}