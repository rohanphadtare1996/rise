(async function(){
  const priceEl = document.getElementById("price");
  const updatedEl = document.getElementById("updated");

  async function loadPrice(){
    try {
      // Basic placeholder for now (can later connect to oracle API)
      priceEl.innerText = "$" + (Math.random() * 100).toFixed(2);
      updatedEl.innerText = "Updated: " + new Date().toLocaleTimeString();
    } catch {
      priceEl.innerText = "N/A";
    }
  }

  await loadPrice();
  setInterval(loadPrice, 30000);
})();
