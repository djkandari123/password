const len = document.querySelector("#length");
const num = document.querySelector("#number");
const upperStr = document.querySelector("#upperCase");
const lowerStr = document.querySelector("#lowerCase");
const sym = document.querySelector("#symbol");
const btn = document.querySelector(".btn");
const res = document.querySelector(".result");
const copy = document.querySelector(".copy");
const msg = document.getElementById("msg");

const number = [1,2,3,4,5,6,7,8,9,0];
const upperString = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lowerString = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const symbol = ["@","#","$","%","&","*"];

function numberPassword(){
    return number[Math.floor(Math.random() * number.length)];
};

function upperCasePassword(){
    return upperString[Math.floor(Math.random() * upperString.length)];
};

function lowerCasePassword(){
    return lowerString[Math.floor(Math.random() * lowerString.length)];
};

function symbolPassword(){
    return symbol[Math.floor(Math.random() * symbol.length)];
};

function generatePassword(){
    let pass = [];
    if(num.checked){
        pass.push(numberPassword());
    }
    if(upperStr.checked){
        pass.push(upperCasePassword());
    }
    if(lowerStr.checked){
        pass.push(lowerCasePassword());
    }
    if(sym.checked){
        pass.push(symbolPassword());
    }
    return pass[Math.floor(Math.random() * pass.length)];
};

btn.addEventListener("click",()=>{
    if(num.checked || upperStr.checked || lowerStr.checked || sym.checked){
        let p = ""
        for(let i=0; i<len.value; i++){
            p += generatePassword();
        }
        res.innerText = p;
    }else{
        res.innerText = "You did't check any char.";
        copy.style = "disabled"
    }
});

copy.addEventListener("click",()=>{
    navigator.clipboard.writeText(res.innerText);
    if(res.innerText){
        msg.style.display = "block";
        setTimeout(()=>{
            msg.style.display = "none";
        },900)
    }
    res.innerText = "";
});