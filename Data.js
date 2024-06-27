// const nama = "serva ganteng";
// let usia = 40;

// let biodata = document.getElementById('biodata');
// console.log(biodata)

// function generateBiodata() {
// let generasi;

// if (usia >= 7 && usia < 18) {
//   generasi = "anak anak "
// } else if (usia >= 18 && usia < 30) {
//   generasi = "remaja"
// } else if (usia >= 35) {
//   generasi = "tua bangka"
// } else if (usia >= 1 && usia < 7) {
//   generasi = "ana kicii "
// } else {
//   generasi = "masih blum login"
// }

// return biodata.innerHTML = generasi;

// }
// console.log(nama)
// console.log(usia)

// generateBiodata();

javascript (function () {

var script = document.createElement('script');

script.src="//cdn.jsdelivr.net/npm/eruda";

document.body.appendChild(script);

script.onload = function () {

eruda.init()

}

})();