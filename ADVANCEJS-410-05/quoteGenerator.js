const quoteline=document.getElementById("quoteline")
const authorName=document.getElementById("authorName")

async function generateNewQuote()
{

    const resp= await fetch("https://api.quotable.io/random")

    const data= await resp.json()
    quoteline.innerText=`"${data.content}"`
    authorName.innerText=`~${data.author}` 

}
generateNewQuote()