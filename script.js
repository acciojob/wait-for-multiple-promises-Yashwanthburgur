const output = document.getElementById("output");

const createPromise = (index) => {
  const time = Math.random() * 2 + 1; // Between 1 and 3
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: `Promise ${index}`, time: time.toFixed(3) });
    }, time * 1000);
  });
};

const promises = [createPromise(1), createPromise(2), createPromise(3)];

const startTime = Date.now();

Promise.all(promises).then((results) => {
  const totalTime = (Date.now() - startTime) / 1000;
  
  // 1. Remove loading row
  output.innerHTML = "";

  // 2. Add individual rows
  results.forEach((res) => {
    const row = `<tr><td>${res.name}</td><td>${res.time}</td></tr>`;
    output.innerHTML += row;
  });

  // 3. Add total row
  const totalRow = `<tr><td>Total</td><td>${totalTime.toFixed(3)}</td></tr>`;
  output.innerHTML += totalRow;
});