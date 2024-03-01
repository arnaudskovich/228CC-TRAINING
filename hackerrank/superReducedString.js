/**
 *
 * @param {string} s
 */
function resizeMax(s) {
	const r = /([a-z])\1/g;
	while (r.test(s)) {
		s = s.replace(r, "");
	}
	return s.length > 0 ? s : "Empty String";
}
