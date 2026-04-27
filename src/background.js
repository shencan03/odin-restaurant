import pubImage from "./image/pub.jpg";

export default function Background() {
  const contentDiv = document.querySelector("div#content");

  const pubImg = document.createElement("img");
  pubImg.id = "background";
  pubImg.src = pubImage;

  contentDiv.appendChild(pubImg);
}
