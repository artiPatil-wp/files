let gameSeq=[];
let userSeq=[];
let level=0;
let btns=["one", "two", "three", "four"];
let started=false;
let h2=document.querySelector("h2");


document.addEventListener("keypress", function(){
    if(started==false){
        console.log("game started");
        started=true;
        levelup();
    }
    
});
function flash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
     btn.classList.remove("flash");
    }, 1000);
 };
 

function levelup(){
level++;
h2.innerText=(`level ${level}`);
let randIdx=Math.floor(Math.random() *3);
let randcolor=btns[randIdx];
let randbtn=document.querySelector(`.${randcolor}`);
 flash();
};

