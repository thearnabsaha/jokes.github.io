const joke = document.querySelector(".joke")
const btn = document.querySelector(".btn")
const URL = "https://icanhazdadjoke.com/"
const getJokes = async ()=>{
    try {
        setHeader={
            headers:{
                accept:"application/json"
            }
        }
        const response = await fetch(URL,setHeader)
        const data = await response.json()
        joke.innerHTML=data.joke
    } catch (error) {
        console.log(error);
    }
}
btn.addEventListener("click",getJokes)
getJokes()