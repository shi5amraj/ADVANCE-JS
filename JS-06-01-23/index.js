
const tagArray=[]

function searchEmojiKeyup()
{

   
const input= document.getElementById("input").value

const table= document.getElementById("tableData")
console.log(input)
console.log(table)
table.innerHTML=""

emojiList.map((element)=>
{   
    element.tags.map((ele)=>
    {
       
        console.log()
   if(ele.startsWith(input))
   {
    
    tagArray.push(element)
    table.innerHTML +=`
    <tr class="tableRow" id="tableRow">
    <td id="emojiIcon">${element.emoji} </td>
    <td id="emojiTags">  ${element.aliases}</td>
    <td id="emojiname"> ${element.description}</td>
    </tr>
    `
   }

    })

})
 

console.log(tagArray.length)


}

function searchEmoji()
{

    const input=document.getElementById("input").value

    const table= document.getElementById("tableData")


    emojiList.map((element)=>
    {
  if(element.tags.includes(input))
  {
    table +=
    `<tr>
    <td>${element.emoji}</td>
    <td>${element.aliases}</td>
    <td>${element.description}</td>
    </tr>`
    
  }
       
    })


console.log("")
}
