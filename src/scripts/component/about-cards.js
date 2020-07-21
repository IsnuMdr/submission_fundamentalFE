class About extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <h3 class="text-center my-5">Tentang COVID-19
            </h3>
            <div class="row">
                <div class="col-lg-6 text-justify">
                    <h5 class="font-weight-bold">Apa Itu COVID-19</h5>
                    <p>Coronavirus Disease 2019 atau COVID-19 adalah penyakit baru yang dapat menyebabkan gangguan
                        pernapasan dan radang paru. Penyakit ini disebabkan oleh infeksi Severe Acute Respiratory
                        Syndrome Coronavirus 2 (SARS-CoV-2). Gejala klinis yang muncul beragam, mulai dari seperti
                        gejala flu biasa (batuk, pilek, nyeri tenggorok, nyeri otot, nyeri kepala) sampai yang
                        berkomplikasi berat (pneumonia atau sepsis).</p>
                    <h5 class="font-weight-bold mt-3">Bagaimana COVID-19 Menular? </h5>
                    <p>COVID-19 adalah penyakit baru dan para peneliti masih mempelajari bagaimana cara penularannya.
                        Dari berbagai penelitian, metode penyebaran utama penyakit ini diduga adalah melalui droplet
                        saluran pernapasan dan kontak dekat dengan penderita. Droplet merupakan partikel kecil dari
                        mulut penderita yang dapat mengandung virus penyakit, yang dihasilkan pada saat batuk, bersin,
                        atau berbicara. Droplet dapat melewati sampai jarak tertentu (biasanya 1 meter).</p>
                    <p>Droplet bisa menempel di pakaian atau benda di sekitar penderita pada saat batuk atau bersin.
                        Namun, partikel droplet cukup besar sehingga tidak akan bertahan atau mengendap di udara dalam
                        waktu yang lama. Namun, masyarakat diwajibkan untuk menggunakan masker kain yang menutupi hidung
                        dan mulut untuk mencegah penyebaran droplet.</p>
                </div>
                <section class="col-lg-6">
                    <div class="card shadow counts">
                        <div class="card-body count-box">
                            <div class="row">
                                <div class="col-md-12 text-center">
                                    <h5 class="font-weight-bold">Gejala COVID-19</h5>
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-md-4 text-center">
                                    <img class="img-resposive"
                                        src="https://corona.jakarta.go.id/img/logo/batuk-dan-nyeri.png" alt="">
                                    <br>
                                    <p class="font-weight-bold">Batuk dan Nyeri Tenggorokan</p>
                                </div>
                                <div class="col-md-4 text-center">
                                    <img class="img-resposive" src="https://corona.jakarta.go.id/img/logo/demam.png"
                                        alt="">
                                    <br>
                                    <p class="font-weight-bold">Demam suhu tinggi</p>
                                </div>
                                <div class="col-md-4 text-center">
                                    <img class="img-resposive"
                                        src="https://corona.jakarta.go.id/img/logo/sesak-napas.png" alt="">
                                    <br>
                                    <p class="font-weight-bold">Sesak napas</p>
                                </div>
                            </div>

                            <div class="row mt-3">
                                <div class="col-md-12 text-justify">
                                    <p>Gejala COVID-19 mulai dari seperti gejala
                                        flu biasa sampai kondisi berat seperti pneumonia (radang paru akut yang
                                        gejalanya sesak napas). Jika Anda mengalami gejala, memiliki riwayat perjalanan
                                        ke wilayah terjangkit, atau berpaparan dengan orang positif/kemungkinan
                                        COVID-19, maka Anda diimbau untuk melakukan isolasi diri dan menghubungi Layanan
                                        Tanggap Covid-19</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>`;
    }
}

customElements.define("about-cards", About);