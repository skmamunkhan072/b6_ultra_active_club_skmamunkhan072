let previesSeconds = 0;
let newSecondsLocal;

const addToSeconds = (e) => {
  const seconds = e?.target?.innerText;
  if (seconds !== "s") {
    const newSeconds = seconds.slice(0, 2);
    sumAllSeconds(parseFloat(newSeconds));
    console.log(newSeconds);
  } else {
    const newSeconds = e.target.parentElement.innerText.slice(0, 2);
    console.log(newSeconds);
    sumAllSeconds(parseFloat(newSeconds));
  }
};
const sumAllSeconds = (second) => {
  previesSeconds += second;
  addBrackSecondLocalStorag();
};

const newSeconds = localStorage.getItem("addBrackSecond");
const addBrackSecondLocalStorag = () => {
  if (newSeconds) {
    newSecondsLocal = JSON.parse(newSeconds);
  } else {
    newSecondsLocal = {};
  }
  localStorage.setItem("addBrackSecond", JSON.stringify(previesSeconds));
};
export { addToSeconds };
