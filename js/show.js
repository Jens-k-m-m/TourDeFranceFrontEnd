const reset = document.getElementById('reset');
reset.addEventListener("click", resetWeb);
const table = document.getElementById('table');

// find
const input = document.getElementById('search-input');
const search = document.getElementById('search');

//find
async function getRidersBySearch(searchFirstName) {
  const url = "http://localhost:8080/byFirstName/riders/" + searchFirstName;
  const resp = await fetch(url);
  const respData = await resp.json();
  console.log(respData);
  resetTable();
  addDataToRows(respData);
}
//find
search.addEventListener("click", () => {
  const firstName = input.value;

  if (firstName) {
    console.log(firstName+"frssss");

    getRidersBySearch(firstName);
  }

})
//find

function resetTable() {
  table.innerHTML="";
  tableHeadlines();
}
function resetWeb() {
  table.innerHTML="";
  getRiders()
  tableHeadlines()
}


async function getRiders() {
  const url = "http://localhost:8080/show/riders";
  const resp = await fetch(url);
  const respData = await resp.json();
  addDataToRows(respData);
  console.log(respData + "respData WWAAZZA");
}

function tableHeadlines() {
  let rowCount = table.rows.length;
  let row = table.insertRow(rowCount);
  row.insertCell(0).innerText = "Id";
  row.insertCell(1).innerText = "First Name";
  row.insertCell(2).innerText = "Last Name";
  row.insertCell(3).innerText = "Age";
  row.insertCell(4).innerText = "Time";
  row.insertCell(5).innerText = "Point";
  row.insertCell(6).innerText = "Mountain Points";
  row.insertCell(7).innerText = "Country";
  row.insertCell(8).innerHTML = "Team Id";
  row.insertCell(9).innerHTML = "Team Name";
  row.insertCell(10).innerHTML = "Team Country";
}

function addDataToRows(data) {
  // const table = document.getElementById('storeList').getElementsByTagName('tbody')[0];
  console.log(data + "dataWW")
  data.forEach(element => {
    let rowCount = table.rows.length;
    let row = table.insertRow(rowCount);
    row.insertCell(0).innerHTML = element.riderId;
    row.insertCell(1).innerHTML = element.riderFirstName;
    row.insertCell(2).innerHTML = element.riderLastName;
    row.insertCell(3).innerHTML = element.riderAge;
    row.insertCell(4).innerHTML = element.riderTime;
    row.insertCell(5).innerHTML = element.riderPoint;
    row.insertCell(6).innerHTML = element.riderMountainPoints;
    row.insertCell(7).innerHTML = element.riderCountry;
    row.insertCell(8).innerHTML = element.team.teamId;
    row.insertCell(9).innerHTML = element.team.teamName;
    row.insertCell(10).innerHTML = element.team.teamCountry;
  })
}
function reloadTable(){

  resetTable();
  getRiders();
}
reloadTable();

