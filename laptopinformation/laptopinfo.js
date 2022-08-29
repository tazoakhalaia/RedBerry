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
const ssd = document.querySelector('#fradio');
ssd.value = "SSD";
const hdd = document.querySelector('#sradio');
hdd.value = "HDD";
const tarigi = document.querySelector('.ndate');
const fasi = document.querySelector('.nprice');
const body = document.querySelector('body');
const img = document.querySelector('.img');

upload.addEventListener('change', ()=>{
    if (upload.files && upload.files[0]) {
        var reader = new FileReader();
        reader.onload = function () {
            localStorage.setItem("foto",reader.result);
            const r = reader.result;
            img.src = r;
            img.style.display = "block";
            upload.style.display = "none";
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
    if(ssd.checked){
        localStorage.setItem("typeofram", JSON.stringify(ssd.value));
    }else {
        localStorage.setItem("typeofram", JSON.stringify(hdd.value));
    }
    localStorage.setItem("date", JSON.stringify(tarigi.value));
    localStorage.setItem("price", JSON.stringify(fasi.value));
    if(axali.checked){
        localStorage.setItem("new or old", JSON.stringify(axali.value));
    }else{
        localStorage.setItem("new or old", JSON.stringify(meoreadi.value));
    }
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: laptopname.value,
            brendii: brendi.value,
            surati: localStorage.getItem("foto"),
            cpu: cpuoption.value,
            birtvii: birtvi.value,
            nakaddi: nakadi.value,
            ramm: rami.value,
            ramtype: ssd.value,
            ramtypee: hdd.value,
            dro: tarigi.value,
            tanxa: fasi.value,
            axalii: axali.value,
            meoradii: meoreadi.value,
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


const fradio = document.querySelector('#fradio');
const sradio = document.querySelector('#sradio');
const axali = document.querySelector('#new');
const meoreadi = document.querySelector('#old');
axali.value = "ახალი";
meoreadi.value = "მეორადი";

window.addEventListener('change', (e)=> {
        if(!e.target.contains(fradio)){
            fradio.checked = false;
        }
    
        if(!e.target.contains(sradio)){
            sradio.checked = false;
        }
        if(!e.target.contains(axali)){
            axali.checked = false;
        }
        if(!e.target.contains(meoreadi)){
            meoreadi.checked = false;
        }
   
})