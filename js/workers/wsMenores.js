const puerto = "4001"
let headers = new Headers({"Content-Type": "application/json"});
let ws = {
    
    query(data){
        let edad = document.getElementById("searchInputedad");
        let template = ""
        data.forEach(e => {
            template +=  `
            <tr class="p-1">
            <td>${e.id}</td>
            <td>${e.nombre}</td>
            <td>${e.edad}</td>
            <td>${e.telefono}</td>
            <td>${e.email}</td>
            <td>${e.direccion}</td>
            <td>${e.fecha_nacimiento}</td>
            <td>${e.numero_identificacion}</td>
            <td>${e.fecha_ingreso}</td>
            <td>${e.teamId}</td>
          </tr>
          `
          return template
        });
        return template
    }
}
self.addEventListener("message", async (e)=>{
    let request = await fetch(`http://localhost:${puerto}/reclutas?edad_lte=${e.data.edad}`, {method: "GET",headers: headers})
    let response = await request.json();
    if (e.data === "") {
        postMessage({data: "nombre"})
    }postMessage(ws.query(response))
}) 