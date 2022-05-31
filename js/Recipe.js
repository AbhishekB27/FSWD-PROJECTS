console.log("Recipe App")
// user define createElement functiion 
function createElement(ele ,attriName,attriValue){
    let element = document.createElement(`${ele}`);
    element.setAttribute(`${attriName}`,`${attriValue}`);
    return element
}
var inputBar = document.querySelector('.inputBar');
var cardsContainer= document.querySelector('.recipe-cards');
let searchButton = document.querySelector('.searchButton');
    cardsContainer.innerHTML="";
    inputBar.addEventListener('keyup',(event)=>{
    event.keyCode === 13 ? fetchData() : ''
})
searchButton.addEventListener('click',()=>{
    cardsContainer.innerHTML="";
    console.log("Serach Button Clicked")
    fetchData()
});

var count = 0;
const fetchData = async()=>{
    let url = `https://api.edamam.com/api/recipes/v2?type=public&q=${inputBar.value}&app_id=aa39bec7&app_key=79486f57499e5a0f9566bd4bd0945f84`;
    alert(inputBar.value)
       let response = await fetch(url);
       let data =await response.json()
       console.log(data.hits)
       data.hits.map((result)=>{
           let count=1;
           let card = createElement('div','class','card-1');
           let imgCover = createElement('div','class','img-cover')
           let preLoader = createElement('div','class','preLoader')
           imgCover.appendChild(preLoader)
           card.appendChild(imgCover)
           let ingredients = createElement('div','class','ingredients');
           let heading = createElement('div','class','heading');
           heading.innerHTML="IGREDIENTS";
           let styles = {
               "border-bottom":"1px solid white",
            //    "text-align":"center"
           }
        //    heading.style="border-bottom: 1px solid white"
        //    heading.style="border-bottom: 1px solid white"
        Object.assign(heading.style,styles)
           ingredients.appendChild(heading)
           result.recipe.ingredientLines.map((ingre)=>{
               let para= createElement('div','class','ingre-para');
               para.innerHTML=`${ ingre}.`
               console.log(para)
            ingredients.appendChild(para)
           })
           card.appendChild(ingredients)
           let img = createElement('img','src',`${result.recipe.images.REGULAR.url}`);
           if(result.recipe.images.REGULAR.url === null){
               alert("image url is null")
           }
           let recipeInfo = createElement('div','class','recipe-info');
           let name= createElement('span','class','name');
           name.innerHTML=`${result.recipe.label}`;
           let styles2 = {
            "overflow":"hidden",
            "white-space":"nowrap",
            "text-overflow":"ellipsis",
            // "color":"red"
        }
     result.recipe.label.length > 27?`${ Object.assign(name.style,styles2) }`:``
           let calories= createElement('span','class','calories');
           calories.innerHTML=`Calories: ${result.recipe.calories}`
           recipeInfo.appendChild(name)
           recipeInfo.appendChild(calories)
           setTimeout(()=>{
               imgCover.appendChild(img)
               img.style='display:block'
               preLoader.style='display:none'
           },3000)
           card.appendChild(recipeInfo)
           cardsContainer.appendChild(card)
           return cardsContainer
           count++;
           console.log(count + ": " +result.recipe.images.REGULAR)
       })
        };
    // https://api.edamam.com/api/recipes/v2?type=public&q=&app_id=aa39bec7&app_key=79486f57499e5a0f9566bd4bd0945f84