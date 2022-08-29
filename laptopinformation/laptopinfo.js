const brands = document.querySelector('.brand');
const cpu = document.querySelector('.cpuoption');

const brand = async() => {
    try{
        fetch('https://pcfy.redberryinternship.ge/api/brands').then(brnd => {
    return brnd.json()}).then(brendi => {
    for(var i = 0; i <= brendi.data.length; i++){
        brands.innerHTML += `<option>${brendi.data[i].name}</option>`
     }

})
} catch(err){
        console.log(err);
    }
}

const cpuoptions = async() => {
    try{
        fetch('https://pcfy.redberryinternship.ge/api/cpus').then(cpuop => {
    return cpuop.json()}).then(cpuu => {
    for(var i = 0; i <= cpuu.data.length; i++){
        cpu.innerHTML += `<option>${cpuu.data[i].name}</option>`
     }

})
} catch(err){
        console.log(err);
    }
}

cpuoptions();
brand();

const upload = document.querySelector('.upload');
const laptopname = document.querySelector('.laptopname');
const brendi = document.querySelector('.brand');
const cpuoption = document.querySelector('.cpuoption');
const birtvi = document.querySelector(".birtvi");
const nakadi  = document.querySelector('.nakadi');
const rami = document.querySelector('.ramgb');
const mexsierebistipi = document.querySelector('.rmtype');
const tarigi = document.querySelector('.ndate');
const fasi = document.querySelector('.nprice');
const laptopneworold = document.querySelector('.mdgomareoba');
const body = document.querySelector('body');
const saveInfo = document.querySelector('.save');

upload.addEventListener('change', ()=>{
    if (upload.files && upload.files[0]) {
        var reader = new FileReader();
        reader.onload = function () {
            localStorage.setItem("foto",reader.result);
        }
        reader.readAsDataURL(upload.files[0]);
    }
})

function save() {
    localStorage.setItem("laptopname", JSON.stringify(laptopname.value));
    localStorage.setItem("brand", JSON.stringify(brendi.value));
    localStorage.setItem("cpu", JSON.stringify(cpuoption.value));
    localStorage.setItem("birtvi", JSON.stringify(birtvi.value));
    localStorage.setItem("nakadi", JSON.stringify(nakadi.value));
    localStorage.setItem("ram", JSON.stringify(rami.value));
    localStorage.setItem("typeofram", JSON.stringify(mexsierebistipi.value));
    localStorage.setItem("date", JSON.stringify(tarigi.value));
    localStorage.setItem("price", JSON.stringify(fasi.value));
    localStorage.setItem("new or old", JSON.stringify(laptopneworold.value));
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: laptopname.value,
            brendii: brendi.value,
            surati: upload.value,
            cpu: cpuoption.value,
            birtvii: birtvi.value,
            nakaddi: nakadi.value,
            ramm: rami.value,
            ramtype: mexsierebistipi.value,
            dro: tarigi.value,
            tanxa: fasi.value,
            axalianmeoradi: laptopneworold.value
        }),
        headers: {
            "Content-Type":"application/json; charset=UTF-8"
        }
    }).then(function(responese){
        return responese.json();
    }).then(function(datas){
        console.log(datas);
    })
}
