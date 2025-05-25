const salesData = {
  "2023": [120, 150, 170, 200],
  "2024": [180, 190, 210, 230],
};

const userData = {
  "Q1": [20, 30, 40, 50],
  "Q2": [60, 80, 90, 100],
};

let salesChart, userChart;

function renderSalesChart(data) {
  if (salesChart) salesChart.destroy();
  const ctx = document.getElementById("salesChart").getContext("2d");
  salesChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr"],
      datasets: [{
        label: "Sales",
        data: data,
        backgroundColor: "rgba(59, 130, 246, 0.6)",
      }]
    },
    options: {
      responsive: true,
      animation: {
        duration: 1000,
      }
    }
  });
}

function renderUserChart(data) {
  if (userChart) userChart.destroy();
  const ctx = document.getElementById("userChart").getContext("2d");
  userChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: [{
        label: "Users",
        data: data,
        fill: true,
        borderColor: "rgba(16, 185, 129, 1)",
        backgroundColor: "rgba(16, 185, 129, 0.2)",
      }]
    },
    options: {
      responsive: true,
      animation: {
        duration: 1000,
      }
    }
  });
}

// Event listeners
document.getElementById("salesFilter").addEventListener("change", (e) => {
  renderSalesChart(salesData[e.target.value]);
});

document.getElementById("userFilter").addEventListener("change", (e) => {
  renderUserChart(userData[e.target.value]);
});

// Initial load
renderSalesChart(salesData["2023"]);
renderUserChart(userData["Q1"]);
