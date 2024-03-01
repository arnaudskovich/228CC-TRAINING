/**
 *
 * @param {Number} n
 * @param {Number} c
 * @param {Number} m
 */
function chocolateCount(n, c, m) {
	let count = Math.floor(n / c);
	if (m > count) return count;
	count += 1 + (m - count) / (-m + 1);
	return Math.floor(count);
}
