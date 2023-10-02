const allBtns = document.querySelectorAll("button");
const avatarBox = document.querySelector(".avatar-box");
const overlay = document.querySelector(".overlay");

let winWidth = window.innerWidth;
let winHeight = window.innerHeight;

window.addEventListener("resize", () => {
  winWidth = window.innerWidth;
  winHeight = window.innerHeight;
});

// const btnExplanation = {

//   food: "Food is good for the body",
//   furniture: "Furniture is good for sitting on",
//   cars: "Cars are driven by ",
//   clothes: "clothes are good for wearing",
// };

const btnExplanation = [
  { content: "Food is good for the body" },
  { content: "Furniture is good for sitting on" },
  { content: "Cars are driven by people" },
  { content: "clothes are good for wearing" },
];

const avatarPos = avatarBox.getBoundingClientRect();

allBtns.forEach((btn, idx) => {
  const btnPos = btn.getBoundingClientRect();
  console.log(btnPos.right);
  btn.addEventListener("click", () => {
    // show the explanation for the button  based on the index on the array
    avatarBox.textContent = btnExplanation[idx].content;

    // make the overlay visible if it isnt already is
    if (!overlay.classList.contains("active")) overlay.classList.add("active");

    // move the avatar box to a position near the button that was clicked
    avatarBox.style.bottom = `${
      winHeight - btnPos.bottom - avatarPos.height - 50
    }px`;
    avatarBox.style.right = `${winWidth - btnPos.right - avatarPos.width}px`;
  });
});

overlay.addEventListener("click", () => {
  avatarBox.style.bottom = "10px";
  avatarBox.style.right = "10px";
  overlay.classList.remove("active");
  avatarBox.textContent = "content"

});
