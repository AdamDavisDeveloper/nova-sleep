const fitbitAccessToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMkM1VEQiLCJzdWIiOiI4TU5MUUQiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyc29jIHJsb2MgcmhyIHJwcm8gcnNsZSIsImV4cCI6MTYxODM2OTYyOSwiaWF0IjoxNjE1Nzc3NjI5fQ.IbQCdHRiBUCcp2KIcqQKfGbX0XqGDfQdyqG_PTdnB5o";


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


// getHeartrate();

//Proper Function of the working above
// async function getFitbitData() {
//   const accessToken =
//     "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMkM1VEQiLCJzdWIiOiI4TU5MUUQiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyc29jIHJsb2MgcmhyIHJwcm8gcnNsZSIsImV4cCI6MTYxODM2OTYyOSwiaWF0IjoxNjE1Nzc3NjI5fQ.IbQCdHRiBUCcp2KIcqQKfGbX0XqGDfQdyqG_PTdnB5o";
//   const heartRateUrl =
//     "https://api.fitbit.com/1/user/-/activities/heart/date/today/1d/1sec.json";

//   const response = await fetch(heartRateUrl, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Bearer " + accessToken,
//     },
//   }).then(processResponse);
// }
