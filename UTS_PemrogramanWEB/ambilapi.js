const data1 = document.getElementById("terkonfirmasi");
const data2 = document.getElementById("dirawat");
const data3 = document.getElementById("sembuh");
const data4 = document.getElementById("meninggal");


$(document).ready(function(){
    fetch('./dataapi/stats.json')
    .then((response) => response.json())
    .then ((response) => {
        data1.innerHTML = `${response.name}`;
        data2.innerHTML = `${response.numbers.recovered}`;
        data3.innerHTML = `${response.numbers.infected}`;
        data4.innerHTML = `${response.numbers.fatal}`;
    })
    .catch((err) => console.log(err));
})