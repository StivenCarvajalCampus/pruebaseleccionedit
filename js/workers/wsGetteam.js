let puerto = "4001"
const url = `http://localhost:${puerto}/team`
let headers = new Headers({"Content-Type": "application/json"});
let ws = {
    printData(data){
        let template = ""
        data.forEach(e => {
            template +=  `
            <tr class="p-1">
            <td>${e.id}</td>
            <td>${e.name}</td>
            <td>${e.trainer_asociado}</td>
            <td><button type="button" class="delete ${e.id} btn btn-light w-100">Delete</button></td>
            <td><button type="button" class="edit ${e.id} btn w-100">Edit</button></td>
          </tr>
          `
          return template
        });
        return template
    }
}
self.addEventListener("message", async (e)=>{
    let request = await (await fetch(url, {method: "GET", headers: headers})).json();
    postMessage(ws.printData(request))
})