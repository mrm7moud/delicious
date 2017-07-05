function autocomplete(input, latInput, lngInput) {
	if(!input) return;
	const dropDown = new google.maps.places.Autocomplete(input);
	dropDown.addListener('place_changed', () => {
		const place = dropDown.getPlace();
		latInput.value = place.geometry.location.lat();
		lngInput.value = place.geometry.location.lng();
	});
	// if someone hits enter on the address field, don't submit the form
	input.on('keydown', (e) => {
		if(e.keyCode === 13) e.preventDefault();
	});
}

export default autocomplete;