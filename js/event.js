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
