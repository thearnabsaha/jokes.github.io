const url = "https://icanhazdadjoke.com";
const line = document.querySelector(".line")
const btn = document.querySelector(".btn")
const newJoke=async()=>{
	try {
		const setHeader={
			headers:{
				accept: "application/json"
			}
		}
		const res = await fetch(url,setHeader)
		const data = await res.json()
		line.innerHTML = data.joke
	} catch (error) {
		console.log(`the error is ${error}`);
	}
}
btn.addEventListener('click',newJoke)
newJoke()