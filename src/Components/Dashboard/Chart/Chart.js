import React from 'react'
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);
let beneficios = [0, 56, 20, 36, 80, 40, 30, -20, 25, 30, 12, 60];
let meses = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️PARA HACER ESTO DINAMICO VER VIDEO DE API EXPENSE AND INCOMES DESDE 1:54H ********⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
let midata = {
    labels: meses,
    datasets: [ // Cada una de las líneas del gráfico
    {
        label: 'Incomes',
        fill : true,
        borderColor: 'rgb(20, 206, 0)',
        backgroundColor: 'rgba(22, 231, 0, 0.5)',
        pointRadius: 4,
        pointBorderColor: 'rgba(18, 181, 0)',
        pointBackgroundColor: 'rgba(18, 181, 0)',
        data: [20, 25, 60, 65, 45, 10, 0, 25, 35, 7, 20, 25]
    },
    {
        label: 'Expenses',
        data: beneficios,
        tension: 0.5,
        fill : true,
        borderColor: 'rgb(254, 27, 27)',
        backgroundColor: 'rgba(178, 1, 1, 0.5)',
        pointRadius: 4,
        pointBorderColor: 'rgba(254, 53, 53)',
        pointBackgroundColor: 'rgba(254, 53, 53)',

    },
       
    ],
};
//AQUI DETERMINAMOS COMO QUEREMOS QUE TRABAJE NUESTRA GRÁFICA:
var misoptions = {
    scales : {
        y : {
            min : -20
        },
        x: {
            ticks: { color: 'rgb(247, 162, 14)'}
        }
    }
};

export default function LinesChart() {
    return <Line data={midata} options={misoptions}/>
}