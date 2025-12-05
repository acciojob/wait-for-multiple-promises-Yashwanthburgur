// Store resolve time for each promise
const createPromise = (num) => {
  const start = performance.now();
  const delay = Number((Math.random() * 2 + 1).toFixed(3)) * 1000;
  
  return new Promise((resolve) => {
    setTimeout(() => {
      const resolveTime = (performance.now() - start) / 1000;
      resolve({
        name: `Promise ${num}`,
        time: resolveTime
      });
    }, delay);
  });
};

const startAll = performance.now();
const promises = [createPromise(1), createPromise(2), createPromise(3)];

Promise.all(promises)
  .then((results) => {
    const table = document.getElementById('output');
    table.innerHTML = '';
    
    let totalTime = 0;
    
    results.forEach((result) => {
      const row = table.insertRow();
      row.insertCell().textContent = result.name;
      row.insertCell().textContent = result.time.toFixed(3);
      
      if (result.time > totalTime) {
        totalTime = result.time;
      }
    });
    
    // Add total row
    const totalRow = table.insertRow();
    totalRow.insertCell().textContent = 'Total';
    totalRow.insertCell().textContent = totalTime.toFixed(3);
  });