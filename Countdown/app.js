const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const opening = document.querySelector(".opening");
  const countDown = document.querySelector(".count-down");
  const title = document.querySelector("h2");

  let tempDate = new Date();
  let tempYear = tempDate.getFullYear();
  let tempMonth = tempDate.getMonth();
  let tempDay = tempDate.getDate();

  const openingDate = new Date(tempYear, tempMonth, tempDay + 20, 10, 30, 0);

  const year = openingDate.getFullYear();
  const hours = openingDate.getHours();
  const minutes = openingDate.getMinutes();

  let month = months[openingDate.getMonth()];
  const dayOfWeek = daysOfWeek[openingDate.getDay()];
  const date = openingDate.getDate();
  opening.textContent = `The store will open on ${dayOfWeek}, ${date} ${month} ${year} ${hours}:${minutes}am`;

  const openingTime = openingDate.getTime();

  function remainingTime() {

    const currentTime =  new Date().getTime();
    const timeGap = openingTime - currentTime;

    //The logic of how time works
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60m
    // 1d = 24hr
    // values in miliseconds
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    // calculate all values
    let days = Math.floor(timeGap / oneDay);
    let hours = Math.floor((timeGap % oneDay) / oneHour);
    let minutes = Math.floor((timeGap % oneHour) / oneMinute);
    let seconds = Math.floor((timeGap % oneMinute) / 1000);

    document.querySelector(".day").innerText = days;
    document.querySelector(".hour").innerText = hours;
    document.querySelector(".minute").innerText = minutes;
    document.querySelector(".second").innerText = seconds;

    if( timeGap < 0){
        clearInterval(countdown);
        countDown.innerHTML = `<h4 class="opened">We are open now!</h4>`;
        title.innerHTML = `<h4 class="opened">Welcome!</h4>`
    }
}

//countdown 
let countdown = setInterval(remainingTime, 1000);

//call function remainingTime to set initial values
remainingTime();