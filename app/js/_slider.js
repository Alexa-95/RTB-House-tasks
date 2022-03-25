//default index for slider = 0 
let slideIndex = 0;
function showSlider() {
  //Collect all children of task_2 div in one array
  const collection = [...app.task_2.children];

  //Toggle class activeSlider, remove all
  for (let i = 0; i < collection.length; i++) {
    collection[i].classList.remove('activeSlider');  
  }
  slideIndex++;
  //Toggle class activeSlider, add for specific index
  if (slideIndex > collection.length) {slideIndex = 1}    
  collection[slideIndex-1].classList.add('activeSlider');

  setTimeout(showSlider, 2000); // repeat every 2 seconds
}