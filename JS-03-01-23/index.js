const subheading=document.getElementById("subheading");
subheading.innerText=`Currently we have ${countries_data.length} countries`

const graphTitle=document.getElementById("graphTitle")

const sorted_data=countries_data.sort(function (a,b)
{
    return b.population-a.population
})



let totalPopulation=0

countries_data.map( (element)=>
{
    totalPopulation += +element.population  
})



var clearGraph=document.getElementById("graph");

 function buttonOneClicked()
 {
    clearGraph.innerText=""
    graphTitle.innerText="10 most populated countries in world"

    for(let i=0;i<10;i++)
    {
        const oneDiv=document.createElement("div")
        oneDiv.style.height="fit-content"
        oneDiv.style.width="100%"
        oneDiv.style.display="flex"
        oneDiv.style.justifyContent="center"
        oneDiv.style.alignItems="center"

        oneDiv.style.marginTop="10px"

          const countryName=document.createElement("p")
           countryName.innerText=sorted_data[i].name
           countryName.style.width="20%"
           countryName.style.height="30px"
           countryName.style.display="flex"
           countryName.style.justifyContent="center"
           countryName.style.alignItems="center"

           oneDiv.appendChild(countryName)

           const percentDivContainer= document.createElement("div")
           percentDivContainer.style.width="60%"
          
          

           const percentageDiv=document.createElement("div")
          const percentage=(sorted_data[i].population/totalPopulation)*100
          percentageDiv.style.width=`${percentage.toFixed(2)}%`
         
          percentageDiv.style.backgroundColor="orange"
          percentageDiv.style.border="2px solid orange"
          percentageDiv.style.height="content-fit"
          percentageDiv.innerText=`${percentage.toFixed(2)}%`
          percentDivContainer.appendChild(percentageDiv)
          oneDiv.appendChild(percentDivContainer)

          const populationDiv=document.createElement("div")
          populationDiv.innerText=sorted_data[i].population
          populationDiv.style.width="20%"

          oneDiv.appendChild(populationDiv)


          const graph=document.getElementById("graph")
          graph.appendChild(oneDiv)



    }


   


 }

 function buttonTwoClicked()
 {
     
     clearGraph.innerText=""
     graphTitle.innerText="10 most spoken languages in world"


     const languageArray=[]
     countries_data.map((ele)=>
     {
        languageArray.push(ele.languages)
     }

     )

     const flattedLanguageArray=languageArray.flat()
     
     const langObj={}

     flattedLanguageArray.map((ele)=>
        {
            langObj[ele]=(langObj[ele] || 0) + 1
 
        }

     )

     const arrWithLanguageAndCount=Object.entries(langObj)
   
     const sortedArray=arrWithLanguageAndCount.sort((a,b)=>
     {
        return b[1]-a[1]
     }

     )
     console.log(sortedArray)


     for(let i=0;i<10;i++)
     {
        const topTenArray=sortedArray[i]


        const oneDiv=document.createElement("div")
        oneDiv.style.height="fit-content"
        oneDiv.style.width="100%"
        oneDiv.style.display="flex"
        oneDiv.style.justifyContent="center"
        oneDiv.style.alignItems="center"

        oneDiv.style.marginTop="10px"

          const countryName=document.createElement("p")
           countryName.innerText=topTenArray[0]
           countryName.style.width="20%"
           countryName.style.height="30px"
           countryName.style.display="flex"
           countryName.style.justifyContent="center"
           countryName.style.alignItems="center"

           oneDiv.appendChild(countryName)

           const percentDivContainer= document.createElement("div")
           percentDivContainer.style.width="60%"
          
          

           const percentageDiv=document.createElement("div")
          const percentage=(topTenArray[1]/sortedArray.length)*100
          percentageDiv.style.width=`${percentage.toFixed(2)}%`
         
          percentageDiv.style.backgroundColor="orange"
          percentageDiv.style.border="2px solid orange"
          percentageDiv.style.height="content-fit"
          percentageDiv.innerText=`${percentage.toFixed(2)}%`
          percentDivContainer.appendChild(percentageDiv)
          oneDiv.appendChild(percentDivContainer)

          const populationDiv=document.createElement("div")
          populationDiv.innerText=topTenArray[1]
          populationDiv.style.width="20%"

          oneDiv.appendChild(populationDiv)


          const graph=document.getElementById("graph")
          graph.appendChild(oneDiv)


        

     }


 }

window.onload = (event) => {
    console.log("page is fully loaded");
    buttonOneClicked()
  };