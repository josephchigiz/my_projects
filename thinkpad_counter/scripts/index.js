// Render welcome message
let haveFun = document.getElementById("have-fun");

function greetings() {
  let myName = document.getElementById("my-name").value;

  haveFun.textContent += myName;
  haveFun.textContent += "!💻";

  document.getElementById("welcome-scr").style.display = "none";
  document.getElementById("main-scr").style.display = "flex";
  let count;
  count = 0;

  let countLog = document.getElementById("count-el");
  let incBtn = document.getElementById("increment-btn");
  let saveEl = document.getElementById("save-el");

  function increment() {
    incBtn.textContent = "SEEN ANOTHER";
    count += 1;
    countLog.innerText = count;
    console.log(countLog);
  }

  function save() {
    let countStr = count + " -";
    // saveEl.innerText += countStr
    // innerText only shows human readable content hence the space in our p is lost
    // hence we use .textcontent instead
    saveEl.textContent += countStr;
    console.log(countStr);
    console.log(count);
    incBtn.textContent = "SEEN ONE";
    count = 0;
    countLog.textContent = count;
  }
}
