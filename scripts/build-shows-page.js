const tixDates = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronaldo Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

const shows = document.querySelector(".shows");
const showTitle = document.createElement("h2");
// adds class for styling
showTitle.classList.add("shows__title");
//adds title text names shows
showTitle.innerText = "Shows";
// adds to div parent
shows.appendChild(showTitle);
// creates table
const table = document.createElement("table");
// adds table to show section
shows.appendChild(table);
// creates thead semantic
const tableHead = document.createElement("thead");
// adds thead semantic to table
table.appendChild(tableHead);
// create table row
const tableRow = document.createElement("tr");
// adds tr semantic to thead
tableHead.appendChild(tableRow);

const tableDate = document.createElement("th");
// adds date text to row
tableDate.innerText = "DATE";
// adds class for styling
tableDate.classList.add("shows__subtitle");
// adds tr semantic to thead
tableRow.appendChild(tableDate);

const tableVenue = document.createElement("th");
// adds date text to row
tableVenue.innerText = "VENUE";
// adds class for styling
tableVenue.classList.add("shows__subtitle");
// adds tr semantic to thead
tableRow.appendChild(tableVenue);

const tableLocation = document.createElement("th");
// adds date text to row
tableLocation.innerText = "LOCATION";
// adds class for styling
tableLocation.classList.add("shows__subtitle");
// adds tr semantic to thead
tableRow.appendChild(tableLocation);

const tableButton = document.createElement("button");
// adds date text to row
tableButton.innerText = "BUY TICKETS";
// adds class for styling
tableButton.classList.add("shows__button");
// adds tr semantic to thead
tableRow.appendChild(tableButton);

// // creating table body semantic
const tableBody = document.createElement("tbody");
// // // add body to table
table.appendChild(tableBody);
// // // // adding actually date
// const tbodyRow = document.createElement("tr");
// tableBody.appendChild(tbodyRow);

// const date = document.createElement("td");
// // // // adding to table body
// tbodyRow.appendChild(date);
// // // refered to first object and added date
// date.innerText = tixDates[0].date;

// const venue = document.createElement("td");
// // // adding to table body
// tbodyRow.appendChild(venue);
// // // refered to first object and added venue
// venue.innerText = tixDates[0].venue;

// const loc = document.createElement("td");
// // // adding to table body
// tbodyRow.appendChild(loc);
// // // refered to first object and added location
// loc.innerText = tixDates[0].location;

for (let i = 0; i < tixDates.length; i++) {
  const tbodyRow = document.createElement("tr");
  // adds class for styling
  tbodyRow.classList.add("shows__array");

  const date = document.createElement("td");

  date.innerText = tixDates[i].date;

  const venue = document.createElement("td");
  venue.innerText = tixDates[i].venue;

  const loc = document.createElement("td");
  loc.innerText = tixDates[i].location;

  tableBody.appendChild(tbodyRow);
  tbodyRow.appendChild(date);
  tbodyRow.appendChild(venue);
  tbodyRow.appendChild(loc);
}

// const tableDate = document.createElement("th");
// // adds date text to row
// tableDate.innerText = "DATE";
// // adds class for styling
// tableDate.classList.add("shows__subtitle");
// // adds tr semantic to thead
