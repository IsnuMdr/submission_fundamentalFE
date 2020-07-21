const urlProv = "https://cors-anywhere.herokuapp.com/https://api.kawalcorona.com"
const showResponseMessage = (message = "Check your internet connection") => {
    console.log(message);
}

export const getDataProv = async () => {
    try {
        const response = await fetch(`${urlProv}/indonesia/provinsi/`);
        const responseJson = await response.json();
        if (responseJson.error) {
            showResponseMessage(responseJson.message);
        } else {
            renderProv(responseJson);
        }
    } catch (error) {
        showResponseMessage(error);
    }
};


const renderProv = (response) => {
    const dataProvElement = document.querySelector("#data-prov");
    dataProvElement.innerHTML = "";

    let i = 1;
    response.forEach((prov) => {
        const {
            attributes
        } = prov;
        const {
            Provinsi,
            Kasus_Posi,
            Kasus_Semb,
            Kasus_Meni
        } = attributes;
        dataProvElement.innerHTML += `
                <tr>
                    <td class="text-center">${i++}</td>
                    <td>${Provinsi.toLocaleString("en-US")}</td>
                    <td>${Kasus_Posi.toLocaleString("en-US")}</td>
                    <td>${Kasus_Semb.toLocaleString("en-US")}</td>
                    <td>${Kasus_Meni.toLocaleString("en-US")}</td>
                </tr>`;
    });
};