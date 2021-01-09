const highestPeak = array => {
    let highestPeak = 0;
    let i = 1;
    while(i < array.length-1) {
        let isPeak = array[i-1] < array[i] && array[i] > array[i+1];
        if(!isPeak) {
            i++;
            continue;
        }
        else {
            let leftIndex = i - 2;
            while(array[leftIndex] < array[leftIndex + 1] && leftIndex >= 0) {
                leftIndex--;
            }
            let rightIndex = i+1;
            while(array[rightIndex] < array[rightIndex-1] && rightIndex < array.length) {
                rightIndex++;
            }
            let peakHeight = rightIndex - leftIndex - 1;
            if(peakHeight > highestPeak) {
                highestPeak = peakHeight;
            }
            i++;
        }
    }
    return highestPeak;
}
