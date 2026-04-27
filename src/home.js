import pubImage from "./image/pub.jpg";

const content = document.querySelector("div#content");

const pubImg = document.createElement("img");
pubImg.id = "background";
pubImg.src = pubImage;
content.appendChild(pubImg);
