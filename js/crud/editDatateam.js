import print from "./getDatateam.js"
export default{
    editEvent(element){
        const modal = document.querySelector("#my-dialog")
        console.log(element.classList[1]);
        let form = document.querySelector("#editForm")
        form.addEventListener("submit", (e)=>{
            e.preventDefault();
            let data;
            data = Object.fromEntries(new FormData(e.target))
            let ws = new Worker("js/workers/wsPutteam.js", {type: "module"})
            ws.postMessage({data: data, id: element.classList[1]})
            print.printData();
        })
    }
}