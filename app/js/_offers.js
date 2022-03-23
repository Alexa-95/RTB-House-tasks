const api_url = 'http://rekrutacjartb.pl/developer/banner.json';

const list_div = document.getElementById('items_container');

// Defining async function
async function getapi(url) {

	// Storing response
	const response = await fetch(url);

	// Storing data in form of JSON
	const data = await response.json();
	console.log(data);
	if (response) {
		console.log(response.status)
	}
	show(data);
}
// Calling that async function
getapi(api_url);

// Function to define innerHTML
function show(data) {
	const arr = data.offers
	console.log(arr)
	arr.forEach(e => {
		let item = document.createElement('div');
		item.classList.add('item')
		item.innerHTML = `
            <img src="${e.imgURL}" alt="${e.name}" class="item_img" />
            <span class="item_title">${e.name}</span>
            <span class="item_price">
                <span>${e.price}</span>
                <span> ${e.currency}</span>
            </span>
        `;

		list_div.appendChild(item);
	})
}