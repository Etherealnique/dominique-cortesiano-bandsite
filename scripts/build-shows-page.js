const apiKey = "?api_key=b6b1a148-8623-4365-be03-b1583abc254d";
const apiUrl = `https://project-1-api.herokuapp.com/showdates${apiKey}`;

const shows = document.querySelector(".shows");
axios.get(apiUrl).then((response) => {
  console.log(response);
  shows.innerHTML = "";
  const showTitle = document.createElement("h2");
  showTitle.classList.add("shows__title");
  showTitle.innerText = "Shows";
  shows.appendChild(showTitle);

  const showsMain = document.createElement("div");
  showsMain.classList.add("shows__main-titles");
  shows.appendChild(showsMain);

  const dateTitle = document.createElement("p");
  dateTitle.innerText = "DATE";
  dateTitle.classList.add("shows__main-date-title");
  showsMain.appendChild(dateTitle);

  const venueTitle = document.createElement("p");
  venueTitle.innerText = "VENUE";
  venueTitle.classList.add("shows__main-venue-title");
  showsMain.appendChild(venueTitle);

  const locTitle = document.createElement("p");
  locTitle.innerText = "LOCATION";
  locTitle.classList.add("shows__main-loc-title");
  showsMain.appendChild(locTitle);

  const dateText = document.createElement("div");

  const displayShows = response.data.forEach((showhead) => {
    const table = document.createElement("table");
    table.classList.add("shows__container");
    shows.appendChild(table);

    const tableHead = document.createElement("thead");
    table.appendChild(tableHead);
    const tableRow = document.createElement("tr");

    tableHead.appendChild(tableRow);

    const tableDate = document.createElement("h1");
    tableDate.innerText = "DATE";
    tableDate.classList.add("shows__head-title--date");
    dateText.appendChild(tableDate);

    const tableLoc = document.createElement("h1");
    tableLoc.innerText = "LOCATION";
    tableLoc.classList.add("shows__head-title--location");
    dateText.appendChild(tableLoc);

    const tableBody = document.createElement("tbody");
    table.appendChild(tableBody);

    const tbodyRow = document.createElement("tr");

    tbodyRow.classList.add("shows__array");

    const dateDiv = document.createElement("div");
    dateDiv.classList.add("date__info");
    tbodyRow.appendChild(dateDiv);

    const date = document.createElement("th");
    date.classList.add("shows__tixdate");
    const userDate = new Date(Number(showhead.date)).toLocaleDateString(
      "en-US"
    );
    date.innerText = userDate;
    dateDiv.appendChild(tableDate);
    console.log(typeof showhead.date);

    const venueDiv = document.createElement("div");
    venueDiv.classList.add("venue__info");
    tbodyRow.appendChild(venueDiv);

    const tableVenue = document.createElement("th");
    tableVenue.innerText = "VENUE";
    tableVenue.classList.add("shows__subtitle");
    tbodyRow.appendChild(tableVenue);

    const venue = document.createElement("td");
    venue.innerText = showhead.place;
    venue.classList.add("shows__tixvenue");

    const locDiv = document.createElement("div");
    locDiv.classList.add("loc__info");
    tbodyRow.appendChild(locDiv);

    const tableLocation = document.createElement("th");
    tableLocation.innerText = "LOCATION";
    tableLocation.classList.add("shows__subtitle");
    tbodyRow.appendChild(tableLocation);

    const loc = document.createElement("td");
    loc.innerText = showhead.location;
    loc.classList.add("shows__tixloc");

    const button = document.createElement("button");
    button.classList.add("shows__button");
    button.innerText = "BUY TICKETS";
    button.setAttribute("onclick", ".location.href='./shows.html';");

    tableBody.appendChild(tbodyRow);
    tableDate.appendChild(date);
    tableVenue.appendChild(venue);
    tableLocation.appendChild(loc);
    tbodyRow.appendChild(button);
  });
});
const apiKey = "?api_key=b6b1a148-8623-4365-be03-b1583abc254d";
const apiUrl = `https://project-1-api.herokuapp.com/showdates${apiKey}`;

const shows = document.querySelector(".shows");
axios.get(apiUrl).then((response) => {
  console.log(response);
  shows.innerHTML = "";
  const showTitle = document.createElement("h2");
  showTitle.classList.add("shows__title");
  showTitle.innerText = "Shows";
  shows.appendChild(showTitle);

  const showsMain = document.createElement("div");
  showsMain.classList.add("shows__main-titles");
  shows.appendChild(showsMain);

  const dateTitle = document.createElement("p");
  dateTitle.innerText = "DATE";
  dateTitle.classList.add("shows__main-date-title");
  showsMain.appendChild(dateTitle);

  const venueTitle = document.createElement("p");
  venueTitle.innerText = "VENUE";
  venueTitle.classList.add("shows__main-venue-title");
  showsMain.appendChild(venueTitle);

  const locTitle = document.createElement("p");
  locTitle.innerText = "LOCATION";
  locTitle.classList.add("shows__main-loc-title");
  showsMain.appendChild(locTitle);

  const dateText = document.createElement("div");

  const displayShows = response.data.forEach((showhead) => {
    const table = document.createElement("table");
    table.classList.add("shows__container");
    shows.appendChild(table);

    const tableHead = document.createElement("thead");
    table.appendChild(tableHead);
    const tableRow = document.createElement("tr");

    tableHead.appendChild(tableRow);

    const tableDate = document.createElement("h1");
    tableDate.innerText = "DATE";
    tableDate.classList.add("shows__head-title--date");
    dateText.appendChild(tableDate);

    const tableLoc = document.createElement("h1");
    tableLoc.innerText = "LOCATION";
    tableLoc.classList.add("shows__head-title--location");
    dateText.appendChild(tableLoc);

    const tableBody = document.createElement("tbody");
    table.appendChild(tableBody);

    const tbodyRow = document.createElement("tr");

    tbodyRow.classList.add("shows__array");

    const dateDiv = document.createElement("div");
    dateDiv.classList.add("date__info");
    tbodyRow.appendChild(dateDiv);

    const date = document.createElement("th");
    date.classList.add("shows__tixdate");
    const userDate = new Date(Number(showhead.date)).toLocaleDateString(
      "en-US"
    );
    date.innerText = userDate;
    dateDiv.appendChild(tableDate);
    console.log(typeof showhead.date);

    const venueDiv = document.createElement("div");
    venueDiv.classList.add("venue__info");
    tbodyRow.appendChild(venueDiv);

    const tableVenue = document.createElement("th");
    tableVenue.innerText = "VENUE";
    tableVenue.classList.add("shows__subtitle");
    tbodyRow.appendChild(tableVenue);

    const venue = document.createElement("td");
    venue.innerText = showhead.place;
    venue.classList.add("shows__tixvenue");

    const locDiv = document.createElement("div");
    locDiv.classList.add("loc__info");
    tbodyRow.appendChild(locDiv);

    const tableLocation = document.createElement("th");
    tableLocation.innerText = "LOCATION";
    tableLocation.classList.add("shows__subtitle");
    tbodyRow.appendChild(tableLocation);

    const loc = document.createElement("td");
    loc.innerText = showhead.location;
    loc.classList.add("shows__tixloc");

    const button = document.createElement("button");
    button.classList.add("shows__button");
    button.innerText = "BUY TICKETS";
    button.setAttribute("onclick", ".location.href='./shows.html';");

    tableBody.appendChild(tbodyRow);
    tableDate.appendChild(date);
    tableVenue.appendChild(venue);
    tableLocation.appendChild(loc);
    tbodyRow.appendChild(button);
  });
});
