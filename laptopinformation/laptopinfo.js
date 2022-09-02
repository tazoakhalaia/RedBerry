const brands = document.querySelector('.brand');
const cpu = document.querySelector('.cpuoption');
const axali = document.querySelector('#new');
const meoreadi = document.querySelector('#old');
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
const success = document.querySelector('.fullscreen');
const saveinfo = document.querySelector('#save');
const usedornew = document.querySelector('.mdgomareoba');
const ssdorhdd = document.querySelector('.rmtype');
axali.value = "ახალი";
meoreadi.value = "მეორადი";



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


upload.addEventListener('change', (e)=>{
    if (upload.files && upload.files[0]) {
        var reader = new FileReader();
        reader.onload = function () {
            localStorage.setItem("laptop_image", reader.result);
            const r = reader.result;
            img.src = r;
            console.log(upload.files[0]);
            img.style.display = "block";
            upload.style.display = "none";
        }
          reader.readAsDataURL(upload.files[0]);

    }
})



function dataSave() {
    localStorage.setItem("laptop_name", JSON.stringify(laptopname.value));
    localStorage.setItem("laptop_brand_id", JSON.stringify(brendi.value));
    localStorage.setItem("laptop_cpu", JSON.stringify(cpuoption.value));
    localStorage.setItem("laptop_cpu_cores", JSON.stringify(birtvi.value));
    localStorage.setItem("nakadi", JSON.stringify(nakadi.value));
    localStorage.setItem("laptop_ram", JSON.stringify(rami.value));
    if(ssd.checked){
        localStorage.setItem("laptop_hard_drive_type", JSON.stringify(ssd.value));
    }else {
        localStorage.setItem("laptop_hard_drive_type", JSON.stringify(hdd.value));
    }
    localStorage.setItem("laptop_purchase_date", JSON.stringify(tarigi.value));
    localStorage.setItem("laptop_price", JSON.stringify(fasi.value));
    if(axali.checked){
        localStorage.setItem("new or old", JSON.stringify(axali.value));
    }else{
        localStorage.setItem("new or old", JSON.stringify(meoreadi.value));
    }
success.style.display = "flex";
}
let fd = new FormData();
saveinfo.addEventListener('submit', (e)=>{
    e.preventDefault();
    fd.append('name', 'გელა');
    fd.append('surname', 'გელააშვილი');
    fd.append('team_id ', 1);
    fd.append('position_id ', 1);
    fd.append('phone_number', '+995595161121');
    fd.append('email', 'asdadas@redberry.ge');
    fd.append('token ', 'e113a24d23bb6c990b531705e476123f');
    fd.append('laptop_name ', 'hp');
    fd.append('laptop_image ', upload.files[0]);
    fd.append('laptop_brand_id ', 1);
    fd.append('laptop_cpu', 'Intel Core i3');
    fd.append('laptop_cpu_cores', 64);
    fd.append('laptop_cpu_threads', 128);
    fd.append('laptop_ram ', 34);
    fd.append('laptop_hard_drive_type', "HDD");
    fd.append('laptop_state ', 'new');
    fd.append('laptop_purchase_date ', '10-10-2004');
    fd.append('laptop_price ', 2600);
    fetch('https://pcfy.redberryinternship.ge/api/laptop/create', {
        method: 'POST',
        body: JSON.stringify(fd),
        headers: {
            'Content-Type': 'multipart/form-data',
            'Accept' : 'application/json'
        }
    }).then(res => {
        return res.json()}).then(datas => {
        console.log(datas);
        // console.log(Array.from(fd));
    });
})
function clearlocal() {
    localStorage.clear();
}



// window.addEventListener('change', (e)=> {
//         if(!e.target.contains(fradio)){
//             fradio.checked = false;
//         }
    
//         if(!e.target.contains(sradio)){
//             sradio.checked = false;
//         }
//         if(!e.target.contains(axali)){
//             axali.checked = false;
//         }
//         if(!e.target.contains(meoreadi)){
//             meoreadi.checked = false;
//         }
   
// })

window.addEventListener("load", ()=>{
    laptopname.value = localStorage.getItem("laptop_name").replaceAll('"', '');
    birtvi.value = localStorage.getItem("laptop_cpu_cores").replaceAll('"', '');
    nakadi.value = localStorage.getItem("nakadi").replaceAll('"', '');
    rami.value = localStorage.getItem("laptop_ram").replaceAll('"', '');
    tarigi.value = localStorage.getItem("laptop_purchase_date").replaceAll('"', '');
    fasi.value = localStorage.getItem("laptop_price").replaceAll('"', '');
})


window.addEventListener('input', ()=> {
    if(laptopname.value != "" && birtvi.value != "" && nakadi.value != "" && 
    rami.value != "" && tarigi.value != "" && fasi.value != ""){
        saveinfo.classList.remove('dontsave');
    }else {
        saveinfo.classList.add('dontsave');
    }
})

function gobck() {
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
}
