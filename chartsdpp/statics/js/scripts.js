const ctx = document.getElementById('myChart');
const ctx2 = document.getElementById('mySecondChart');
const ctx3 = document.getElementById('mythirdChart');
const ctx4 = document.getElementById('Chart4');
const tabela = document.getElementById('tabela');
const tabela2 = document.getElementById('tabela2');
const tabela3 = document.getElementById('tabela3');
const Ematendimento = document.getElementById('Chart7');
const Ematraso = document.getElementById('Chart8');
const concluidas = document.getElementById('Chart9');


const legendas = []
const CountAreas = []
monName = new Array ("jan", "fev", "mar", "abr", "mai", "jun","jul", "ago", "out", "nov", "dez")
statTarefa = new Array ("","","Andamento","","Concluida")

let nmbrStatus =[0,0,0]
let nmbrStatusRadar =[0,0,0]


const endPoint = "http://127.0.0.1:8000/dataJson/"
const PoliManu = "http://127.0.0.1:8000/Dash_Politicas_Manuais/"
const normas = "http://127.0.0.1:8000/Dash_Normas/" 
const RadarCon = "http://127.0.0.1:8000/Dash_RadarConformidade/"

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
        

        const newRow = tabela2.insertRow()
        const cell1 = newRow.insertCell()
        const cell2 = newRow.insertCell()
        const cell3 = newRow.insertCell()
        cell1.innerHTML = item.documentoid
        cell2.innerHTML = item.documentonome
        cell3.innerHTML = monName[dataresult.getMonth()] + '/' + dataresult.getFullYear()

        chart_3.update()
    })
})

const resultNormas = fetch(normas)
.then(res => res.json())
.then(dados =>{
    ctx4.innerHTML = dados.length
    dados.forEach(row => {
        const newRow = tabela.insertRow()
        const cell1 = newRow.insertCell()
        const cell2 = newRow.insertCell()
        cell1.innerHTML = row.normanome
        cell2.innerHTML = row.qtusuario
})
})

const resultRadarCon = fetch(RadarCon)
.then(res => res.json())
.then(dados =>{
    dados.forEach(row =>{
        dataresult = new Date(row.tarefaprevtermino)
        difdate = dataresult - new Date()
        
        if (row.tarefastatustarefa === 2 && difdate < 0){
            nmbrStatusRadar[0] = nmbrStatusRadar[0] + 1
        }else if (row.tarefastatustarefa === 4){
            nmbrStatusRadar[1] = nmbrStatusRadar[1] + 1
        }else if (row.tarefastatustarefa === 2){
            nmbrStatusRadar[2] = nmbrStatusRadar[2] + 1
        }
        const newRow = tabela3.insertRow()
        const cell1 = newRow.insertCell()
        const cell2 = newRow.insertCell()
        const cell3 = newRow.insertCell()
        const cell4 = newRow.insertCell()
        const cell5 = newRow.insertCell()

        cell1.innerHTML = row.tarefaid
        cell2.innerHTML = row.tarefadescricao
        cell3.innerHTML = row.sbusuarioid
        cell4.innerHTML = row.tarefaprevtermino
        cell5.innerHTML = statTarefa[row.tarefastatustarefa]

        Ematendimento.innerHTML = nmbrStatusRadar[2]
        Ematraso.innerHTML = nmbrStatusRadar[0]
        concluidas.innerHTML = nmbrStatusRadar[1]

        })
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