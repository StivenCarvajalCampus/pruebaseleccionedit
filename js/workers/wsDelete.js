const puerto = "4001"
let headers = new Headers({"Content-Type": "application/json"});

self.addEventListener("message", async (e)=>{
    let request = await (await fetch(`http://localhost:${puerto}/reclutas/${e.data}`, {method: "DELETE", headers: headers})).json();
    console.log(request);
})