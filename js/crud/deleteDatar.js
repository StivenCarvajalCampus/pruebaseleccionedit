export default{
    getEvent(p1){
        p1.parentNode.parentNode.remove()
        let ws = new Worker("js/workers/wsDelete.js", {type: "module"})
        ws.postMessage(p1.classList[1])
    }
}