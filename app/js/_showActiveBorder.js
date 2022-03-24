let borderActive = 0;
function showActiveBorder() {
  const collection = [...task_1.children];

  for (let i = 0; i < collection.length; i++) {
    collection[i].classList.remove('activeBorder');  
  }
  borderActive++;
  if (borderActive > collection.length) {borderActive = 1}    
  collection[borderActive-1].classList.add('activeBorder');

  setTimeout(showActiveBorder, 2000); // 2 seconds
}