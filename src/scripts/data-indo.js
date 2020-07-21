const baseUrl = "https://corona.lmao.ninja/v2";
const showResponseMessage = (message = "Check your internet connection") => {
    console.log(message);
};

export const getDataIndo = async () => {
    const dataIndo = fetch(`${baseUrl}/countries/indonesia`)
    const dataChart = fetch(`${baseUrl}/historical/Indonesia?lastdays=30`)

    try {
        const [responseIndo, responseChart] = await Promise.all([dataIndo, dataChart]);
        const [indoJson, chartJson] = await [responseIndo.json(), responseChart.json()];

        indoJson.then(response => {
            renderDataIndo(response)
        }).catch((error) => {
            console.error(error)
        })

        chartJson.then(response => {
            renderChart(response)
        }).catch((error) => {
            console.error(error)
        })

    } catch (error) {
        showResponseMessage(error);
    }
};

// Render Data
const renderDataIndo = (response) => {
    const {
        updated,
        cases,
        todayCases,
        recovered,
        deaths,
        todayDeaths,
        active
    } = response;
    const casesIndo = document.querySelector("#casesIndo");
    const recoveredIndo = document.querySelector("#recoveredIndo");
    const deathsIndo = document.querySelector("#deathsIndo");
    const activeIndo = document.querySelector("#activeIndo");
    const lastUpdate = document.getElementById('last-update');
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    const date = new Date(updated)
    const tanggal = date.toLocaleDateString('id-ID', options)
    const waktu = date.toLocaleTimeString('id-ID')
    lastUpdate.innerHTML = `${tanggal}, ${waktu} WIB`

    casesIndo.innerHTML = `${cases.toLocaleString("en-US")}<small class="text-warning">
    +${todayCases}</small>`
    recoveredIndo.innerHTML = `${recovered.toLocaleString("en-US")}`
    deathsIndo.innerHTML = `${deaths.toLocaleString("en-US")}<small class="text-danger">
    +${todayDeaths}</small>`
    activeIndo.innerHTML = `${active.toLocaleString("en-US")}`
};

const renderChart = (response) => {
    const chartIndo = document.getElementById("chartIndo");
    const tanggal = Object.keys(response.timeline.cases);
    const kasus = Object.values(response.timeline.cases);

    new Chart(chartIndo, {
        type: "line",
        data: {
            labels: tanggal,
            datasets: [{
                data: kasus,
                backgroundColor: "rgba(1, 4, 136, 0.3)",
                borderColor: "rgba(1, 4, 136, 0.8)",
            }, ],
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                    },
                }, ],
                xAxes: [{
                    ticks: {
                        maxTicksLimit: 14,
                    },
                }, ],
            },
            legend: {
                display: false,
            },
        },
    });
};