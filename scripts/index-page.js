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
  //creates div container for whole section
  const commentContainer = document.createElement("div");
  //creates class
  commentContainer.classList.add("comment-container");
  //creates div for subsection header
  const divContainer = document.createElement("div");
  //creates class
  divContainer.classList.add("forum__subsection--header");
  //creates element for forum user
  const nameEl = document.createElement("h2");
  //creates class
  nameEl.classList.add("forum__user");
  //inserts user's name
  nameEl.innerText = obj.name;
  //creates figure for blank avatar
  const figure = document.createElement("figure");
  //creates class
  figure.classList.add("forum__avatar-blank");
  //creates element for forum date posted
  const dateEl = document.createElement("h3");
  //creates class
  dateEl.classList.add("forum__date");
  //inserts the date the comment was posted
  dateEl.innerText = obj.date;
  //creates element for forum content
  const contentEl = document.createElement("p");
  //creates class
  contentEl.classList.add("forum__body");
  //inserts content posted by user
  contentEl.innerText = obj.comment;

  //appends each element to appropriate section
  divContainer.appendChild(figure);
  commentContainer.appendChild(divContainer);

  divContainer.appendChild(nameEl);
  divContainer.appendChild(dateEl);
  commentContainer.appendChild(contentEl);
  containerEl.appendChild(commentContainer);
};
//displays comment for each element
comments.forEach((element) => {
  displayComments(element);
});
//links submit button to show new comments posted by new user
formEl.addEventListener("submit", (event) => {
  //deletes default refresh
  event.preventDefault();
  //inserts content created by new user
  containerEl.innerText = "";
  const userName = event.target.name.value;
  const userComment = event.target.comment.value;
  //creates date for new user's comment
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
