const timeElement = document.querySelector(".time");
const btnMenos = document.querySelector(".btnMenos").addEventListener("click", () => { start(0)});
const btnMais = document.querySelector(".btnMais").addEventListener("click", () => { start(1)});
const numero = document.querySelector(".numero");
var valor = 0;

/**
 * @param {Date} date
 */
function formatTime(date) {
  const hours12 = date.getHours() % 12 || 12;
  const minutes = date.getMinutes();
  const isAm = date.getHours() < 12;

  return `${hours12.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")} ${isAm ? "AM" : "PM"}`;
}

/**
 * @param {Date} date
 */
function formatDate(date) {
  const DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  return `${DAYS[date.getDay()]}, ${
    MONTHS[date.getMonth()]
  } ${date.getDate()} ${date.getFullYear()}`;
}


function start(x) {

    if(numero.textContent > 0)
    {
        if (x == 0) 
            valor = valor - 1;
    }

    if (x == 1) 
        valor = valor + 1;

numero.textContent = valor;
}


setInterval(() => {
  const now = new Date();

  timeElement.textContent = formatTime(now);

}, 200);
