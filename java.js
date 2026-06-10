console.log("Print statement")
const a=20;
const b=30;
console.log(a+b);

const str="Rupa";
console.log(str);

const arr=[1,2.4,"String",false]
console.log(arr)

for(let i =0;i<arr.length;i++){
    console.log(arr[i])
}
arr[1]=3.5;
console.log(arr[1])


arr.push("rupa")
console.log(arr)

function example(){
    console.log("This is a function")
}
const ptag=document.getElementById("ptag");
ptag.innerHTML="This is my first class";

const input=document.getElementById("input");
const output=document.getElementById("inputfield");
input.addEventListener("input",()=>{

    output.textContent=input.value;

}
)

const first =document.createElement("h1")
first.textContent="bonovita "
document.body.appendChild(first)

first.remove()