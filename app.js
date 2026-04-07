let gameseq = [];
let userseq = [];

let btns = ["red","yellow","green","pink"];

let start = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(start==false){
        console.log('game started');
        start=true;
        levelup();
    }
});

function gameflash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash")
    },250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250);
}
function checkans(idx){
    if(userseq[idx]===gameseq[idx]){
    if(userseq.length==gameseq.length){
        setTimeout(levelup,1000);
    }
}else{
        h2.innerHTML = `Game over! <b>your score was ${level}</b><br> press any key to start again`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
    
}
function levelup(){
    userseq=[];
    level++;
    h2.innerText = `Level ${level}`;
    let randomidx = Math.floor(Math.random()*3);
    let randomcolor = btns[randomidx];
    gameseq.push(randomcolor);
    console.log(gameseq);
    let randombtn = document.querySelector(`.${randomcolor}`);
    gameflash(randombtn);
}

function btnpress(){
    console.log(this);
    let btn = this;
    userflash(btn);
    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    console.log(userseq);
    checkans(userseq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function reset(){
    start = false;
    gameseq=[];
    userseq=[];
    level=0;
}