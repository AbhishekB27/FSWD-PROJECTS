console.log("Stone-Paper-Scissor");

//user define getElement function 
function getRefOfElement(ele){
    let element = document.querySelector(`${ele}`);
    // element.classList.add('hello');
    return element;
   }
   //user define createElement functiion 
function createElement(ele ,attriName,attriValue){
    let element = document.createElement(`${ele}`);
    element.setAttribute(`${attriName}`,`${attriValue}`);
    return element
}
// /---------------------------------------------------------------------/
var stone = getRefOfElement('.stone');
var paper = getRefOfElement('.paper');
var scissors = getRefOfElement('.scissors');
var sto = getRefOfElement('.hFistI');
var pap = getRefOfElement('.hPaperI');
var sci = getRefOfElement('.hScissorI');
var gameTimer= getRefOfElement('.timer');
var game_container = getRefOfElement('.game');
var winTitle = getRefOfElement('.win-title');
var ruleButton=getRefOfElement('.rules');
var aboutRules = getRefOfElement('.about-rules');
var ruleClose = getRefOfElement('.close-button');
var userClick = getRefOfElement('.userClick');
var botClick = getRefOfElement('.botClick');
var startGame = getRefOfElement('.start-game');
var game = ["stone","paper","scissor"];
var time=0;
var uPicked='';
var score=0;
var uiResult = getRefOfElement('.win-lose');

//Lets start the game
startGame.addEventListener('click',()=>{//create timer for game
    const timer = setInterval(()=>{
        // console.log(time)
        time === 10 ? clearInterval(timer):time++;
        time === 10 ? (gameTimer.innerHTML=`00:${time}`):(gameTimer.innerHTML=`00:0${time}`)
    },1000);
    stone.style= 'cursor:pointer';
    paper.style= 'cursor:pointer';
    scissors.style= 'cursor:pointer';
    //The game begin here
     wholeGame(timer)
});
//Rule Button
ruleButton.addEventListener('click',()=>{
    aboutRules.style='display:flex';
    console.log("rule button")
});
//Rule Close button
ruleClose.addEventListener('click',()=>{
    aboutRules.style='display:none';
});
//when a match have drawn
const draw =(user,bot)=>{
    game_container.style = 'display:none;';
    uiResult.style = 'display:flex';
    winTitle.innerHTML=`Match ${user.status}`;
    console.log(user.status)
    botClick.classList.add(`${user.move}`);
    userClick.classList.add(`${bot.move}`)
    let cloneNode= user.icon.cloneNode(true);
    console.log(cloneNode);
    userClick.appendChild(cloneNode);
    botClick.appendChild(bot.icon);
    console.log(bot.icon)
}
//Result
const result = (winner,looser)=>{
    alert("Winner: " + winner.name )
    game_container.style = 'display:none;';
    uiResult.style = 'display:flex';
    
    if(winner.name === 'Bot' && (winner.move === 'stone' || winner.move === 'paper' ||winner.move === 'scissors')){
        winTitle.innerHTML=`${winner.name} Win`;
        console.log(winner.name + ":" + winner.move)
        botClick.classList.add(`${winner.move}`);
        botClick.classList.add('anim');
        userClick.classList.add(`${looser.move}`)
        botClick.appendChild(winner.icon);
        userClick.appendChild(looser.icon);
    }else if(winner.name === 'User' && (winner.move === 'stone' || winner.move === 'paper' ||winner.move === 'scissors')){
        winTitle.innerHTML=`${winner.name} Win`;
        console.log(winner.name + ":" + winner.move)
        userClick.classList.add(`${winner.move}`)
        userClick.classList.add('anim');
        botClick.classList.add(`${looser.move}`);
        userClick.appendChild(winner.icon);
        botClick.appendChild(looser.icon);
    }
//    console.log( stone.innerHTML=" sfsd");
}
//create a random num
const randomNum = ()=>{
    let num = Math.floor(Math.random()*3);
    console.log(game[num]);
    return num
}
// lets create a bot
const bot = ()=>{
    let bot_pick = game[randomNum()]
    console.log("bot: " + bot_pick)
    return bot_pick;
}

// lets create a game functionality
const wholeGame = (timer)=>{
    //STONE
stone.addEventListener('click',()=>{
    clearInterval(timer)
    uPicked='stone';
    botPicked=bot();
    if(uPicked === botPicked){
        alert("Match Tie");
        draw({name:'User',icon:sto,move:'stone',status:'Tie'},{name:'Bot',icon:sto,move:'stone',status:'Tie'});
    }
    switch(botPicked){
        case 'paper':{
            console.log("Bot win: "+"Paper beat stone");
            result({name:'Bot',icon:pap,move:'paper'},{name:'User',icon:sto,move:'stone'});
        }
        break;
        case 'scissor':{
            console.log("User win: "+"Stone beat Scissor");
            result({name:'User',icon:sto,move:'stone'},{name:'Bot',icon:sci,move:'scissors'});
        }
        break;
    }
})
//PAPER
paper.addEventListener('click',()=>{
    uPicked='paper';
    botPicked=bot();
    if(uPicked === botPicked){
        alert("Match Tie");
        draw({name:'User',icon:pap,move:'paper',status:'Tie'},{name:'Bot',icon:pap,move:'paper',status:'Tie'});
    }
    switch(botPicked){
        case 'stone':{
            console.log("User win2: "+"Paper beat stone");
            result({name:'User',icon:pap,move:'paper'},{name:'Bot',icon:sto,move:'stone'});
        }
        break;
        case 'scissor':{
            console.log("Bot win2: "+"Scissor beat Paper");
            result({name:'Bot',icon:sci,move:'scissors'},{name:'User',icon:pap,move:'paper'});
        }
        break;
    }
})
//SCISSOR
scissors.addEventListener('click',()=>{
    uPicked='scissor';
    botPicked=bot();
    if(uPicked === botPicked){
        alert("Match Tie");
        draw({name:'User',icon:sci,move:'scissors',status:'Tie'},{name:'Bot',icon:sci,move:'scissors',status:'Tie'});
    }
    switch(botPicked){
        case 'stone':{
            console.log("Bot win3: "+"Stone beat scissor");
            result({name:'Bot',icon:sto,move:'stone'},{name:'User',icon:sci,move:'scissors'});
        }
        break;
        case 'paper':{
            console.log("User win3: "+"Scissor beat paper");
            result({name:'User',icon:sci,move:'scissors'},{name:'Bot',icon:pap,move:'paper'});
        }
        break;
    }
})
}