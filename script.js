const apiKey = "0afce234-885a-425c-bf15-12cd928aea13";  // Replace with your Upstox API key
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
