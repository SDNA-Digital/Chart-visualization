const ctx = document.getElementById('myChart');
const ctx2 = document.getElementById('mySecondChart');

const ChartData = [
    {
       legenda: "Marketing",
       count: 18
    },
    {  
       legenda: "Financeiro",
       count: 10
   
    },
    {  
       legenda: "Operacional",
       count: 20
   
    },
    {  
       legenda: "Juridico",
       count: 13
   
    },
    {  
       legenda: "Recursos humanos",
       count: 7
   
    } 
   ]

const legendasArea = ChartData.map(teste => teste.legenda)
const countArea = ChartData.map(teste => teste.count)
  
   
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: legendasArea,
    datasets: [{
      label: 'Incidentes por area',
      data: countArea,
      borderWidth: 1,
      backgroundColor: ['rgba(255, 99, 132, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 205, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(201, 203, 207, 0.2)'],
    borderColor: '#000' 
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: ['financeiro', 'juridico', 'marketing', 'operacional', 'recursos humanos', 'comercial'],
    datasets: [{
      label: 'Incidentes por area',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1,
      backgroundColor: ['rgba(255, 99, 132, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 205, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(201, 203, 207, 0.2)'],
    borderColor: '#000' 
    }],

}});