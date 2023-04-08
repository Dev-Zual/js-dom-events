document.getElementById("post-button").addEventListener("click", function () {
  const commentField = document.getElementById("new-comment");
  const commentText = commentField.value;
  const p = document.createElement("p");
  p.innerText = commentText;
  const commentContainer = document.getElementById("comment-container");
  commentContainer.appendChild(p);
  commentField.value = "";
});
