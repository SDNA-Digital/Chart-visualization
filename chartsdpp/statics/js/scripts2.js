const ctx = document.getElementById('graph1');
const ctx2 = document.getElementById('graph2')
const endPoint1 = "http://127.0.0.1:8000/Dash_Processo/"
const endPoint2 = "http://127.0.0.1:8000/Dash_ProcessoxArea/"

const result1 = fetch(endPoint1)


.then(response => response.json())
.then(data => {
  const months = data.map(obj => obj.Mes)
  const baixoData = data.map(obj => obj.Baixo)
  const moderadoData = data.map(obj => obj.Moderado)
  const altoData = data.map(obj => obj.Alto)
  const muitoBaixoData = data.map(obj => obj['Muito Baixo'])
  const muitoAltoData = data.map(obj => obj['Muito Alto'])
  //graph1.update()

  const chartData1 = {
    labels: months,
    datasets: [
      {
        label: 'Muito Baixo',
        data: muitoBaixoData,
        backgroundColor: '#66bfec',
      },
      {
        label: 'Baixo',
        data: baixoData,
        backgroundColor: '#2499EA',
      },
      {
        label: 'Moderado',
        data: moderadoData,
        backgroundColor: '#2483ea',
      },
      {
        label: 'Alto',
        data: altoData,
        backgroundColor: '#2839d9',
      },
      {
        label: 'Muito Alto',
        data: muitoAltoData,
        backgroundColor: '#0413a2',
      },
    ],
  };
  const chartConfig = {
    type: 'bar',
    data: chartData1,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
      },
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
          ticks: {
            beginAtZero: true,
          },
        },
      },
    },
  };
  const graph1 = new Chart(document.getElementById('graph1'), chartConfig);
})
.catch(error => console.error(error));