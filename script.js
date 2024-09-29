var clickCounter, imageToset;

// Describe this function...
function nextImage() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  if (clickCounter == 0) {
    imageToset = 'https://c8.alamy.com/comp/2MJKP79/karachi-pakistan-aerial-photograph-of-cityscape-and-landmarks-of-karachi-city-aerial-picture-of-bahria-icon-tower-dolmen-mall-clifton-harbor-front-2MJKP79.jpg';
    clickCounter = 1;
  } else if (clickCounter == 1) {
    imageToset = 'https://th.bing.com/th/id/R.e8a79555512f6e88f843cda0d3d5df74?rik=PSIVt%2f2nTvm10A&pid=ImgRaw&r=0';
    clickCounter = 2;
  } else {
    imageToset = 'https://th.bing.com/th/id/OIP.HbDz8D8-hHbPB0rEZ__NjQHaFj?rs=1&pid=ImgDetMain';
    clickCounter = 0;
  }
  return imageToset;
}

// Describe this function...
function prevImage() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  if (clickCounter == 2) {
    imageToset = 'https://c8.alamy.com/comp/2MJKP79/karachi-pakistan-aerial-photograph-of-cityscape-and-landmarks-of-karachi-city-aerial-picture-of-bahria-icon-tower-dolmen-mall-clifton-harbor-front-2MJKP79.jpg';
    clickCounter = 1;
  } else if (clickCounter == 1) {
    imageToset = 'https://th.bing.com/th/id/OIP.HbDz8D8-hHbPB0rEZ__NjQHaFj?rs=1&pid=ImgDetMain';
    clickCounter = 0;
  } else {
    imageToset = 'https://th.bing.com/th/id/R.e8a79555512f6e88f843cda0d3d5df74?rik=PSIVt%2f2nTvm10A&pid=ImgRaw&r=0';
    clickCounter = 2;
  }
  return imageToset;
}


clickCounter = 0;

let element_list = document.getElementById('list');
let element_imgg = document.getElementById('imgg');
element_imgg.setAttribute("src", prevImage());


document.getElementById('prevBtn').addEventListener('click', (event) => {
  let element_list2 = document.getElementById('list');
  let element_imgg2 = document.getElementById('imgg');
  element_imgg2.setAttribute("src", prevImage());

});

document.getElementById('nextBtn').addEventListener('click', (event) => {
  let element_list3 = document.getElementById('list');
  let element_imgg3 = document.getElementById('imgg');
  element_imgg3.setAttribute("src", nextImage());

});