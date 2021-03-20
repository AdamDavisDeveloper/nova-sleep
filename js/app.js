//Modules
import { playBtn, timeStart } from "./dom.js";
import { time } from "./time.js";

//Event Listeners
playBtn.addEventListener("click", () => {
  play(true);
});

//Global Variables
const fitbitAccessToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMkM1VEQiLCJzdWIiOiI4TU5MUUQiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyc29jIHJsb2MgcmhyIHJwcm8gcnNsZSIsImV4cCI6MTYxODM2OTYyOSwiaWF0IjoxNjE1Nzc3NjI5fQ.IbQCdHRiBUCcp2KIcqQKfGbX0XqGDfQdyqG_PTdnB5o";

//Get most recent heart rate reported of user
//Updated every 30sec (per the API constraints)
function getHeartrate() {
  fetch(
    "https://api.fitbit.com/1/user/-/activities/heart/date/today/1d/1sec.json",
    {
      method: "GET",
      headers: { Authorization: "Bearer " + fitbitAccessToken },
    }
  )
    .then((response) => response.json())
    .then(compare);
  setTimeout(getHeartrate, 30000);
}

function compare(json) {
  const seriesLength = json["activities-heart-intraday"].dataset.length - 1;
  let currentHr = json["activities-heart-intraday"].dataset[seriesLength].value;
  let restHr = json["activities-heart"][0].value.restingHeartRate;
  console.log("Current: " + currentHr);
  console.log("Daily Resting: " + restHr);

  if (currentHr < restHr) {
    change("asleep");
  } else if (currentHr > restHr) {
    change("awake");
  } else {
    console.log(
      "Error: unable to get current heart rate or resting heart rate"
    );
  }
}

function change(userState) {
  switch (userState) {
    case "asleep":
      console.log("You are asleep now!");
      play(false);
    case "awake":
      console.log("You are awake now!");
  }
}

function play(bool) {
  let isPlaying = bool;
  let playTime = time();
  timeStart.innerHTML = playTime;
}

// getHeartrate();
