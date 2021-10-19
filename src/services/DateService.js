function getTime(timezone) {
  console.log(timezone);
  const date = new Date(getUTCNow() + timezone * 1000);
  console.log(date);
  return date.toLocaleTimeString(undefined, {
    hour: "numeric",
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

function formatTime(time) {
  console.log(time);
  const date = new Date(time * 1000);
  console.log(date);

  return date.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit",
  });
}

function formatDay(time) {
    console.log(time);
    const date = new Date(time * 1000);
    console.log(date);
  
    return date.toLocaleString(undefined, {
      weekday: "short"
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
  formatTime,
  formatDay
};

export default DateService;
