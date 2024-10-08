let button=document.querySelectorAll("button");
let yourchoice=document.querySelector(".yourchoice");
let systemchoice=document.querySelector(".comchoice");
let winnermsg=document.querySelector(".winner");
let scoreuser=document.getElementById("userrscore")
let scorecomputer=document.getElementById("computerscore")
let userchoice;
let computerchoice;
let userrscore=0, computwrscore=0;


button.forEach((btn)=>{
    btn.addEventListener("click",() =>{
        userchoice=btn.getAttribute("class");
        playgame(userchoice);
        button.forEach((bt)=>{
            bt.style.background="";
        })
        btn.style.backgroundColor="black"
    })
})

const playgame=(userchoice)=>{
    computerchoice=checkcomputerchoice();
    console.log(` ${userchoice}`);
    console.log(` ${computerchoice}`);
    yourchoice.innerHTML=`${userchoice}`;
    systemchoice.innerHTML=`${computerchoice}`;
    checkwinner(userchoice, computerchoice);
}

const checkcomputerchoice=()=>{
    let choice=["rock", "paper", "scissor"];
    let index=Math.floor(Math.random()*3);
    return choice[index];
}

const checkwinner=(userchoice, computerchoice)=>{
    if(userchoice===computerchoice){
        console.log("game draw play again");
        winnermsg.innerText="Game is Draw Play Again";
        winnermsg.style.backgroundColor="gray";
    }
    else{
        let youwin=true;
        if(userchoice==="rock"){
            youwin=computerchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            youwin=computerchoice==="rock"?true:false;
        }
        else{
            youwin=computerchoice==="rock"?false:winnermsg;
        }
        showwinner(youwin);
    }
}

const showwinner=(youwin)=>{
    if(youwin){
        userrscore++;
        scoreuser.innerHTML=`${userrscore}`;
        winnermsg.innerText="You Win";
        winnermsg.style.backgroundColor="green";
    }
    else{
        computwrscore++;
        scorecomputer.innerHTML=`${computwrscore}`
        winnermsg.innerText="you Loss";
        winnermsg.style.backgroundColor="red"
    }
}
/*const employee={
    calecax(){
        console.log("Tax is 10%");
    }
};

const employee2={
    Salary: 50000
};
employee2.__proto__=employee;

function Hello(){
    console.log("hello");
}

setTimeout(Hello, 2000);
console.log("Good morning");*/