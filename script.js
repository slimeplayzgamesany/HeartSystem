const image1 = document.getElementsByClassName("image1")[0];
const image2 = document.querySelector(".image2");
const image3 = document.getElementsByClassName("image3")[0];
const image4 = document.getElementsByClassName("image4")[0];

const icon1 = document.querySelector(".ht1");
const icon2 = document.querySelector(".ht2");
const icon3 = document.querySelector(".ht3");
const icon4 = document.querySelector(".ht4");

function timeout1() {
  icon1.style.transform = "scale(0)";
}

function love1() {
  icon1.style.transform = "scale(1)";
  setTimeout(timeout1, 1000);
}
function timeout2() {
  icon2.style.transform = "scale(0)";
}

function love2() {
  icon2.style.transform = "scale(1)";
  setTimeout(timeout2, 1000);
}
function timeout3() {
  icon3.style.transform = "scale(0)";
}

function love3() {
  icon3.style.transform = "scale(1)";
  setTimeout(timeout3, 1000);
}
function timeout4() {
  icon4.style.transform = "scale(0)";
}

function love4() {
  icon4.style.transform = "scale(1)";
  setTimeout(timeout4, 1000);
}

image1.addEventListener("dblclick", love1);
image2.addEventListener("dblclick", love2);
image3.addEventListener("dblclick", love3);
image4.addEventListener("dblclick", love4);
// "dblclick" means double click

