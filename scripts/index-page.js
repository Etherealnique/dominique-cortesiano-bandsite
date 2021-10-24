const apiKey = "?api_key=b6b1a148-8623-4365-be03-b1583abc254d";
const apiUrl = `https://project-1-api.herokuapp.com/comments${apiKey}`;

const formEl = document.querySelector("#myForm");
const containerEl = document.querySelector(".forum-container");

function populateComments() {
  axios
    .get(apiUrl)
    .then((results) => {
      console.log(results);
      containerEl.innerHTML = "";

      const commentInfo = results.data
        .sort((newTime1, newTime2) => newTime2.timestamp - newTime1.timestamp)
        .forEach((element) => {
          const commentContainer = document.createElement("div");
          commentContainer.classList.add("comment-container");
          const divContainer = document.createElement("div");
          divContainer.classList.add("forum__subsection--header");

          const nameEl = document.createElement("h2");
          nameEl.classList.add("forum__user");
          nameEl.innerText = `${element.name}`;

          const figure = document.createElement("figure");
          figure.classList.add("forum__avatar-blank");

          const dateEl = document.createElement("h3");
          const userDate = new Date(element.timestamp).toLocaleDateString(
            "en-US"
          );
          dateEl.classList.add("forum__date");
          dateEl.innerText = userDate;

          const contentEl = document.createElement("p");
          contentEl.classList.add("forum__body");
          contentEl.innerText = `${element.comment}`;

          //appends each element to appropriate section
          divContainer.appendChild(figure);
          commentContainer.appendChild(divContainer);

          divContainer.appendChild(nameEl);
          divContainer.appendChild(dateEl);
          commentContainer.appendChild(contentEl);
          containerEl.appendChild(commentContainer);
        });
    })
    .catch((error) => {
      console.log(error);
    });
}
console.log(populateComments());

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  containerEl.innerHTML = "";
  const userName = event.target.name.value;
  const userComment = event.target.comment.value;

  const newComment = {
    name: userName,
    comment: userComment,
  };
  axios
    .post(apiUrl, { name: userName, comment: userComment })
    .then((results) => {
      formEl.reset();
      populateComments();
    })
    .catch((error) => {
      console.log(error);
    });
  // formEl.reset();
});
const apiKey = "?api_key=b6b1a148-8623-4365-be03-b1583abc254d";
const apiUrl = `https://project-1-api.herokuapp.com/comments${apiKey}`;

const formEl = document.querySelector("#myForm");
const containerEl = document.querySelector(".forum-container");

function populateComments() {
  axios
    .get(apiUrl)
    .then((results) => {
      console.log(results);
      containerEl.innerHTML = "";

      const commentInfo = results.data
        .sort((newTime1, newTime2) => newTime2.timestamp - newTime1.timestamp)
        .forEach((element) => {
          const commentContainer = document.createElement("div");
          commentContainer.classList.add("comment-container");
          const divContainer = document.createElement("div");
          divContainer.classList.add("forum__subsection--header");

          const nameEl = document.createElement("h2");
          nameEl.classList.add("forum__user");
          nameEl.innerText = `${element.name}`;

          const figure = document.createElement("figure");
          figure.classList.add("forum__avatar-blank");

          const dateEl = document.createElement("h3");
          const userDate = new Date(element.timestamp).toLocaleDateString(
            "en-US"
          );
          dateEl.classList.add("forum__date");
          dateEl.innerText = userDate;

          const contentEl = document.createElement("p");
          contentEl.classList.add("forum__body");
          contentEl.innerText = `${element.comment}`;

          //appends each element to appropriate section
          divContainer.appendChild(figure);
          commentContainer.appendChild(divContainer);

          divContainer.appendChild(nameEl);
          divContainer.appendChild(dateEl);
          commentContainer.appendChild(contentEl);
          containerEl.appendChild(commentContainer);
        });
    })
    .catch((error) => {
      console.log(error);
    });
}
console.log(populateComments());

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  containerEl.innerHTML = "";
  const userName = event.target.name.value;
  const userComment = event.target.comment.value;

  const newComment = {
    name: userName,
    comment: userComment,
  };
  axios
    .post(apiUrl, { name: userName, comment: userComment })
    .then((results) => {
      formEl.reset();
      populateComments();
    })
    .catch((error) => {
      console.log(error);
    });
  // formEl.reset();
});
