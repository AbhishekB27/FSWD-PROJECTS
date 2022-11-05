console.log("Quotes Of The Day")
var quote = document.getElementById('quote-data')
var author = document.getElementById('author')
var next = document.getElementById('next')
var copy = document.getElementById('copy')
var url = `https://dummyjson.com/quotes`;
var quoteArr = []

const getQuote= async (url)=>{
    const data = await fetch(url);
    const quotes = await data.json()
    // console.log(quotes)
    quotes.quotes.filter(data => data.quote.length <= 87).forEach(element => {
        quoteArr.push(element)
        // console.log(element)
    });
}
next.addEventListener('click',()=>{
    quote.innerHTML=''
    author.innerHTML=''
    let randNum = Math.ceil(Math.random() * quoteArr.length -1)
    console.log(randNum)
    quote.innerHTML=`${quoteArr[randNum].quote}`
    author.innerHTML=`-- ${quoteArr[randNum].author}`
});
copy.addEventListener('click',()=>{
    navigator.clipboard.writeText(quote.innerText).then(()=>{
        alert("Quote Copied: " + quote.innerText)
    }).catch((err)=>{
        console.log("Something went wrong")
    })
})
getQuote(url)