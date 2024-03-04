/**
 *
 * @param {Number} n
 * @param {Number[]} arr
 */
function swapElements(n, arr) {
	for (let i = 0; i < n - 2; i++) {
		const temp = arr[i];
		arr[i] = arr[i + 2];
		arr[i + 2] = temp;
	}
	console.log(arr.join(" "));
}
