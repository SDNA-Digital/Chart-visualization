const ctx = document.getElementById('myChart');
const ctx2 = document.getElementById('mySecondChart');


const legendas = []
const CountAreas = []

const endPoint = "http://127.0.0.1:8000/dataJson/"

const result = fetch(endPoint)
.then(res => res.json())
.then(dados =>{
dados.map(item => {
legendas.push(item.Area)
CountAreas.push(item.QtdeIncidentes)
chart_1.update()
chart_2.update()
}) 
})  

console.log(legendas)
console.log(CountAreas)

let chart_1 = new Chart(ctx, {
type: 'bar',
data: {
labels: legendas,
datasets: [{
label: 'Incidentes por area',
data: CountAreas,
borderWidth: 1,
backgroundColor: ['#95bfe6',
                '#78aee2',
                '#439cea',
                '#348fdf',
                '#2284d9',
                '#006ac5',
                ],
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

let chart_2 = new Chart(ctx2, {
type: 'doughnut',
data: {
labels: legendas,
datasets: [{
label: 'Incidentes por area',
data: CountAreas,
borderWidth: 1,
backgroundColor: ['#95bfe6',
                '#78aee2',
                '#439cea',
                '#348fdf',
                '#2284d9',
                '#006ac5',
                ],
borderColor: '#000' 
}],

}});