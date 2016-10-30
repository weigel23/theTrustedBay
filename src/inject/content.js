// - 1 because the navigation is a tr as well
const numberOfSearchResults = $('#searchResult > tbody > tr').length - 1;
let numberOfSearchResultsHidden = 0;

$('#searchResult > tbody > tr').each((index, el) => {
	const $tr = $(el);
	let trusted = false;

	$('img' , el).each((indexImg, elImg) => {
		const $img = $(elImg);

		if ($img[0].alt === 'Trusted' || $img[0].alt === 'VIP') {
			trusted = true;
		}
	});

	if (!trusted && index < numberOfSearchResults) {
		$tr.hide();
		numberOfSearchResultsHidden++;
	}
});

console.log(`Removed ${numberOfSearchResultsHidden} untrustworthy torrents.`);