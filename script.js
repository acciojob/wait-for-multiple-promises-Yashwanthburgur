const createPromise = (num) => {
  // random delay between 1 and 3 seconds
  const delay = Number((Math.random() * 2 + 1).toFixed(3));

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: `Promise ${num}`,
        time: delay
      });
    }, delay * 1000);
  });
};

// Start time before Promise.all
const start = performance.now();

const promises = [
  createPromise(1),
  createPromise(2),
  createPromise(3)
];

Promise.all(promises).then((results) => {
  const table = document.getElementById("output");

  // remove the default Loading... row
  table.innerHTML = "";

  // Add rows for each promise
  results.forEach((result) => {
    const row = table.insertRow();
    row.insertCell().textContent = result.name;
    row.insertCell().textContent = result.time.toFixed(3);
  });

  // REAL elapsed time after all promises resolve
  const totalTime = ((performance.now() - start) / 1000).toFixed(3);

  const totalRow = table.insertRow();
  totalRow.insertCell().textContent = "Total";
  totalRow.insertCell().textContent = totalTime;
});
