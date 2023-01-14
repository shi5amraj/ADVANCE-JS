var btn=document.getElementsByClassName("drum")
for(let i=0;i<btn.length;i++)
{
    btn[i].addEventListener("click",()=>
    {
        playSound(btn[i].innerHTML)
        
        Animation(btn[i].id)

    }
    )

}

function playSound(pressedbtn)
{
    
    if(pressedbtn=="w")
    {  const audio = new Audio("sounds/crash.mp3");
        audio.play();

    }

    else if(pressedbtn=="a")
    {
        const audio = new Audio("sounds/buzz.mp3");
        audio.play(); 
    }
    else if(pressedbtn=="s")
    {
        const audio = new Audio("sounds/buzzer.mp3");
        audio.play();  
    }
   else if(pressedbtn=="d")
    {
        const audio = new Audio("sounds/crock.mp3");
        audio.play();  
    }
   else  if(pressedbtn=="j")
    {
        const audio = new Audio("sounds/snare.mp3");
        audio.play();  
    }
   else if(pressedbtn=="k")
    {
        const audio = new Audio("sounds/pin.mp3");
        audio.play(); 
    }
   else if(pressedbtn=="l")
    {
        const audio = new Audio("sounds/kick-bass.mp3");
        audio.play(); 
    }
}


function Animation(id)
{
    const elem= document.getElementById(id) 
console.log(elem)
    elem.classList.add("pressed");
setTimeout(function(){
    elem.classList.remove("pressed");
},100);
}