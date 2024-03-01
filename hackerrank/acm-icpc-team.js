/**
 * @param {string[]} topic
 */

function stats(topic) {
	const n = topic.length,
		m = topic[0].length;
	let countMax = 0,
		teams = 0;
	for (let i = 0; i < n - 1; i++) {
		const firstParticipant = topic[i];
		for (let k = i + 1; k < n; k++) {
			const secondParticipant = topic[k];
			let newCountMax = 0;
			for (let j = 0; j < m; j++) {
				if (secondParticipant[j] != "0" || firstParticipant[j] != "0") newCountMax += 1;
			}
			if (newCountMax > countMax) {
				countMax = newCountMax;
				teams = 1;
			}
			if (countMax == newCountMax) teams += 1;
		}
	}
	return [countMax, teams];
}
