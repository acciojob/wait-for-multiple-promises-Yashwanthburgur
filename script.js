const createPromise = (num) => {
  const delay = Number((Math.random() * 2 + 1).toFixed(3));
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: `Promise ${num}`,
        time: delay.toFixed(3)  // FIX: Format to 3 decimals
      });
    }, delay * 1000);
  });
};

// Create 3 promises
const promises = [
  createPromise(1),
  createPromise(2),
  createPromise(3)
];

// Start timing
const totalStart = performance.now();

// Wait for all promises
Promise.all(promises)
  .then((results) => {
    const totalEnd = performance.now();
    const totalTime = ((totalEnd - totalStart) / 1000).toFixed(3);
    
    // Get the output table body
    const output = document.getElementById('output');
    
    // Clear loading row
    output.innerHTML = '';
    
    // Add each promise result
    results.forEach((result) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${result.name}</td>
        <td>${result.time}</td>
      `;
      output.appendChild(row);
    });
    
    // Add TOTAL row
    const totalRow = document.createElement('tr');
    totalRow.innerHTML = `
      <td>Total</td>
      <td>${totalTime}</td>
    `;
    output.appendChild(totalRow);
  })
  .catch((error) => {
    console.error('Error:', error);
  });