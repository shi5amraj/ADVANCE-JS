var count =0

function AppPlayerDetails()
{
    const firstName = document.getElementById("firstName").value
    const lastName = document.getElementById("lastName").value
    const country = document.getElementById("country").value
    const score = +document.getElementById("score").value
    

    
    // const  errorDiv=document.createElement("div")
    // errorDiv.classList.add("errorDiv")
    // errorDiv.setAttribute("id","errorDiv")
    const  errorDiv=document.getElementById("errorDiv")

    errorDiv.style.color="red"
    errorDiv.style.fontWeight="bold"
     const container=document.getElementById("container")
   
   if(firstName=="" || lastName=="" || country=="" || score=="")
   {
    
    errorDiv.innerHTML="<p>All Fields Are Required</p>"

   errorDiv.style.display="block"

    
   } 
   else
   {
    errorDiv.innerHTML=""
    errorDiv.style.display="none"
   const innerDiv=document.createElement("div")
   innerDiv.classList.add("innerDiv")
   innerDiv.setAttribute("id",`innerDiv${count}`)
   
    

   const nameDiv=document.createElement("div")
   const countryDiv=document.createElement("div")
   const scoreDiv=document.createElement("div")
   const buttonDiv=document.createElement("div")
   const delBtnDiv=document.createElement("div")
   const addBtnDiv=document.createElement("div")
   const subTractBtnDiv=document.createElement("div")
   
   
   nameDiv.innerText=firstName+" "+lastName
   nameDiv.classList.add("nameDiv")
   countryDiv.innerText=country
   countryDiv.classList.add("countryNameDiv")
   scoreDiv.innerText=score
   scoreDiv.classList.add("scoreDiv")
   scoreDiv.setAttribute("id",`scoreDiv${count}`)

   delBtnDiv.innerHTML= `<i class="fa-solid fa-trash-can"> </i>`
   delBtnDiv.classList.add("delRow")
   delBtnDiv.setAttribute("id",`del${count}`)
   delBtnDiv.setAttribute("onclick",`deleteElem(${count})`)
   
   addBtnDiv.innerText="+5"
   addBtnDiv.classList.add("plusScore")
   addBtnDiv.setAttribute("id",`plusFive${count}`)
   addBtnDiv.setAttribute("onclick",`addElem(${count})`)
   

   subTractBtnDiv.innerText="-5"
   subTractBtnDiv.classList.add("minusScore")
   subTractBtnDiv.setAttribute("id",`subFive${count}`)
   subTractBtnDiv.setAttribute("onclick",`subtractElem(${count})`)
   
   buttonDiv.classList.add("buttonDiv")
   buttonDiv.appendChild(addBtnDiv)
   buttonDiv.appendChild(subTractBtnDiv)
   buttonDiv.appendChild(delBtnDiv)

   innerDiv.appendChild(nameDiv)
   innerDiv.appendChild(countryDiv)
   innerDiv.appendChild(scoreDiv)
   innerDiv.appendChild(buttonDiv)
    container.appendChild(innerDiv)


   }
   count=count+1
    
}

function deleteElem(counter)
{
    const deleteEle=document.getElementById(`del${counter}`)

    const inrDiv=document.getElementById(`innerDiv${counter}`)
    inrDiv.remove()


}

function addElem(counter)
{
    
    const score= document.getElementById(`scoreDiv${counter}`)
    score.innerText= +document.getElementById(`scoreDiv${counter}`).innerText+5
   

}

function subtractElem(counter)
{
    const score= document.getElementById(`scoreDiv${counter}`)
    score.innerText= +document.getElementById(`scoreDiv${counter}`).innerText-5
}