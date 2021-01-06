function moveToEnd(array, toMove) {
    let right = array.length - 1;
    let left = 0;
    while (left < right) {
        if (array[right] == toMove) {
            right--;
        }
        if (array[left] != toMove) {
            left++;
        }
        if (array[left] == toMove && array[right] != toMove) {
            let temp = array[left];
            array[left] = array[right];
            array[right] = temp;
            left++, right--;
        }
    }
    return array;
}