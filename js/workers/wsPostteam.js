let puerto = "4001"
const url = `http://localhost:${puerto}/team`
self.addEventListener("message",(e)=>{
    let data = e.data
    Promise.resolve(fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {"Content-Type": "application/json"},
    }))
})