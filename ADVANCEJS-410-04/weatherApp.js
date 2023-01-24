


async function showWeather()
{
    const location=document.getElementById("cityName").value
const resultCity =document.getElementById("para1")
const skyCondition =document.getElementById("para2")
const temp =document.getElementById("para3")
const wind =document.getElementById("para4")

 const resp= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d8ab14f7e93c56cbe84562d28e8202bd&units=metric`)

 const data= await resp.json();
 resultCity.innerHTML=`Weather of ${data.name}`
 skyCondition.innerText=`Sky Condition : ${data.weather[0].description}`
 temp.innerText=`Temprature : ${data.main.temp}`
 wind.innerText=`Wind  Speed : ${data.wind.speed}`

}