const firstDup = array => {
    for(value of array) {
        let absVal = Math.abs(value);
        if(array[absVal - 1] < 0) {
            return absVal;
        }
        array[absVal - 1] *=-1;
    }
    return -1;
}