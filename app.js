function runEnergyModel() {
  const start = Number(document.getElementById("start").value);
  const growth = Number(document.getElementById("growth").value) / 100;
  const years = Number(document.getElementById("years").value);

  let x = [];
  let y = [];
  let value = start;

  for (let i = 0; i <= years; i++) {
    x.push(i);
    y.push(value);
    value *= (1 + growth);
  }

  const trace = {
    x: x,
    y: y,
    type: "scatter",
    mode: "lines+markers"
  };

  const layout = {
    title: "Projected Energy Demand",
    xaxis: { title: "Years" },
    yaxis: { title: "Energy (TWh)" }
  };

  Plotly.newPlot("chart", [trace], layout);
}

// Scenario comparison
function runScenarios() {
  const base = 100;
  const years = 30;
  const rates = [0.01, 0.03, 0.05];
  const labels = ["Low", "Medium", "High"];
  let traces = [];

  rates.forEach((rate, i) => {
    let x = [];
    let y = [];
    let value = base;

    for (let t = 0; t <= years; t++) {
      x.push(t);
      y.push(value);
      value *= (1 + rate);
    }

    traces.push({
      x: x,
      y: y,
      mode: "lines",
      name: labels[i]
    });
  });

  Plotly.newPlot("scenarioChart", traces, {
    title: "Scenario Comparison",
    xaxis: { title: "Years" },
    yaxis: { title: "Energy (TWh)" }
  });
}
