export function time() {
  let currentDate = new Date();
  let hourInit = currentDate.getHours();
  let minute = currentDate.getMinutes();
  let hour;

  if (minute < 10) {
    minute = "0" + minute;
  }
  if (hourInit > 12) {
    hour = hourInit -= 12;
    return hour + ":" + minute + " pm";
  } else {
    hour = hourInit;
    return hour + ":" + minute + " am";
  }
}
