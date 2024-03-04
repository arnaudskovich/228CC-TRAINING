/**
 *
 * @param {Number[]} arr
 * @param {Number} d
 * @param {Number} n
 */

function rotateArr(arr, d, n) {
	const moved = arr.splice(0, d % n);
	arr.push(moved);
	console.log(arr);
}
