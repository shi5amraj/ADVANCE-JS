const searchInput = document.getElementById("searchBox")
const profileContainer = document.getElementById("profileContainer")


async function func2() 
{

    const resp= await fetch("https://api.github.com/users")
    const data= await resp.json()
    profileContainer.innerHTML = ""

    data.map((ele)=>
    {
   const profilepic=ele.avatar_url
   const userName=ele.login
   const profile=ele.html_url

   profileContainer.innerHTML += `
            <div class="innerDiv">
                <img src= ${profilepic} />
                <div>
                    <h3>${userName}</h3>
                    <a href=${profile}>view profile</a>
                </div>
            </div>
        `
  



    })


}


func2()


async function myfunction() {
    const SearchValue = searchInput.value 
    const Response = await fetch(`https://api.github.com/search/users?q=${SearchValue}`)
    const data = await Response.json()
    console.log(data.items);
    profileContainer.innerHTML = ""

    data.items.map((ele)=>{
        const userName = ele.login
        const avatar = ele.avatar_url
        const profile = ele.html_url
        console.log(userName, avatar, profile, profileContainer);
        profileContainer.innerHTML += `
            <div class="innerDiv">
                <img src= ${avatar} />
                <div>
                    <h3>${userName}</h3>
                    <a href=${profile}>view profile</a>
                </div>
            </div>
        `
    })

}

function clearFunction() {
    profileContainer.innerHTML = ""
    searchInput.value = ""
    // func2()
}
