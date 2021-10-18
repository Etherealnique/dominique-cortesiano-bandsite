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

showTitle.classList.add("shows__title");
showTitle.innerText = "Shows";
shows.appendChild(showTitle);

const table = document.createElement("table");
table.classList.add("shows__container");
shows.appendChild(table);

const tableHead = document.createElement("thead");
table.appendChild(tableHead);
const tableRow = document.createElement("tr");
tableHead.appendChild(tableRow);

// Heading titles for Tablet/Desktop View//
const dateText = document.createElement("div");
dateText.classList.add("shows__title-container");
tableHead.appendChild(dateText);

const tableDate = document.createElement("h1");
tableDate.innerText = "DATE";
tableDate.classList.add("shows__head-title--date");
dateText.appendChild(tableDate);

const tableVenue = document.createElement("h1");
tableVenue.innerText = "VENUE";
tableVenue.classList.add("shows__head-title--venue");
dateText.appendChild(tableVenue);

const tableLoc = document.createElement("h1");
tableLoc.innerText = "LOCATION";
tableLoc.classList.add("shows__head-title--location");
dateText.appendChild(tableLoc);
//END//

const tableBody = document.createElement("tbody");
table.appendChild(tableBody);

for (let i = 0; i < tixDates.length; i++) {
  const tbodyRow = document.createElement("tr");
  tbodyRow.classList.add("shows__array");

  //dividers for date//
  const dateDiv = document.createElement("div");
  dateDiv.classList.add("date__info");
  tbodyRow.appendChild(dateDiv);

  const tableDate = document.createElement("td");
  tableDate.innerText = "DATE";
  tableDate.classList.add("shows__subtitle");
  dateDiv.appendChild(tableDate);

  const date = document.createElement("th");
  date.classList.add("shows__tixdate");
  date.innerText = tixDates[i].date;
  dateDiv.appendChild(tableDate);

  //dividers for date//
  //divider for venue//

  const venueDiv = document.createElement("div");
  venueDiv.classList.add("venue__info");
  tbodyRow.appendChild(venueDiv);

  const tableVenue = document.createElement("th");
  tableVenue.innerText = "VENUE";
  tableVenue.classList.add("shows__subtitle");
  tbodyRow.appendChild(tableVenue);

  const venue = document.createElement("td");
  venue.innerText = tixDates[i].venue;
  venue.classList.add("shows__tixvenue");

  //divider for venue//
  //divider for location//

  const locDiv = document.createElement("div");
  locDiv.classList.add("loc__info");
  tbodyRow.appendChild(locDiv);

  const tableLocation = document.createElement("th");
  tableLocation.innerText = "LOCATION";
  tableLocation.classList.add("shows__subtitle");
  tbodyRow.appendChild(tableLocation);

  const loc = document.createElement("td");
  loc.innerText = tixDates[i].location;
  loc.classList.add("shows__tixloc");

  //divider for location//

  const button = document.createElement("button");
  button.classList.add("shows__button");
  button.innerText = "BUY TICKETS";
  button.setAttribute("onclick", ".location.href='./shows.html';");

  tableBody.appendChild(tbodyRow);
  tableDate.appendChild(date);
  tableVenue.appendChild(venue);
  tableLocation.appendChild(loc);
  tbodyRow.appendChild(button);
}
