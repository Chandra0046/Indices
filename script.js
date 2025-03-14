const apiKey = "cc867123-f9c5-4ff4-810b-510a5fbc626f";  // Replace with your Upstox API key
const symbol = "NSE_EQ-RELIANCE";  // Change to any stock symbol

async function fetchStockPrice() {
    try {
        let response = await fetch(`https://api.upstox.com/v2/market-quote/${symbol}`, {
            method: "GET",
            headers: { "Authorization": `Bearer ${apiKey}` }
        });
        let data = await response.json();
        document.getElementById("reliance-price").innerText = `₹ ${data.data.last_price}`;
    } catch (error) {
        console.error("Error fetching stock data:", error);
    }
}

// Fetch stock price every 10 seconds
setInterval(fetchStockPrice, 10000);
fetchStockPrice();
