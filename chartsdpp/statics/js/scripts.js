const ctx = document.getElementById('myChart');
const ctx2 = document.getElementById('mySecondChart');
const ctx3 = document.getElementById('mythirdChart');
const ctx4 = document.getElementById('Chart4');


const legendas = []
const CountAreas = []

let nmbrStatus =[0,0,0]


const endPoint = "http://127.0.0.1:8000/dataJson/"
const PoliManu = "http://127.0.0.1:8000/Dash_Politicas_Manuais/"
const normas = "http://127.0.0.1:8000/Dash_Normas/"

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

const resultPoliManu = fetch(PoliManu)
.then(res => res.json())
.then(dados =>{
    dados.map(item =>{
        dataresult = new Date(item.documentoprazovalidade)
        difdate = dataresult - new Date()
        difdate = difdate / (1000 * 60 * 60 * 24)
        if (difdate < 0){
            nmbrStatus[0] = nmbrStatus[0] + 1;
        } else if (difdate > 90){
            nmbrStatus[1] = nmbrStatus[1] + 1;
        }else{
            nmbrStatus[2] = nmbrStatus[2] + 1;
        }

        chart_3.update()
    })
})

const resultNormas = fetch(normas)
.then(res => res.json())
.then(dados =>{
    console.log(dados)
    ctx4.innerHTML = dados[0].Qtdnormas
})


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
labels:legendas,
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

let chart_3 = new Chart(ctx3, {
    type: 'bar',
    data: {
    labels: ["Vencido", "Vigente", "A vencer"],
    datasets: [{
    label: 'Políticas e Manuais Vigentes',
    data: nmbrStatus,
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