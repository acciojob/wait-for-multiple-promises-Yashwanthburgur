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

// Track total start time for Promise.all
const totalStart = performance.now();
const promises = [createPromise(1), createPromise(2), createPromise(3)];

Promise.all(promises)
  .then((results) => {
    const table = document.getElementById('output');
    table.innerHTML = '';
    
    let maxTime = 0;
    
    // Display each promise's random delay as time taken
    results.forEach((result) => {
      const row = table.insertRow();
      row.insertCell().textContent = result.name;
      row.insertCell().textContent = result.time.toFixed(3);
      
      if (result.time > maxTime) {
        maxTime = result.time;
      }
    });
    
    // Calculate actual total time taken by Promise.all
    const totalRow = table.insertRow();
	totalRow.insertCell().textContent = 'Total';
	totalRow.insertCell().textContent = maxTime.toFixed(3);
  });