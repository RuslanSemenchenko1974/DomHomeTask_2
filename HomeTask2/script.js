const imgArray = [
  "img/BedRoom1.jpg",
  "img/BedRoom2.jpg",
  "img/BedRoom3.jpg",
  "img/BedRoom4.jpg",
  "img/BedRoom5.jpg",
];

const listOfImageEl = document.querySelector(".listOfImage");
const naviEl = document.querySelector(".navi");
const bigImageDivEl = document.querySelector('.bigImageDiv');

for (let index = 0; index < imgArray.length; index++) {
  listOfImageEl.insertAdjacentHTML(
    "beforeend",
    `
    <div class="smallImageDiv"><img src=${imgArray[index]} alt="image${index}" class="smallImage" id ="${index}"></div>
    `
  );
  naviEl.insertAdjacentHTML(
    "beforeend",
    `<div class="circle "></div>
    `
  );
}
bigImageDivEl.insertAdjacentHTML('beforeend', `
<img src=${imgArray[0]} alt="image1" class="bigImage" id="0">
`);
const bigImageEl = document.querySelector(".bigImage");
const smallImageEls = document.querySelectorAll(".smallImage");

const leftTurnEl = document.querySelector(".leftTurn");
const rightTurnEl = document.querySelector(".rightTurn");
//************************************************************************************* */

let chossenEl = document.querySelector(".smallImage");
chossenEl.classList.toggle("choosenElem");

let chossenCircle = document.querySelector(".circle");
chossenCircle.classList.toggle("grayCircle");

smallImageEls.forEach((elem, id) => {
  elem.addEventListener("click", (e) => {  
    changeClass(id);
  });
});
//****************************************************************************************** */

leftTurnEl.addEventListener("click", (e) => {
  let number = +bigImageEl.id;
  if (number === 0) {
    number = imgArray.length - 1;
  } else {
    number = number - 1;
  }
  changeClass(number);
});

rightTurnEl.addEventListener("click", (e) => {
  let number = +bigImageEl.id;
  if (number === imgArray.length - 1) {
    number = 0;
  } else {
    number = number + 1;
  }
  changeClass(number);
});
//*********************************************************************** */
document.querySelectorAll(".circle").forEach((elem, id) => {
  elem.addEventListener("click", (e) => {
    changeClass(id);
  });
});

function changeClass(id){
  chossenEl.classList.toggle("choosenElem");
  chossenEl = smallImageEls[id];
  chossenEl.classList.toggle("choosenElem");

  chossenCircle.classList.toggle("grayCircle");
  chossenCircle = document.querySelectorAll(".circle")[id];
  chossenCircle.classList.toggle("grayCircle");

  bigImageEl.src = imgArray[id];
  bigImageEl.id = id;
}