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
	const minLen = Math.min(x.length, y.length);
	const maxLen = Math.max(x.length, y.length);
	const longest = x.length === maxLen ? x : y; // OBTENIR LE PLUS LONG DES DEUX
	//COMPARER LES INDICES COMMUNS A PARTIR DU PLUS GRAND EXPOSANT
	let i_ = 0;
	for (i_ = 0; i_ < minLen; i_++) {
		const currX = Number(x[i_]);
		const currY = Number(y[i_]);
		if (currX < currY) return 1;
		else if (currX === currY) continue;
		else return -1;
	}
	//CAS OU UN NOMBRE EST PLUS LONG QUE L'AUTRE
	//LE PLUS LONG VIENT APRES LE PLUS COURT SI SON CHIFFRE
	//QUI SUIT LA PLUS PETITE LONGUEUR EST PLUS GRAND QUE
	//LE PREMIER CHIFFRE DU PLUS PETIT
	//EXEMPLE [300, 3001] => [300, 3001] car 1 < 3
	//PAR CONTRE [300, 3004] => [3004, 300] car 4 > 3
	if (minLen != maxLen) {
		if (x == longest) {
			return x[i_] > y[0] ? -1 : 1;
		} else {
			return y[i_] > x[0] ? 1 : -1;
		}
	}
	return 0;
}

let arr1 = ["54", "546", "548", "60"],
	arr2 = ["3", "30", "34", "5", "9"];

console.log(arr1, solution(arr1.length, arr1));
console.log(arr2, solution(arr2.length, arr2));
