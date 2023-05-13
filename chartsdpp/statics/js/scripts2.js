const ctx = document.getElementById('graph1');
const ctx2 = document.getElementById('graph2');
const ctx3 = document.getElementById('Card1');
const ctx4 = document.getElementById('graph3')
const endPoint1 = "http://127.0.0.1:8000/Dash_Processo/"
const endPoint2 = "http://127.0.0.1:8000/Dash_ProcessosxArea/"
const endPoint3 = "http://127.0.0.1:8000/Card_ProcessosMapeados/"
const endPoint4 = "http://127.0.0.1:8000/Dash_PlanosMitigantes/"


const result3 = fetch(endPoint3)
.then(response => response.json())
.then(data => {
  console.log(data)
ctx3.innerHTML = data[0].Processos_mapeados
let CardTitulo = "Quantidade de processos mapeados";
let CardTituloDiv = document.getElementById("CardTituloDiv");

CardTituloDiv.innerHTML = CardTitulo;

})
let CardTitulo2 = "Quantidade de processos por nivel de risco";
let CardTituloDiv2 = document.getElementById("CardTituloDiv2");

CardTituloDiv2.innerHTML = CardTitulo2;
const result1 = fetch(endPoint1)
.then(response => response.json())
.then(data => {
  const months = data.map(obj => obj.Mes)
  const baixoData = data.map(obj => obj.Baixo)
  const moderadoData = data.map(obj => obj.Moderado)
  const altoData = data.map(obj => obj.Alto)
  const muitoBaixoData = data.map(obj => obj['Muito Baixo'])
  const muitoAltoData = data.map(obj => obj['Muito Alto'])
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
///////////////////////////////////////

let CardTitulo3 = "Quantidade de processos por nivel de risco x Area";
let CardTituloDiv3 = document.getElementById("CardTituloDiv3");

CardTituloDiv3.innerHTML = CardTitulo3;
const result2 = fetch(endPoint2)
.then(response => response.json())
.then(data => {
  const areasID =   {
    1: 'Juridico',
    2: 'Operacional',
    3: 'Financeiro',
    4: 'RH',
    5: 'Comercial',
    6: 'Administrativo'
  };
  data.forEach((obj) => {
    obj.Area = areasID[obj.Area];
  });
  const areas = data.map(obj => obj.Area)
  const baixoData = data.map(obj => obj.Baixo)
  const moderadoData = data.map(obj => obj.Moderado)
  const altoData = data.map(obj => obj.Alto)
  const muitoBaixoData = data.map(obj => obj['Muito Baixo'])
  const muitoAltoData = data.map(obj => obj['Muito Alto'])
  //graph1.update()

  const chartData2 = {
    labels: areas,
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
    data: chartData2,
    options: {
      indexAxis: 'y',
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
  const graph2 = new Chart(document.getElementById('graph2'), chartConfig);
})
.catch(error => console.error(error));

let CardTitulo4 = "Quantidade de planos mitigantes por status";
let CardTituloDiv4 = document.getElementById("CardTituloDiv4");

CardTituloDiv4.innerHTML = CardTitulo4;
const result4 = fetch(endPoint4)
.then(response => response.json())
.then(data => {
  const months = data.map(obj => obj['mes_criacao'])
  const naoiniciadoData = data.map(obj => obj['Nao iniciado'])
  const emandamentoData = data.map(obj => obj['Em andamento'])
  const emaprovacaoData = data.map(obj => obj['Em aprovacao'])
  const concluidoData = data.map(obj => obj.Concluido)
  const canceladoData = data.map(obj => obj.Cancelado)
  const chartData3 = {
    labels: months,
    datasets: [
      {
        label: 'Nao iniciado',
        data: naoiniciadoData,
        backgroundColor: '#66bfec',
      },
      {
        label: 'Em andamento',
        data: emandamentoData,
        backgroundColor: '#2499EA',
      },
      {
        label: 'Em aprovacao',
        data: emaprovacaoData,
        backgroundColor: '#2483ea',
      },
      {
        label: 'Concluido',
        data: concluidoData,
        backgroundColor: '#2839d9',
      },
      {
        label: 'Cancelado',
        data: canceladoData,
        backgroundColor: '#d42f0c',
      },
    ],
  };
    const chartConfig = {
      type: 'bar',
      data: chartData3,
      options: {
        responsive: true,
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
      plugins: [ChartDataLabels],
      legend: {
        position: 'top',
      }
    };
    const graph3 = new Chart(document.getElementById('graph3'), chartConfig);
  })