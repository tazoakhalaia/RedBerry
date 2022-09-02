const team  = document.querySelector(".team");
const position = document.querySelector(".position");
const option = document.querySelector('option');
const teams = async() => {
    try{
        fetch('https://pcfy.redberryinternship.ge/api/teams').then(team => {
    return team.json()}).then(tms => {
    for(var i = 0; i <= tms.data.length; i++){
        team.innerHTML += `<option>${tms.data[i].name}</option>`
     }

})
} catch(err){
        console.log(err);
    }
}

const pozicia = fetch('https://pcfy.redberryinternship.ge/api/positions').then(pos => {
    return pos.json()});
let id;
const positions = async() => {
        try{
            fetch('https://pcfy.redberryinternship.ge/api/positions').then(pos => {
        return pos.json()}).then(posit => {
    })
    } catch(err){
            console.log(err);
        }
    }

    teams();
    positions();

    function change() {
        position.innerHTML = `<option>პოზიცია</option>`
        pozicia.then(res => {
            if(team.value === "დეველოპერი"){
                id = 1;
            }else if (team.value === "HR"){
                id = 2;
            }else if (team.value === "გაყიდვები") {
                id = 3;
            }else if (team.value === "დიზაინი"){
                id = 4;
            }else if (team.value === "მარკეტინგი"){
                id = 5;
            }else {
                id = 0;
            }
             for(var i = 0; i <= res.data.length; i++){
                if(res.data[i].team_id == id){
                    position.innerHTML += `<option>${res.data[i].name}</option>`
                    localStorage.setItem("team_id", res.data[i].team_id);
                }
             }
        })
    }


    //validation//
const labelname = document.querySelector('.saxeli');
const h4 = document.querySelector('h4');
const inputName = document.querySelector('.fullname'); 
const regex = /[^a-z0-9\s]/gi;


function check() {
    if(inputName.value.match(regex)){
        h4.innerText = "მინიმუმ 2 სიმბოლო, ქართული ასოები";
        h4.style.color = "green";
        inputName.style.borderColor = "#62A1EB";
    }else {
        h4.innerText = "გამოიყენეთ ქართული ასოები და შეიყვანეთ მინიმუმ 2 სიმბოლო";
        h4.style.color = "black";
        inputName.style.borderColor = "red";
    }
    if(inputName.value == ""){
        h4.innerText = "მინიმუმ 2 სიმბოლო, ქართული ასოები";
        h4.style.color = "black";
        inputName.style.borderColor = "#62A1EB";
    }
}

const inputlastName = document.querySelector('.lstname');
const lastnameh4 = document.querySelector('.lastnameh4');
function checkLastName() {
    if(inputlastName.value.match(regex)){
        lastnameh4.innerText = "მინიმუმ 2 სიმბოლო, ქართული ასოები";
        lastnameh4.style.color = "green";
        inputlastName.style.borderColor = "#62A1EB";
    }else {
        lastnameh4.innerText = "გამოიყენეთ ქართული ასოები და შეიყვანეთ მინიმუმ 2 სიმბოლო";
        lastnameh4.style.color = "black";
        inputlastName.style.borderColor = "red";
    }
    if(inputlastName.value == ""){
        lastnameh4.innerText = "მინიმუმ 2 სიმბოლო, ქართული ასოები";
        lastnameh4.style.color = "black";
        inputlastName.style.borderColor = "#62A1EB";
    }
}

let emailRegex = /^\w+([\.-]?\w+)*@redberry.ge/;
const email = document.querySelector('.email');

function checkemail() {
    if(email.value.match(emailRegex)){
        email.style.borderColor = "green";
    }else {
        email.style.borderColor = "red";
    }
    if(email.value == ""){
        email.style.borderColor = "#62A1EB";
    }
}

const btn = document.querySelector('#button');
const nomeri = document.querySelector('.telefoni');
const nomeriregex = /^(\+?995)?(79\d{7}|5\d{8})$/;

nomeri.addEventListener('input', ()=>{
    if(nomeri.value.match(nomeriregex)){
        nomeri.style.borderColor = "#62A1EB";
    }else{
        nomeri.style.borderColor = "red";
    }
    if(nomeri.value == ""){
        nomeri.style.borderColor = "#62A1EB"
    }
})

function addData() {
    localStorage.setItem("name", JSON.stringify(inputName.value));
    localStorage.setItem("lastName", JSON.stringify(inputlastName.value));
    localStorage.setItem("team", JSON.stringify(team.value));
    localStorage.setItem("position", JSON.stringify(position.value));
    localStorage.setItem("email", JSON.stringify(email.value));
    localStorage.setItem("nomeri", JSON.stringify(nomeri.value));
}

window.addEventListener('input', ()=> {
    if(inputName.value.match(regex) && inputlastName.value.match(regex) &&
    email.value.match(emailRegex) && nomeri.value.match(nomeriregex)){
        btn.classList.remove('ponterevents');
    }else {
        btn.classList.add('ponterevents');
    }
})


window.addEventListener("load", ()=>{
    inputName.value = localStorage.getItem("name").replaceAll('"', '');
    inputlastName.value = localStorage.getItem("lastName").replaceAll('"', '');
    email.value = localStorage.getItem("email").replaceAll('"', '');
    nomeri.value = localStorage.getItem("nomeri").replaceAll('"', '');
})