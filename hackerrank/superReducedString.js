/**
 *
 * @param {string} s
 */
function resizeMax(s) {
	const r = /([a-z])\1/g,
		r_ = /([a-z])\1/;
	while (r_.test(s)) {
		s = s.replace(r, "");
	}
	return s.length > 0 ? s : "Empty String";
}
