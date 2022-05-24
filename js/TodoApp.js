console.log("TODO-APP");

//user define getElement function 
function getRefOfElement(ele){
    let element = document.querySelector(`${ele}`);
    element.classList.add('hello');
    return element;
   }
   //user define createElement functiion 
   function createElement(ele ,attriName,attriValue){
       let element = document.createElement(`${ele}`);
       element.setAttribute(`${attriName}`,`${attriValue}`);
       return element
   }

const addButton = document.querySelector('.add-button');
const todoInput = document.querySelector('.todo-input');
const inputBox = getRefOfElement('.input-box');
const resetButton = document.querySelector('.reset');
const day = new Date().getDay();
const date = new Date().getDate();
const year = new Date().getMonth();
const nameOfDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const nameOfYear = ["January","Feburary","March","April","May","June","July","August","September","October","November","December"];
var todoArr = [];


//Add Item in todo app
addButton.addEventListener('click',()=>{
    let timeBox = getRefOfElement('.time-input');
    let listP = createElement('li','class','todo-item');
    let listC = createElement('div','class','wrapper');
    let listCC1 = createElement('div','class','check-cover');
    let listCC2 = createElement('div','class','item-time');
    let listCC1C1 = createElement('input','type','checkbox');
    let listCC1C2 = createElement('span','class','check-item');
    let listCC2C = createElement('span','class','task-time');
    let orderList = getRefOfElement('ol');
    let noTask = getRefOfElement('.no-task');
    let taskNo = getRefOfElement('.task-no');
 
    let itemValue = inputBox.value;
    if(itemValue != null){
        noTask.style = 'display:none'
    }
    else{
        noTask.style = 'display:block'
    }
    listP.appendChild(listC)
    listC.appendChild(listCC1)
    listC.appendChild(listCC2)
    listCC1.appendChild(listCC1C1)
    listCC1C2.innerHTML = `${itemValue}`;
    listCC1.appendChild(listCC1C2)
    listCC2C.innerHTML = `${timeBox.value}`;
    listCC2.appendChild(listCC2C)
    // console.log(listP)
    todoArr.push(listP);
    //count tasks
    taskNo.innerHTML="";
    taskNo.innerHTML =`${todoArr.length} Tasks`;
    // console.log("i m array" + todoArr);
    todoArr.forEach((val)=>{
        orderList.appendChild(val);
    });


});
//reset todo-input
resetButton.addEventListener('click',()=>{
    inputBox.value="";
});

//set date objects to todo app
const setDateToDo = (day,date,year,nameOfDay,nameOfYear)=>{
let dayT = getRefOfElement('.day');
let dateNoT = getRefOfElement('.date-no');
let yearT = getRefOfElement('.year');
   dayT.innerHTML="";
   dayT.innerHTML = `${ nameOfDay[day] },`;
   dateNoT.innerHTML="";
   dateNoT.innerHTML = `${date}`
   yearT.innerHTML = "";
   yearT.innerHTML=`${nameOfYear[year]}`;
}
setDateToDo(day,date,year,nameOfDay,nameOfYear)