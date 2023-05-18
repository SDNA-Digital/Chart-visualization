const ctx5 = document.getElementById('graph4')
const endpoint5 = "http://127.0.0.1:8000/Matriz_Probabilidade_impacto/"

const result5 = fetch(endpoint5)
.then(response => response.json())
.then(data => {
  const jsonData = data
  const Probabilidades = [...new Set(jsonData.map(item => item.Probabilidade))];
  const Impactos = [...new Set(jsonData.map(item => item.Impacto))];
  const contagem = {};
  for (const Probabilidade of Probabilidades) {
    contagem[Probabilidade] = {};
    for (const Impacto of Impactos) {
      contagem[Probabilidade][Impacto] = 0;
    }
  }
  for (const item of jsonData) {
    const Probabilidade = item.Probabilidade;
    const Impacto = item.Impacto;
    contagem[Probabilidade][Impacto]++;
  }
  const chartData = {
    labels: Impactos,
    datasets: []
  };
  for (const Probabilidade of Probabilidades) {
    const dataset = {
      label: Probabilidade,
      data: Object.values(contagem[Probabilidade]),
      backgroundColor: '#95bfe6'
    };
    chartData.datasets.push(dataset);
  }
  const chartConfig = {
    type: 'scatter',
    data: chartData,
    options: {
      responsive: true,
      legend: {
        position: 'top',
      },
      scales: {
        x: {
          type: 'linear',
          position: 'bottom'
        },
        y: {
          type: 'linear',
          position: 'left'
        }
      }
    }
  };
  const graph4 = new Chart(document.getElementById('graph4'), chartConfig);
})
