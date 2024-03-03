/**
 *
 * @param {Number} n
 * @param {String[]} arr
 */
function solution(n, arr) {
	arr.sort(xOfferLessIncreaseThanY);
	return arr.join("");
}

/**
 *
 * @param {String} x
 * @param {String} y
 */
function xOfferLessIncreaseThanY(x, y) {
	const x_y = x + y;
	const y_x = y + x;
	let l = 0;
	while (l < x_y.length) {
		const curr1 = Number(x_y[l]),
			curr2 = Number(y_x[l]);

		if (curr1 < curr2) return 1;
		if (curr1 > curr2) return -1;

		l++;
	}
	return 0;
}

let arr1 = ["54", "546", "548", "60"],
	arr2 = ["3", "30", "34", "5", "9"];

console.log(arr1, solution(arr1.length, arr1));
console.log(arr2, solution(arr2.length, arr2));
