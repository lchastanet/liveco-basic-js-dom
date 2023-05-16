const btn = document.querySelector("button");
const cookie = document.querySelector(".score");

let count = 0;

btn.addEventListener("click", function () {
  cookie.textContent = count++;
});

const addBtn = document.querySelector("#addBtn");

addBtn.addEventListener("click", function () {
  const workerBox = document.createElement("div");
  workerBox.classList.add("worker-box");

  const workerText = document.createElement("p");
  workerText.textContent = "worker#";

  workerBox.appendChild(workerText);

  const stopWorkerButton = document.createElement("button");
  stopWorkerButton.textContent = "❌";

  const interval = setInterval(function () {
    count = count + 10;
    cookie.textContent = count;
  }, 1000);

  stopWorkerButton.addEventListener("click", function () {
    workerBox.remove();
    clearInterval(interval);
  });

  setTimeout(function () {
    workerBox.remove();
    clearInterval(interval);
  }, 15000);

  workerBox.appendChild(stopWorkerButton);

  const entryPoint = document.querySelector(".worker-list");

  entryPoint.appendChild(workerBox);
});
