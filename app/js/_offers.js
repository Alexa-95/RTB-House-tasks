const api_url = 'http://rekrutacjartb.pl/developer/banner.json';

const list_div = document.getElementsByClassName('items_container');

const task_1 = document.getElementById('task_1');
const task_2 = document.getElementById('task_2');

// Defining async function
async function getapi(url) {

	// Storing response
	const response = await fetch(url);

	// Storing data in form of JSON
	const data = await response.json();
	if (response) {
		console.log(response.status);		
	}
	show(data);
}
// Calling that async function
getapi(api_url);

// Function to define innerHTML
function show(data) {
	
	const arr = data.offers;

	[...list_div].forEach((task) => {
		let random = arr.sort((a, b) => 0.5 - Math.random()).slice(0,task.getAttribute("value"));
		let id = task.getAttribute("id");

		random.forEach(e => {
			console.log(task)
			let item = document.createElement('div');
			item.classList.add('item');

			if(task.getAttribute("id") === task_1.getAttribute("id")){
				item.innerHTML = `
				<img src="${e.imgURL}" alt="${e.name}" class="item_img" />
				<span class="item_price">
					<span>${e.price}</span>
					<span> ${e.currency}</span>
				</span>
			`;
			}
			else if(task.getAttribute("id") === task_2.getAttribute("id")){
				item.innerHTML = `
				<span class="close">x</span>
				<img src="${e.imgURL}" alt="${e.name}" class="item_img" />
				<span class="item_title">${e.name}</span>
				<span class="item_price">
					<span>${e.price}</span>
					<span> ${e.currency}</span>
					</span>
				<button class="action_btn">Check</button>
			`;
			}
			else{
				//show all data
				item.innerHTML = `
					<img src="${e.imgURL}" alt="${e.name}" class="item_img" />
					<span class="item_title">${e.name}</span>
					<span class="item_price">
						<span>${e.price}</span>
						<span> ${e.currency}</span>
					</span>
				`;
			}
			document.getElementById(id).appendChild(item);
		});
		if(task.getAttribute("id") === task_1.getAttribute("id")){
			showActiveBorder();
		}
		if(task.getAttribute("id") === task_2.getAttribute("id")){
			showSlider();
		}
	});
}