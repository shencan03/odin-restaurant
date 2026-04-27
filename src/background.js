import pubImage from "./image/pub.jpg";

export default function Background() {
  const body = document.querySelector("body");

  const pubImg = document.createElement("img");
  pubImg.id = "background";
  pubImg.src = pubImage;

  body.appendChild(pubImg);
}
