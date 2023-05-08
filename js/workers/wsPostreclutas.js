let puerto = "4001"
const url = `http://localhost:${puerto}/reclutas`
self.addEventListener("message",(e)=>{
    let data = e.data
    Promise.resolve(fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {"Content-Type": "application/json"},
    }))
})