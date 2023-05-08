import delete_reclutas from "./deleteDatar.js"
import edit_reclutas from  "./editDatar.js"

export default {
    ws: new Worker("js/workers/wsMyTableget.js", {type:"module"}),
    printData(){
        window.addEventListener("DOMContentLoaded", (e)=>{
            const dialog = document.querySelector("#my-dialog")
            this.ws.postMessage("get")
            this.ws.addEventListener("message", (e) => {
                let data = e.data;
                document.querySelector("tbody").insertAdjacentHTML("beforebegin", e.data);
                let delete_button = document.querySelectorAll(".delete");
                let edit_button = document.querySelectorAll(".edit");
                delete_button.forEach((element) => {
                  element.addEventListener("click", () => {
                    delete_reclutas.getEvent(element)
                  });
                });
                edit_button.forEach((element) => {
                    element.addEventListener("click", () => {
                      edit_reclutas.editEvent(element)
                      dialog.showModal();
                    });
                  });
                console.log(delete_button);
              });
              
        })
    },
    changeView(){
        document.querySelector("#register").addEventListener("click", (e)=>{
            window.location.href = "index.html"
        })
    },
    search(){
      const modal = document.querySelector("#my-popup")
      const search_button = document.querySelector(".search");
      const search_inputs = document.querySelector("#searchInput")
      const close_button = document.querySelector("#closepopup")
      search_button.addEventListener("click", ()=>{
        modal.showModal();
      })
      search_inputs.addEventListener("input", (e)=>{
        let modal = document.querySelector(".modalbody");
        let ws2 = new Worker("js/workers/wsSearch.js", {type: "module"});
        let data = e.target.value.trim();
        ws2.postMessage(data);
        ws2.addEventListener("message", (e)=>{
          if (e.data.data) {
            modal.innerHTML = null
            ws2.terminate();
          }else{
            let data = e.data;
            modal.innerHTML = data
            ws2.terminate();
          }
        })
      })
      close_button.addEventListener("click", (e)=>{
        modal.close();
      })
      
    },
    //buscador por edad
    searchedad(){
      const modal = document.querySelector("#my-popupedad")
      const search_button = document.querySelector(".searchedad");
      const search_inputs = document.querySelector("#searchInputedad")
      const close_button = document.querySelector("#closepopupedad")
      search_button.addEventListener("click", ()=>{
        modal.showModal();
      })
      search_inputs.addEventListener("input", (e)=>{
        let modal = document.querySelector(".modalbodyedad");
        let worker3 = new Worker("js/workers/wsMenores.js", {type: "module"});
        let data = e.target.value.trim();
        worker3.postMessage(data);
        worker3.addEventListener("message", (e)=>{
          if (e.data.data) {
            modal.innerHTML = null
            worker3.terminate();
          }else{
            let data = e.data;
            modal.innerHTML = data
            worker3.terminate();
          }
        })
      })
      close_button.addEventListener("click", (e)=>{
        modal.close();
      })
      
    }
}