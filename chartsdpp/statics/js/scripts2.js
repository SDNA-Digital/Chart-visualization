const ctx = document.getElementById('Card1');

const legendas = [];
const CountProcessos = [];

const endPoint = "http://127.0.0.1:8000/Card_ProcessosMapeados/";

const result = fetch(endPoint)
.then(res => res.json())
.then(dados => {
  dados.map(item => {
    legendas.push(item.Processos_mapeados);
    CountProcessos.push(item.Processos_mapeados);
    chart_1.update();
  }) 
});

console.log(legendas);
console.log(CountProcessos);

let chart_1 = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: legendas,
      datasets: [{
        label: 'Processos mapeados',
        data: CountProcessos,
        borderWidth: 0,
        backgroundColor: ['#36A2EB'],
        borderColor: '#000' 
      }]
    },
    options: {
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          display: false,
          barThickness: 40
        }],
        yAxes: [{
          display: false,
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });