const puerto = "4001"
let headers = new Headers({"Content-Type": "application/json"});

self.addEventListener("message", async (e)=>{
    let request = await (await fetch(`http://localhost:${puerto}/reclutas/${e.data.id}`, 
    {
        method: "PUT", 
        headers: headers,
        body: JSON.stringify(e.data.data)
    })).json();
})