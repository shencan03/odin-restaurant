import Home from "./home.js";
import Menu from "./menu.js";
import About from "./about.js";
import "./styles.css";

let lastPage = "home";
const body = document.querySelector("body");

function flushPage() {
  const oldContent = document.querySelector("#content");
  oldContent.remove();
  const emptyContent = document.createElement("div");
  emptyContent.id = "content";
  body.appendChild(emptyContent);
}

function switchPage(e) {
  const clickedBtnId = e.target.id;

  switch (clickedBtnId) {
    case "home":
      if (lastPage != "home") {
        flushPage();
        Home();
        lastPage = "home";
      }
      break;
    case "menu":
      if (lastPage != "menu") {
        flushPage();
        Menu();
        lastPage = "menu";
      }
      break;
    case "about":
      if (lastPage != "about") {
        flushPage();
        About();
        lastPage = "about";
      }
      break;
  }
}

const nav = document.querySelector("nav");
nav.addEventListener("click", switchPage);

Home();
