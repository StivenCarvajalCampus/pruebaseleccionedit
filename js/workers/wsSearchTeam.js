const puerto = "4001"
let headers = new Headers({"Content-Type": "application/json"});
let ws = {
    query(data){
        let template = ""
        data.forEach(e => {
            template +=  `
            <tr class="p-1">
            <td>${e.id}</td>
            <td>${e.name}</td>
            <td>${e.trainer_asociado}</td>
          </tr>
          `
          return template
        });
        return template
    }
}
self.addEventListener("message", async (e)=>{
    let request = await fetch(`http://localhost:${puerto}/team?q=${e.data}`, {method: "GET",headers: headers})
    let response = await request.json();
    if (e.data === "") {
        postMessage({data: "nombre"})
    }postMessage(ws.query(response))
}) 