 const bottomDiv=document.getElementById("bottomContainer")
 
 
 async function showmeals()
{
 const mealName=document.getElementById("foodname").value;
 bottomDiv.innerHTML=""

  const resp= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)

  const data= await resp.json()

   data.meals.map((elem)=>
   {
  const img=document.createElement("img")
   img.src=`${elem.strMealThumb}`
   
   const imgDiv=document.createElement("div")
   imgDiv.classList.add("card")
   imgDiv.appendChild(img)
   bottomDiv.appendChild(imgDiv)

   })





}