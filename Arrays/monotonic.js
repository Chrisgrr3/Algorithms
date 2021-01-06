function isMonotonic(array) {
	let increasing;
	let decreasing;
	for(let i = 0; i < array.length; i++) {
		if(array[i] < array[i+1]) {
			increasing = true;
		}
		if(array[i] > array[i+1]) {
			decreasing = true
		}
	}
	if (decreasing == true && increasing == true) {
		return false;
	} 
	else {
		return true;
	}
}