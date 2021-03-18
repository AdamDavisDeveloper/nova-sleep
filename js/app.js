//Global Variables
const fitbitAccessToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMkM1VEQiLCJzdWIiOiI4TU5MUUQiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyc29jIHJsb2MgcmhyIHJwcm8gcnNsZSIsImV4cCI6MTYxODM2OTYyOSwiaWF0IjoxNjE1Nzc3NjI5fQ.IbQCdHRiBUCcp2KIcqQKfGbX0XqGDfQdyqG_PTdnB5o";

//Store daily resting heart rate
function getRest(restData) {
  console.log(restData);
}

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
    .then((timeSeries) => {
      const seriesLength =
        timeSeries["activities-heart-intraday"].dataset.length - 1;
      console.log(
        timeSeries["activities-heart-intraday"].dataset[seriesLength].value
      );
    });
  setTimeout(getHeartrate, 30000);
}

//Fetch daily resting heart rate
function restingHeartrate() {
  fetch("https://api.fitbit.com/1/user/-/activities/heart/date/today/1d.json", {
    method: "GET",
    headers: { Authorization: "Bearer " + fitbitAccessToken },
  })
    .then((response) => response.json())
    .then((json) =>
      getRest(json["activities-heart"][0].value.restingHeartRate)
    );
}

restingHeartrate();
