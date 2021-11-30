const FirstList = document.querySelector(".FirstList");
function LineThrough(event) {
  event.target.style.textDecoration = "line-through";
}
FirstList.addEventListener("click", LineThrough);

const SecondList = document.querySelector(".feature ul li");
function changeOpacity(event) {
  event.target.style.opacity = 0;
}
SecondList = addEventListener("click", changeOpacity);

const button = document.querySelector("#destroy-all");
button.addEventListener("click", function () {
  const listItems1 = document.querySelectorAll("ol li");
  for (let i = 0; i < listItems1.length; i++) {
    const item = listItems1[i];
    item.style.textDecoration = "line-through";
  }

  const listItems2 = document.querySelectorAll(".feature ul li");
  for (let i = 0; i < listItems2.length; i++) {
    const item = listItems2[i];
    item.style.opacity = 0;
  }

  const imgs = document.querySelectorAll("img");
  for (let i = 0; i < imgs.length; i++) {
    const img = imgs[i];
    img.style.width = 0;
  }
});
