//Global variables
const api_url = 'http://rekrutacjartb.pl/developer/banner.json';
const imageUrl = "http://rekrutacjartb.pl/developer/images/logo_rtb.png";

class App {
  constructor({list_div, task_1, task_2, counter, imageDiv}){
    this.list_div = list_div;
    this.task_1 = task_1;
    this.task_2 = task_2;
    this.counter = counter;
    this.imageDiv = imageDiv;
  }
  run() {
    // Calling that async function
    getapi(api_url);

    //GetSet logo form URL
    getLogo(this.imageDiv);
  }
}

const app = new App({
  list_div: document.getElementsByClassName('items_container'),
  task_1: document.getElementById('task_1'),
  task_2: document.getElementById('task_2'),
  counter: document.getElementById('counter'),
  imageDiv: document.getElementsByClassName("logo_container"),
});

app.run();