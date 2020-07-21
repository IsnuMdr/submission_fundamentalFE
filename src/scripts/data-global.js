const baseUrl = "https://corona.lmao.ninja/v2";

export const getDataGlob = async () => {
    const dataGlob = fetch(`${baseUrl}/countries`)
    const dataWorld = fetch(`${baseUrl}/all`)

    try {
        const [responseGlob, responseWorld] = await Promise.all([dataGlob, dataWorld]);
        const [globJson, worldJson] = await [responseGlob.json(), responseWorld.json()];

        globJson.then(response => {
            renderGlob(response);
        }).catch((error) => {
            console.error(error)
        })

        worldJson.then(response => {
            renderWorld(response);
        }).catch((error) => {
            console.error(error)
        })
    } catch (error) {
        console.error(error);
    }

};

const renderGlob = (response) => {
    const dataGlobElement = document.querySelector("#data-glob");
    dataGlobElement.innerHTML = "";
    let i = 1;
    response.forEach((data) => {
        const {
            country,
            cases,
            todayCases,
            deaths,
            todayDeaths,
            recovered,
        } = data;
        dataGlobElement.innerHTML += `
                    <tr>
                        <td class="text-center">${i++}</td>
                        <td>${country}</td>
                        <td>${cases == null ? '<span class="font-italic">Tidak ada data</span>': cases.toLocaleString("en-US") }<small class="text-warning"> +${todayCases.toLocaleString("en-US")}</small></td>
                        <td>${recovered == null ? '<span class="font-italic">Tidak ada data</span>': recovered.toLocaleString("en-US")}</td>
                        <td>${deaths == null ? '<span class="font-italic">Tidak ada data</span>': deaths.toLocaleString("en-US")}<small class="text-danger"> +${todayDeaths.toLocaleString("en-US")}</td>
                    </tr>`;
    });
}

const renderWorld = (response) => {
    const {
        cases,
        todayCases,
        recovered,
        deaths,
        todayDeaths
    } = response;
    const casesGlob = document.querySelector("#casesGlob");
    const recoveredGlob = document.querySelector("#recoveredGlob");
    const deathsGlob = document.querySelector("#deathsGlob");

    casesGlob.innerHTML += `${cases.toLocaleString("en-US")}<small class="text-warning">
    +${todayCases}</small>`;
    recoveredGlob.innerHTML += `${recovered.toLocaleString("en-US")}`;
    deathsGlob.innerHTML += `${deaths.toLocaleString("en-US")}<small
    class="text-danger">
    +${todayDeaths}</small>`;
}