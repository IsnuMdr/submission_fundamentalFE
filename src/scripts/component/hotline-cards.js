class Hotline extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            :host {
                text-align: center;
                display:grid;
                list-style-type:none;
                margin:0;padding:0;
                grid-template-columns: repeat(3, auto);
                grid-template-rows: repeat(2, auto);
            }

            @media (max-width: 800px) {
                :host {
                    grid-template-columns: repeat(2, auto);
                }
                :host .icon-box {
                    margin: 20px;
                }
            }

            @media (max-width: 550px) {
                :host {
                    grid-template-columns: auto;
                }
                :host .icon-box {
                    margin-top: 20px;
                }
            }
            
            :host .icon-box {
                margin: 20px;
                padding: 20px;
                background: #f5f5ff;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                transition: ease-in-out 0.3s;
            }
            
            :host .icon-box h3 {
                font-size: 16px;
                font-weight: bold;
                margin-top: 30px;
                padding: 0;
            }
            
            :host .icon-box h3 a {
                color: #010483;
                transition: ease-in-out 0.3s;
            }
            
            :host .icon-box h3 a:hover {
                color: #01036f;
            }
            
            :host .icon-box:hover {
                background: #ebebff;
                box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
            }
            
            :host .iconbox p {
                font-size: 18px;
            }
        </style>
            <div class="icon-box text-center">
                <img src="https://kawalcorona.com/uploads/unnamed-9mT.png" alt="" width="80px">
                <h3><a href="tel:0215210411">021-5210-411</a><br>
                    <a href="tel:081212123119">0812-1212-3119</a></h3>
                <p>Kementrian Kesehatan</p>
            </div>
            <div class="icon-box text-center">
                <img src="https://kawalcorona.com/uploads/logo-dki.png" alt="" width="80px">
                <h3><a href="tel:112">112</a><br>
                    <a href="tel:081288376955">0812-8837-6955</a></h3>
                <p>Pemprov DKI Jakarta</p>
            </div>
            <div class="icon-box text-center">
                <img src="https://kawalcorona.com/uploads/jabar.png" alt="" width="80px">
                <h3><a href="tel:119">119</a><br>
                    <a href="tel:08112093306">0811-209-3306</a></h3>
                <p>Pemprov Jawa Barat</p>
            </div>
            <div class="icon-box text-center">
                <img src="https://kawalcorona.com/uploads/jatengnew.png" alt="" width="80px">
                <h3><a href="tel:0243580713">024-358-0713</a><br>
                    <a href="tel:082313600560">0823-1360-0560</a></h3>
                <p>Pemprov Jawa Tengah</p>
            </div>
            <div class="icon-box text-center">
                <img src="https://kawalcorona.com/uploads/jatim.png" alt="" width="65px">
                <h3><a href="tel:0318430313">031-843-0313</a><br>
                    <a href="tel:081334367800">0813-3436-7800</a></h3>
                <p>Pemprov Jawa Timur</p>
            </div>
            <div class="icon-box text-center">
                <img src="https://kawalcorona.com/uploads/yogya.jpg" alt="" width="70px">
                <h3><a href="tel:0274555585">0274-555-585</a><br>
                    <a href="tel:08112764800">0811-2764-800</a></h3>
                <p>Pemprov DIY</p>
            </div>`;
    }
}

customElements.define("hotline-cards", Hotline);