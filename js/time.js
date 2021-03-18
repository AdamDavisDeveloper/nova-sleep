export function time() {
  let currentDate = new Date();
  let hour = currentDate.getHours();
  let minute = currentDate.getMinutes();

  if (hour > 12) {
    hour -= 12;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }

  return hour + ":" + minute;
}
