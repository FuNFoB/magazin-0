const cardwripper = document.querySelector('.cardinfof');
	const carddelite = document.querySelector('.kypit');

	window.addEventListener('click', function(event){

	if (event.target.hasAttribute('data-card')){
		const card = event.target.closest('.card');
		console.log(card);

		const info = {
			name: card.querySelector('.card_name').innerText,
			price: card.querySelector('.card_price').innerText,
		};
		console.log(info);

		const cardinfo = `<p class="tovar">${info.name}</p>
		<p class="tsen">${info.price}</p>`;

        cardwripper.insertAdjacentHTML('beforeend',cardinfo);
	}

	if (event.target.hasAttribute('data-card1')){
		const card1 = event.target.closest('.card1');
		console.log(card1);

		const info1 = {
			name: card1.querySelector('.card_name').innerText,
			price: card1.querySelector('.card_price').innerText,
		};
		console.log(info1);

		const cardinfo1 = `<p class="tovar">${info1.name}</p>
		<p class="tsen">${info1.price}</p>`;

        cardwripper.insertAdjacentHTML('beforeend',cardinfo1);
	}


	carddelite.onclick = function(){
		console.log('Элемент Удалён');
		cardwripper.innerHTML="";
		//cardwripper.parentElement.remove();
	}
})