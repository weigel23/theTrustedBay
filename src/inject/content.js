const numberOfTrs = $('#searchResult > tbody > tr').length;
let numberOfTrsHidden = 0;

$('#searchResult > tbody > tr').each((index, el) => {
	const $tr = $(el);
	let trusted = false;

	$('img' , el).each((indexImg, elImg) => {
		const $img = $(elImg);

		if ($img[0].alt === 'Trusted' || $img[0].alt === 'VIP') {
			trusted = true;
		}
	});

	if (!trusted && index < numberOfTrs) {
		$tr.hide();
		numberOfTrsHidden++;
	}
});

console.log(`Removed ${numberOfTrsHidden} untrustworthy torrents.`);