function getTime(timezone, time = getUTCNow()) {
  console.log(timezone);
  const date = new Date(time + timezone * 1000);
  console.log(date);
  return date.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function getDate(timezone) {
  console.log(timezone);
  const date = new Date(getUTCNow() + timezone * 1000);
  console.log(date);
  return date.toLocaleDateString(undefined, {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function getUTCNow() {
  var now = new Date();
  var time = now.getTime();
  var offset = now.getTimezoneOffset();
  offset = offset * 60000;
  return time + offset;
}

const DateService = {
  getTime,
  getDate,
};

export default DateService;
