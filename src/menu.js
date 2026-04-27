export default function Menu() {
  const content = document.querySelector("#content");

  const testP = document.createElement("p");
  testP.textContent = "this is menu page";

  content.appendChild(testP);
  console.log("at menu");
}
