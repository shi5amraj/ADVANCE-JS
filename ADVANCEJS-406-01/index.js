
const totalCountry=document.getElementById("noOfCountry")
totalCountry.innerText=`Total Number of countries are ${countries_data.length}`

const noOfSearchedCountries=document.getElementById("SearchedCountry")
 

const countryName=[]

countries_data.map((ele)=>
{

    countryName.push(ele.name.toLowerCase())
})



function startWith()
{
const bottomContainer= document.getElementById("bottomContainer")
bottomContainer.innerHTML=""

const inputtext=document.getElementById("inputtext")
inputtext.setAttribute("onkeyup","startWith()")

const inputValue=inputtext.value

const matchedCountry=[]

countryName.map((ele)=>
{
const matching=ele.startsWith(inputValue.toLowerCase())

if(inputValue=="")
{
    bottomContainer.innerHTML=`
    <div class="card"> <p>Please Enter a Text to search</p></div>`  


}
else
{

    if(matching)
    {
    matchedCountry.push(ele)
    bottomContainer.innerHTML +=`<div class="card"> <p>${ele}</p></div>`

    }
}

})
noOfSearchedCountries.innerHTML=`<p>Number of countries that include  <h3 class="h3class">${inputValue}</h3> are ${matchedCountry.length}</p>`

}

 function anyword()

 {
    const bottomContainer= document.getElementById("bottomContainer")
    bottomContainer.innerHTML=""
    
    const inputtext=document.getElementById("inputtext")
    inputtext.setAttribute("onkeyup","anyword()")
    
    const inputValue=inputtext.value
    
    const matchedCountry=[]
    
    countryName.map((ele)=>
    {
    const matching=ele.includes(inputValue.toLowerCase())
    
    if(inputValue=="")
    {
        bottomContainer.innerHTML=`
        <div class="card"> <p>Please Enter a Text to search</p></div>`  
    
    
    }
    else
    {
    
        if(matching)
        {
        matchedCountry.push(ele)
        bottomContainer.innerHTML +=`<div class="card"> <p>${ele}</p></div>`
    
        }
    }
    
    })
    noOfSearchedCountries.innerHTML=`<p>Number of countries that include  <h3 class="h3class">${inputValue}</h3> are ${matchedCountry.length}</p>`

 }