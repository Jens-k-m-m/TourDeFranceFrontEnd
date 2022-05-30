const out = function (str) {
  console.log(str);
}
const riderId = document.getElementById('riderId');
const riderFirstName = document.getElementById('riderFirstName');
const riderLastName = document.getElementById('riderLastName');
const riderAge = document.getElementById('riderAge');
const riderTime = document.getElementById('riderTime');
const riderPoint = document.getElementById('riderPoint');
const riderMountainPoints = document.getElementById('riderMountainPoints');
const riderCountry = document.getElementById('riderCountry');

async function createRider() {
  const url = "http://localhost:8080/create/riders";
  const riderData = {
    riderId: riderId,
    riderFirstName: riderFirstName,
    riderLastName: riderLastName,
    riderAge: riderAge,
    riderTime: riderTime,
    riderPoint: riderPoint,
    riderMountainPoints,
    riderCountry: riderCountry,
    // Nest Objet in en objet finder specifik ind i objet, havd jeg skal bruge.
    team: {
      teamId: teamId.value,
      teamName: teamName.value,
      teamCountry: teamCountry
    }
  }
  out(riderData);
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  if (!response.ok) {
    alert("Could not create");
  } else {
    alert("is created");
  }
  reloadTable();
}

create.addEventListener("click", () => {
  console.log(riderId.value + "value");
  createRider();
})

