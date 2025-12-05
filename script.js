const createPromise = (num) => {
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

// Measure actual time Promise.all takes
const totalStart = performance.now();

const promises = [
  createPromise(1),
  createPromise(2),
  createPromise(3)
];

Promise.all(promises).then((results) => {
  const table = document.getElementById("output");

  // REMOVE ONLY the loading row
  table.innerHTML = "";

  // Fill each promise row
  results.forEach((res) => {
    const row = table.insertRow();
    row.insertCell().textContent = res.name;
    row.insertCell().textContent = res.time.toFixed(3);
  });

  // Total actual time (NOT max delay)
  const totalTime = ((performance.now() - totalStart) / 1000).toFixed(3);

  const totalRow = table.insertRow();
  totalRow.insertCell().textContent = "Total";
  totalRow.insertCell().textContent = totalTime;
});
