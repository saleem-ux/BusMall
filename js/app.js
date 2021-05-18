'use strict';

//---------------------- Global-------------------
let maxAttempts = 25 ;
let userCount = prompt('Hello, You can choose the number rounds here or you keep it as default');
// console.log(userCount);
// userCount = parseInt(userCount);
// console.log(typeof(userCount));
if (maxAttempts !== userCount && userCount !== null && userCount !== '') {
  maxAttempts = userCount 
  console.log(userCount);
}


let images = [];
let imageVotes = [];
let imageShown = [];
let productName = [];

let firstImage;
let secondImage;
let thirdImage;
let threeImages = [];
let firstImageElement=document.getElementById('first');
let secondImageElement=document.getElementById('second');
let thirdImageElement=document.getElementById('third');


let userCounter = 0;

function ProuductImage(name, source){
    this.name = name;
    this.source = source;
    this.count = 0;
    this.votes = 0;
    images.push(this);
    productName.push(this.name);
}

function settingItem() {
  let data = JSON.stringify(images);
  localStorage.setItem('images',data);
  // console.log(images);
  // console.log(data);
}

function gettigItem() {
  let stringData = localStorage.getItem('images');
  // console.log(stringData);
  let normalData = JSON.parse(stringData);
  // console.log(normalData);
  if (normalData !== null) {
    
    let images = normalData;
  }

  // renderThreeImages();
}
gettigItem();


new ProuductImage('bag', 'img/assets/bag.jpg');
new ProuductImage('banana', 'img/assets/banana.jpg');
new ProuductImage('bathroom', 'img/assets/bathroom.jpg');
new ProuductImage('boots', 'img/assets/boots.jpg');
new ProuductImage('breakfast', 'img/assets/breakfast.jpg');
new ProuductImage('bubblegum', 'img/assets/bubblegum.jpg');
new ProuductImage('chair', 'img/assets/chair.jpg');
new ProuductImage('cthulhu', 'img/assets/cthulhu.jpg');
new ProuductImage('dog-duck', 'img/assets/dog-duck.jpg');
new ProuductImage('dragon', 'img/assets/dragon.jpg');
new ProuductImage('pen', 'img/assets/pen.jpg');
new ProuductImage('pet-sweep', 'img/assets/pet-sweep.jpg');
new ProuductImage('scissors', 'img/assets/scissors.jpg');
new ProuductImage('shark', 'img/assets/shark.jpg');
new ProuductImage('sweep', 'img/assets/sweep.png');
new ProuductImage('tauntaun', 'img/assets/tauntaun.jpg');
new ProuductImage('unicorn', 'img/assets/unicorn.jpg');
new ProuductImage('usb', 'img/assets/usb.gif');
new ProuductImage('water-can', 'img/assets/water-can.jpg');
new ProuductImage('wine-glass', 'img/assets/wine-glass.jpg');


//console.log(images);
function RandomIndex(){
    return Math.floor(Math.random() * images.length);
}

//console.log(Math.floor(Math.random() * images.length));

function renderThreeImages(){
    firstImage = RandomIndex();
    secondImage = RandomIndex();
    thirdImage = RandomIndex();
    
    while(firstImage === secondImage || firstImage === thirdImage || secondImage === thirdImage || threeImages.includes(firstImage) || threeImages.includes(secondImage) || threeImages.includes(thirdImage)){
        firstImage = RandomIndex();
        secondImage = RandomIndex();
        thirdImage = RandomIndex();
    }
    threeImages = [];
    threeImages.push(firstImage);
    threeImages.push(secondImage);
    threeImages.push(thirdImage);
    //console.log(threeImages);

    // console.log(firstImageIndex);
    // console.log(secondImageIndex);
    // console.log(thirdImageIndex);
    // console.log(images[firstImageIndex]);
    // console.log(images[secondImageIndex]);
    // console.log(images[thirdImageIndex]);
    
    firstImageElement.src = images[firstImage].source;
    images[firstImage].count++;
    secondImageElement.src = images[secondImage].source;
    images[secondImage].count++;
    thirdImageElement.src = images[thirdImage].source;
    images[thirdImage].count++;
}
renderThreeImages();
//console.log(images);





firstImageElement.addEventListener('click', handleUserClick);
secondImageElement.addEventListener('click', handleUserClick);
thirdImageElement.addEventListener('click', handleUserClick);

function handleUserClick(event){
    userCounter++;
    if (userCounter <= maxAttempts) {
        if (event.target.id === 'first') {
            images[firstImage].votes++;
        } else if (event.target.id === 'second') {
            images[secondImage].votes++;
        } else {
            images[thirdImage].votes++;
        }
        // console.log(images[firstImage].votes+1);
        
        renderThreeImages();
    } else {
        firstImageElement.removeEventListener('click', handleUserClick);
        secondImageElement.removeEventListener('click', handleUserClick);
        thirdImageElement.removeEventListener('click', handleUserClick);
        for (let i = 0; i < images.length; i++) {
            imageVotes.push(images[i].votes);
            imageShown.push(images[i].count);
        }
        // let list = document.getElementById('result');
        // let btn =document.getElementById('btn');
        // btn.addEventListener('click', show)
        // function show(){
        //     let liElement;
        //     for (let i = 0; i < images.length; i++) {
        //         liElement = document.createElement('li');
        //         list.appendChild(liElement);
        //         liElement.textContent = `${images[i].name} had ${images[i].votes}  votes, and was seen ${images[i].count} times`;
        //     }
        // }
        let list = document.getElementById("result");
        let btn = document.getElementById("btn");
        btn.addEventListener("click", show);
        function show() {
            viewChart();
            settingItem();

      }

    }
}

function viewChart() {
    let ctx = document.getElementById("myChart").getContext("2d");
    let myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: productName,
        datasets: [
          {
            label: "# of Votes",
            data: imageVotes,
            backgroundColor: "blue",
            borderColor: "black",
            borderWidth: 1,
          },
          {
            label: "# of Shown",
            data: imageShown,
            backgroundColor: "gray",
            borderColor: "black",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }    
 
// console.log(images);
// console.log(imageVotes);
// console.log(imageShown);
// console.log(productName);
