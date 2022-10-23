

function tarihi_yazdir(){
    const gunler = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

let zaman = new Date ();
let saat = (zaman.getHours()<10) ? "0" + zaman.getHours() : zaman.getHours();
let dakika = (zaman.getMinutes()<10) ? "0" + zaman.getMinutes() : zaman.getMinutes();
let saniye = (zaman.getSeconds()<10) ? "0" + zaman.getSeconds() : zaman.getSeconds();
let gun =  gunler[zaman.getDay()];

let t = saat + ":" + dakika + ":" + saniye + " " + gun;


document.getElementById("tarih").innerHTML = t;

};


let tarayiciden_gelen_veri = prompt("Lütfen adınızı yazınız", "");
console.log(tarayiciden_gelen_veri);
document.getElementById("myName").innerHTML = tarayiciden_gelen_veri;


tarihi_yazdir();
setInterval(tarihi_yazdir, 1000);



/*

// if (person != null) {
//   document.getElementById("demo").innerHTML =
//   "Hello " + person + "! How are you today?";
// }
*/





