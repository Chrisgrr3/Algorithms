function spiralTraverse(array) {
    let startColumn = 0;
    let endColumn = array[0].length - 1;
    let startRow = 0;
    let endRow = array.length - 1;
    let result = [];
    if (array.length == 1) {
        return array[0];
    }
    while (startRow <= endRow && startColumn <= endColumn) {
        for (let i = startColumn; i <= endColumn; i++) {
            result.push(array[startRow][i]);
        }
        for (let j = startRow + 1; j <= endRow; j++) {
            result.push(array[j][endColumn]);
        }
        for (let k = endColumn - 1; k >= startColumn; k--) {
            if (startRow === endRow) {
                break;
            }
            result.push(array[endRow][k]);
        }
        for (let l = endRow - 1; l > startRow; l--) {
            if (startColumn === endColumn) {
                break;
            }
            result.push(array[l][startColumn]);
        }
        startRow++, endRow--; startColumn++; endColumn--;
    }
    return result;
}

let arr = [
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7],
]
console.log(arr[0][0]);