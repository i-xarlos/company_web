const nav = document.querySelector("nav");
let currentURL = window.location.href;
currentURL = currentURL.includes("index") ? "home" : currentURL;
let currElementName;

for (let index in nav.childNodes) {
  currElementName = nav.childNodes[index]?.innerText?.split(" ");
  if (
    currElementName &&
    currentURL.includes(currElementName[0].toLowerCase())
  ) {
    nav.childNodes[index].classList.add("current");
    break;
  }
}

console.log(currElementName || "index");
