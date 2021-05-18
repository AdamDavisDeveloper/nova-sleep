//New User Authentication redirect
// This will be used once the app is ready to accept multiple users with
// seperate accounts.
let fitbitAccessToken;

if (!window.location.hash) {
  window.location.replace(
    "https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=227H22&redirect_uri=https%3A%2F%2F15359f83.ngrok.io%2F&scope=activity%20nutrition%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight"
  );
} else {
  let fragmentQueryParameters = {};
  window.location.hash
    .slice(1)
    .replace(
      new RegExp("([^?=&]+)(=([^&]*))?", "g"),
      function ($0, $1, $2, $3) {
        fragmentQueryParameters[$1] = $3;
      }
    );

  fitbitAccessToken = fragmentQueryParameters.access_token;
}
