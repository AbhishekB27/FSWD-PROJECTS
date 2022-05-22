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
var stone = getRefOfElement('.stone');
var paper = getRefOfElement('.paper');
var scissors = getRefOfElement('.scissor');
