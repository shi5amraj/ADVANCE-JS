const movieGrid=document.getElementById("movie-grid")
var generArr=[]
fetchGener()
async function fetchGener()
{

    const respo=await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=d978465db7c89aabf9f34f9fbee1c652")
    const data=await respo.json()
   
    data.genres.map((elem)=>
    {
        
        //console.log(elem)  
        generArr[elem.id]=elem.name

    })
}


async function searchMovie()
{
    movieGrid.innerHTML=""
const textinput=document.getElementById("textinput").value
const selectedDay=document.getElementById("trendingtype")
 const selectedValue=selectedDay.options[selectedDay.selectedIndex].value


 const resp= await fetch(`https://api.themoviedb.org/3/search/${selectedValue}?query=${textinput}&page=1&include_adult=false&language=en-US&api_key=d978465db7c89aabf9f34f9fbee1c652`)
 
const data= await resp.json()

data.results.map((elem)=>
  {

  //console.log(elem)

  const movieCard=document.createElement("div")
  movieCard.classList.add("movie-card")
  const anchorTag= document.createElement("a")
  const movieCardPoster=document.createElement("div")
  movieCardPoster.classList.add("movie-card-poster")
  const img=document.createElement("img")
  img.src=`https://image.tmdb.org/t/p/w154/${elem.poster_path}` 
 
  anchorTag.appendChild(img)
  movieCardPoster.appendChild(anchorTag)
  movieCard.appendChild(movieCardPoster)

  const movieCardInfo=document.createElement("div")
  movieCardInfo.classList.add("movie-card-info")

  const movieCardTitle=document.createElement("div")
  movieCardTitle.classList.add("movie-card-title")
  const movieCardGener =document.createElement("div")
  movieCardGener.classList.add("movie-card-geners")
  const movieCardRelease=document.createElement("div")
  movieCardRelease.classList.add("movie-card-release")

  movieCardTitle.innerText=elem.title
  elem.genre_ids.map((element)=>
  {
    movieCardGener.innerText += `${generArr[element]} | `
  })

if(selectedValue=="movie")
{ console.log("in movie")
  movieCardRelease.innerText=elem.release_date.slice(0,4)
}
if(selectedValue=="tv")
{  console.log("in tv")
  movieCardRelease.innerText=elem.first_air_date.slice(0,4)
}
 

  movieCardInfo.appendChild(movieCardTitle)
  movieCardInfo.appendChild(movieCardGener)
  movieCardInfo.appendChild(movieCardRelease)

  movieCard.appendChild(movieCardInfo)
  movieGrid.appendChild(movieCard)


  })

}

