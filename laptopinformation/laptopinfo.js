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