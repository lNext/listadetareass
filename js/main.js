const anadir = document.querySelector(".anadir input");
const addboton = document.querySelector(".anadir button");
const listaa = document.querySelector(".listaa");
const borrartodo = document.querySelector(".pendientes button");

anadir.onkeyup = ()=>{
    let datos = anadir.value;
    if(datos.trim() != 0){
        addboton.classList.add("active");
    }else{
        addboton.classList.remove("active");
    }
}
mostrartareas();

addboton.onclick = ()=>{
    let datos = anadir.value;
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage == null){
        listArray = [];
    }else{
        listArray = JSON.parse(getLocalStorage);
    }
    listArray.push(datos);
    localStorage.setItem("New Todo", JSON.stringify(listArray));
    mostrartareas();
    addboton.classList.remove("active");
}


function mostrartareas(){
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage == null){
        listArray = [];
    }else{
        listArray = JSON.parse(getLocalStorage);
    }
    const numbertasks = document.querySelector(".numbertasks");
    numbertasks.textContent = listArray.length;
    if(listArray.length > 0){
        borrartodo.classList.remove("active");
    }else{
        borrartodo.classList.add("active");
    }
    let nuevalista = '';
    listArray.forEach((element, index) => {
        nuevalista += `<li> ${element} <span onclick="borrarTarea(${index})";><i class="fas fa-trash-alt"></i></span></li>`;
    });
    listaa.innerHTML = nuevalista;
    anadir.value = "";
}

function borrarTarea(index){
    let getLocalStorage = localStorage.getItem("New Todo");
    listArray = JSON.parse(getLocalStorage);
    listArray.splice(index, 1);
    localStorage.setItem("New Todo", JSON.stringify(listArray));
    mostrartareas(); 
}

borrartodo.onclick = () =>{
    listArray = [];
    localStorage.setItem("New Todo", JSON.stringify(listArray));
    mostrartareas(); 
}
