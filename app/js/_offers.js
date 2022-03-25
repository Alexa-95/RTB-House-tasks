// Defining async function
async function getapi(url) {
	try {
		// Storing response
		const response = await fetch(url);

		// Storing data in form of JSON
		const data = await response.json();
		if (response) {
			console.log(response.status);
		}
		show(data);
	} catch (err) {
		console.log(err);
	}
}

// Function to define innerHTML
function show(data) {

	// Define JSON data to array
	const arr = data.offers;

	// Loop for each task container, set items in random order, get first N elements where N is value
	[...app.list_div].forEach((task) => {
		let random = arr.sort((a, b) => 0.5 - Math.random()).slice(0, task.getAttribute("value"));
		let id = task.getAttribute("id");

		// Create new div for every element
		random.forEach(e => {
			let item = document.createElement('div');
			item.classList.add('item');

			// Define innerHTML for task_1 item
			if (task.getAttribute("id") === app.task_1.getAttribute("id")) {
				item.innerHTML = `
				<img src="${e.imgURL}" alt="${e.name}" class="item_img" />
				<span class="item_price">
					<span>${e.price}</span>
					<span> ${e.currency}</span>
				</span>
			`;
			}
			// Define innerHTML for task_2
			else if (task.getAttribute("id") === app.task_2.getAttribute("id")) {
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
			} else {
				// Define innerHTML for other tasks, show all data
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
		//Start animating border for items in task_1
		if (task.getAttribute("id") === app.task_1.getAttribute("id")) {
			showActiveBorder();
		}
		//Start slider for items in task_2
		if (task.getAttribute("id") === app.task_2.getAttribute("id")) {
			showSlider();
		}
	});
}