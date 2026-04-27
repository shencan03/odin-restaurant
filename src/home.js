export default function Home() {
  const content = document.querySelector("#content");

  const expP = document.createElement("p");
  expP.classList.add("experience");
  const experienceTxt =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nunc odio, tristique sit amet mauris et, pretium consectetur libero. Morbi imperdiet ornare sagittis. Aenean velit massa, hendrerit in egestas sed, mollis eget lacus. Vestibulum nisi dui, dignissim sed felis id, ultricies mollis sem. Nullam tempor justo in scelerisque tincidunt. Pellentesque.";
  expP.textContent = experienceTxt;

  content.appendChild(expP);

  console.log("at home");
}
