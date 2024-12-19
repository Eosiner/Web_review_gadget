<template>
  <div class="wrapper">
    <!-- Home Section -->
    <section id="home">
      <div class="gambar-gadget">
        <img src="https://static.vecteezy.com/system/resources/previews/013/361/342/non_2x/3d-render-game-equipment-console-headset-free-png.png" />
      </div>
      <div class="kolom">
        <p class="Deskripsi">Gadget Terkini</p>
        <h2>Gud looking and expensive</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptatem?</p>
        <p><a href="" class="tbl-pink">Pelajari Lebih Lanjut</a></p>
      </div>
    </section>

    <!-- Tablet Section -->
    <section id="Tablet">
      <div class="kolom">
        <p>Tablet</p>
        <h2>Review Smartphone</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id asperiores dignissimos placeat facere, quo tempora. Est quo dolorem distinctio dolor minus, ullam, cum nemo cumque sint repudiandae quia harum nostrum!</p>
        <p><a href="https://www.mi.co.id/id/product/xiaomi-pad-6s-pro-124/" class="tbl-biru">Pelajari lebih lanjut</a></p>
      </div>
      <div class="gtablet">
        <img src="https://static.vecteezy.com/system/resources/previews/052/042/322/non_2x/modern-tablet-on-stand-with-stylus-accessory-free-png.png" />
      </div>
    </section>

    <!-- Smartphone Section -->
    <section id="Smartphone">
  <div class="kolom">
    <p>Smartphone</p>
    <h2>kecil, kencang, perkasa?</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisici</p>
    <p>
      <router-link :to="{ name: 'smartphones.index' }" class="tbl-biru">LEMME IN!!</router-link>
    </p>
  </div>
  <div class="ghp">
    <img src="https://images.samsung.com/is/image/samsung/p6pim/id/2401/gallery/id-galaxy-s24-s928-490247-sm-s928bzowxid-539388534?$730_584_PNG$" />
  </div>
</section>

    <!-- Laptop Section -->
    <section id="Laptop">
  <div class="kolom">
    <p>Laptop</p>
    <h2>Besar, keras, cakep?</h2>
    <p>Ini dia, laptop yang katanya bisa menggantikan pacar eh salah, teman kantor yang selalu datang terlambat—tapi apakah benda kotak satu ini benar-benar bisa memenuhi ekspektasi kita brader? cekidot!</p>
    <p>
      <router-link :to="{ name: 'laptops.index' }" class="tbl-biru">LEMME IN!!</router-link>
    </p>
  </div>
  <div class="ghl">
    <img src="https://static.vecteezy.com/system/resources/previews/052/233/853/non_2x/a-smart-laptop-free-png.png" />
  </div>
</section>


    <!-- Founder Section -->
    <section id="Founder">
      <div class="tengah">
        <div class="kolom">
          <p class="deskripsi">Our founder</p>
          <div class="raiden">
            <img src="https://upload-os-bbs.hoyolab.com/upload/2024/06/24/291697813/09ccf93dfce1df7625e7a2a95cb2d843_5979692255464728493.jpg?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70" />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, adipisci?</p>
        </div>
      </div>
    </section>

    <!-- Footer Section -->
    <div id="contact">
      <div class="footer">
        <div class="footer-section">
          <h3>Raiden B. Mei.</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, culpa!</p>
        </div>
        <div class="footer-section">
          <h3>About</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, culpa!</p>
        </div>
        <div class="footer-section">
          <h3>Contact</h3>
          <p>galaxy</p>
        </div>
        <div class="footer-section">
          <h3>Social</h3>
          <p><b>Klotak </b>Raiden_B_Mei</p>
        </div>
      </div>
      <p>&copy; 2024. <b>Raiden B Mei</b> All Rights Reserved.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
};
</script>

<style scoped>

* {
    text-decoration: none;
    margin: 0px;
    padding: 0px;
}

body {
    margin: 0px;
    padding: 0px;
    font-family: 'Open Sans',sans-serif;
}

.wrapper {
    width: 1100px;
    margin: auto;
    position: relative;
   
}

.logo a {
    font-size: 50px;
    font-weight: 800;
    float: left;
    font-family: courier;
    color: #ff0000;
}

.menu {
    float: right;
}

nav {
    width: 100%;
    margin: auto;
    display: flex;
    line-height: 80px;
    position: sticky;
    position: -webkit-sticky; 
    top: 0;
    background: #FFFFFF;
    z-index: 1;
    border-bottom:1px solid #000000;
}

nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
}

nav ul li {
    float: left;
}

nav ul li a {
    color: black;
    font-weight: bold;
    text-align: center;
    padding: 0px 16px 0px 16px;
    text-decoration: none;
}

nav ul li a:hover {
    text-decoration: underline;
}

section {
    margin: auto;
    display: flex;
    margin-bottom: 10px;
}

.kolom {
    margin-top: 50px;
    margin-bottom: 50px;
}

.kolom .deskripsi {
    font-size: 20px;
    font-weight: bold;
    font-family: 'comic sans ms';
    color: #364f6b;
}

h2 {
    font-family: 'comic sans ms';
    font-weight: 800;
    font-size: 45px;
    margin-bottom: 20px;
    color: #364f6b;
    width: 100%;
    line-height: 50px;
}

a.tbl-biru{
    background: #6877ff;
    border-radius: 20px;
    margin-top: 20px;
    padding: 15px 20px 15px 20px;
    color:#FFFFFF ;
    cursor: pointer
}

a.tbl-biru:hover{
    background: #ff0000;
    text-decoration: none;
}

a.tbl-pink:hover{
    background: #6877ff;
    text-decoration: none;
}

a.tbl-pink{
    background: #ff0000;
    border-radius: 20px;
    margin-top: 20px;
    padding: 15px 20px 15px 20px;
    color:#FFFFFF ;
    cursor: pointer
}

a.tbl-pink.hover{
    background: #6877ff;
    text-decoration: none;
}

p{
    margin: 10px 0px 10px 0px;
    padding: 10px 0px 10px 0px;
}

a.tbl-pink.hover{
    background: #6877ff;
    text-decoration: none;
}

.gambar-gadget img{
    width: 100%;
}

.ghl img{
    width: 300;
}

p{
    margin: 10px 0px 10px 0px;
    padding: 10px 0px 10px 0px;
}

.tengah{
    text-align: center;
    width: 100%;
}

.raiden img{
    width: 30%;
    border-radius: 50%;
}

#contact {
    background: #000000;
    padding: 50px 10px 50px 0px;
    display: flex;
    color: #ffffff;
    width: 100%; 
    box-sizing: border-box; 
    justify-content: space-between;
}


.footer {
    display: flex;
    justify-content: space-between; /* Membuat footer mengisi seluruh lebar */
    align-items: flex-start; /* Menyelaraskan item ke bagian atas */
    width: 100%; /* Memastikan footer mengisi seluruh lebar halaman */
    box-sizing: border-box; /* Memastikan padding dan border tidak mempengaruhi lebar */
}


.footer-section {
    width: 20%;
    margin: 0 auto;
    color: #ffffff;
}

h3 {
    font-family: 'comic sans ms';
    font-weight: 800;
    font-size: 30px;
    margin-bottom: 20px;
    color: #ffffff;
    width: 100%;
    line-height: 50px;
}

#copyright {
    color: #000000;
    text-align: center;
    width: 100%;
    padding: 50px 0px 50px 0px;
    margin-top: 50px;
}

</style>
