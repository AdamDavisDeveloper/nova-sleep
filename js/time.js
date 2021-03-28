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

export function getUTCYesterday() {
  let date = new Date();
  let year = date.getUTCFullYear();
  let month = date.getUTCMonth() + 1;
  month = "0" + month;
  let day = date.getUTCDate() - 1;
  return year + "-" + month + "-" + day;
}
