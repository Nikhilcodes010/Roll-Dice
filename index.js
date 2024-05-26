const dices=document.querySelector("#dice");
const button=document.querySelector("#btn");

const generateNumber=()=>{
    var n=Math.floor(Math.random()*6);
    return n;
}
const changeImage=(p)=>{
    dices.src=`dice${p+1}.png`
}
btn.addEventListener("click",()=>{
    var p=generateNumber();
    changeImage(p);
})