let slideIndex = 0;

function showSlider() {
  const collection = [...task_2.children];

  for (let i = 0; i < collection.length; i++) {
    collection[i].classList.remove('activeSlider');  
  }
  slideIndex++;
  if (slideIndex > collection.length) {slideIndex = 1}    
  collection[slideIndex-1].classList.add('activeSlider');

  setTimeout(showSlider, 2000); // 2 seconds
}

