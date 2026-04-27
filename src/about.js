export default function About() {
  const content = document.querySelector("#content");

  const testP = document.createElement("p");
  testP.textContent = "this is about page";

  content.appendChild(testP);
  console.log("at about");
}
