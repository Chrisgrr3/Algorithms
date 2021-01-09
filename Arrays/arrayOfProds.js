const arrayOfProds = array => {
    let leftRunningProd = 1;
    let rightRunningProd = 1;
    let arrayOfProducts = [];
    for(let i = 0; i < array.length; i++) {
        arrayOfProducts.push(leftRunningProd);
        leftRunningProd *= array[i];
    }
    for(let j = array.length - 1; j >= 0; j--) {
        arrayOfProducts[j] *= rightRunningProd;
        rightRunningProd *= array[j];
    }
    return arrayOfProducts;
}