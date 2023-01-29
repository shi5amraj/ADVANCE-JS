const clickbtn1=document.getElementById("moviebtn")
const clickbtn2=document.getElementById("seriesbtn")
const movieGrid=document.getElementById("movie-grid")
var selectedValue;
const selectedDay=document.getElementById("trendingtype")




const posterimgid=document.getElementById("poster-img-id")


function btnClick1()
{    clickbtn2.classList.remove("buttonselect")
    clickbtn1.classList.add("buttonselect")
    selectedValue=""
    selectedValue=selectedDay.options[selectedDay.selectedIndex].value
   // console.log(selectedValue)
   showMoviee("movie",selectedValue)
}

function btnClick2()
{
    clickbtn1.classList.remove("buttonselect")
    clickbtn2.classList.add("buttonselect")
    selectedValue=""
    selectedValue=selectedDay.options[selectedDay.selectedIndex].value
    //console.log(selectedValue)
    showMoviee("tv",selectedValue)


}

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


var generArrForTv=[]
fetchGenerForTv()
async function fetchGenerForTv()
{

    const respo=await fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=d978465db7c89aabf9f34f9fbee1c652")
    const data=await respo.json()
   
    data.genres.map((elem)=>
    {
        
        //console.log(elem)  
        generArrForTv[elem.id]=elem.name

    })
}
//console.log(generArr)


showMovie()
async function showMovie()
{

    movieGrid.innerHTML=""
  const resp= await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=d978465db7c89aabf9f34f9fbee1c652")
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


  movieCardRelease.innerText=elem.release_date.slice(0,4)

  movieCardInfo.appendChild(movieCardTitle)
  movieCardInfo.appendChild(movieCardGener)
  movieCardInfo.appendChild(movieCardRelease)

  movieCard.appendChild(movieCardInfo)
  movieGrid.appendChild(movieCard)


  })

}



async function showMoviee(movieType,day)
{
    movieGrid.innerHTML=""
    console.log(day)
    console.log(movieType)
    var movieCardTitle;
    var movieCardReleaseDate;
  const resp= await fetch(`https://api.themoviedb.org/3/trending/${movieType}/${day}?api_key=d978465db7c89aabf9f34f9fbee1c652`)
  const data= await resp.json()
   console.log(data.results)
   



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


  if(movieType==="movie")
   {
    movieCardTitle.innerText=elem.title
    elem.genre_ids.map((element)=>
    {
      movieCardGener.innerText += `${generArr[element]} | `
    })
  
  
    movieCardRelease.innerText=elem.release_date.slice(0,4)
  
   }
   else if(movieType==="tv")
   {

    movieCardTitle.innerText=elem.name
  elem.genre_ids.map((element)=>
  {  console.log(element)
    
    movieCardGener.innerText += `${generArrForTv[element]} | `

  })


  movieCardRelease.innerText=elem.first_air_date.slice(0,4)
   }


  movieCardInfo.appendChild(movieCardTitle)
  movieCardInfo.appendChild(movieCardGener)
  movieCardInfo.appendChild(movieCardRelease)

  movieCard.appendChild(movieCardInfo)
  movieGrid.appendChild(movieCard)


  })

}

function selectOnchange()
{
    selectedValue=""
    selectedValue=selectedDay.options[selectedDay.selectedIndex].value
    console.log("in select function "+selectedValue )

 const [selectedbtn]= document.getElementsByClassName("buttonselect")

 console.log(selectedbtn.value)

 showMoviee(selectedbtn.value,selectedValue)

}