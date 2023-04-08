function handleClick() {
  alert("clicked");
}

function makeRed() {
  document.body.style.backgroundColor = "red";
}

const makeBlue = document.getElementById("blue");

/* makeBlue.addEventListener("click", function (e) {
  document.body.style.backgroundColor = "blue";
});
 */

// option 2
makeBlue.onclick = blue;
function blue() {
  document.body.style.backgroundColor = "blue";
}
/* // option 2 another
makeBlue.onclick = function blue() {
  document.body.style.backgroundColor = "blue";
};
 */

const purple = document.getElementById("purple");
purple.addEventListener("click", () => {
  document.body.style.backgroundColor = "purple";
});

// final solution
document.getElementById("green").addEventListener("click", () => {
  document.body.style.backgroundColor = "green";
});

document.getElementById("update-input").addEventListener("click", (e) => {
  const inputField = document.getElementById("input");
  const inputText = inputField.value;
  const pText = document.getElementById("input-text");
  pText.innerText = inputText;
  inputField.value = "";
});
