const out = function (str) {
  console.log(str);
}

// const riderId = document.getElementById('riderId');
const riderFirstName = document.getElementById('riderFirstName');
const riderLastName = document.getElementById('riderLastName');
const riderAge = document.getElementById('riderAge');
const riderTime = document.getElementById('riderTime');
const riderPoint = document.getElementById('riderPoint');
const riderMountainPoints = document.getElementById('riderMountainPoints');
const riderCountry = document.getElementById('riderCountry');
const teamId = document.getElementById('select');
const create = document.getElementById('create');

async function createRider() {
  const url = "http://localhost:8080/create/riders";
  out(url);
  const riderData = {
    riderFirstName: riderFirstName,
    riderLastName: riderLastName,
    riderAge: riderAge,
    riderTime: riderTime,
    riderPoint: riderPoint,
    riderMountainPoints:riderMountainPoints,
    riderCountry: riderCountry,
    // Nest Objet in en objet finder specifik ind i objet, havd jeg skal bruge.
    team: {
      teamId: teamId.value,
      teamName: teamId.value,
      teamCountry: teamId.value

    }

  }

  out(riderData);
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(riderData),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  if (!response.ok) {
    alert("Could not create");
  } else {
    alert("is created" + riderData.riderFirstName);
  }
  reloadTable();
}

create.addEventListener("click", () => {
  console.log(riderId.value + "value");
  createRider();
})

