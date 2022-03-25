//default index = 0
let borderActive = 0;
function showActiveBorder() {
  //Collect all children of task_1 div in one array
  const collection = [...app.task_1.children];

  //Toggle class activeBorder, remove all
  for (let i = 0; i < collection.length; i++) {
    collection[i].classList.remove('activeBorder');  
  }
  borderActive++;
  //Toggle class activeBorder, add for specific index
  if (borderActive > collection.length) {borderActive = 1}    
  collection[borderActive-1].classList.add('activeBorder');

  setTimeout(showActiveBorder, 2000); // repeat every 2 seconds
}