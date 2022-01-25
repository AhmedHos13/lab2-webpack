import "./style.css";
const element = document.createElement("header");

element.innerHTML = "Tessting WebPack Lab";
element.classList.add('info')
document.body.appendChild(element);

const newele = document.createElement("h1");
newele.innerHTML = 'Run Successfully';
document.body.appendChild(newele);

import photo from '../../assets/image.png'
const img = document.createElement("img");
img.src = photo;
img.style.width = "50px"
img.style.height = "50px"
element.appendChild(img);

import photo2 from '../../assets/305980.jpg'
const img1 = document.createElement("img");
img1.src = photo2;
img1.style.width = "450px"
img1.style.height = "450px"
document.body.appendChild(img1);