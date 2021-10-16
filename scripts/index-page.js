const formEl = document.querySelector("#myForm");
const containerEl = document.querySelector(".forum-container");

const comments = [
  {
    name: "Connor Walton",
    date: "02/17/2021",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    date: "01/09/2021",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    date: "01/09/2021",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

const displayComments = (obj) => {
  const commentContainer = document.createElement("div");
  commentContainer.classList.add("comment-container");

  const divContainer = document.createElement("div");
  divContainer.classList.add("forum__subsection--header");

  const nameEl = document.createElement("h2");
  nameEl.classList.add("forum__user");
  nameEl.innerText = obj.name;

  const figure = document.createElement("figure");
  figure.classList.add("forum__avatar-blank");

  const dateEl = document.createElement("h3");
  dateEl.classList.add("forum__date");
  dateEl.innerText = obj.date;

  const contentEl = document.createElement("p");
  contentEl.classList.add("forum__body");
  contentEl.innerText = obj.comment;

  const dividerEl = document.createElement("hr");
  dividerEl.classList.add("forum__divider");
  // dividerEl.innerText = obj.comment;

  commentContainer.appendChild(divContainer);
  divContainer.appendChild(figure);
  divContainer.appendChild(nameEl);
  divContainer.appendChild(dateEl);
  commentContainer.appendChild(contentEl);
  commentContainer.appendChild(dividerEl);

  containerEl.appendChild(commentContainer);
};

comments.forEach((element) => {
  displayComments(element);
});

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  containerEl.innerText = "";
  const userName = event.target.name.value;
  const userComment = event.target.comment.value;
  const userDate = new Date(Date.now()).toLocaleDateString();

  const newComment = {
    name: userName,
    date: userDate,
    comment: userComment,
  };
  comments.unshift(newComment);
  comments.forEach((element) => {
    displayComments(element);
  });
  formEl.reset();
});
