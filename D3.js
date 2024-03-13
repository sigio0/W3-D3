//div contenitore di tutte le task
const Conteiner = document.createElement("div");
const titoloConteiner = document.createElement("h3");
titoloConteiner.innerText = "ELENCO TASK:";
Conteiner.appendChild(titoloConteiner);
Conteiner.id = "ConteinerTask ";
Conteiner.style.width = "12%";
Conteiner.style.marginLeft = "auto";
Conteiner.style.marginRight = "auto";
Conteiner.style.marginBottom = "10%";
Conteiner.style.boxShadow = "0 0 10px rgba(0 , 0, 0,0.2)";

document.body.appendChild(Conteiner);

const formSubmit = (e) => {
  e.preventDefault();

  //creazione div per ogni task
  const divTask = document.createElement("div");
  divTask.style.borderBottom = "2px solid";
  divTask.style.paddingBottom = "5px";
  divTask.className = "task";

  //creazione tasto elimina task
  const DeleteTask = document.createElement("input");
  DeleteTask.type = "button";
  DeleteTask.id = "EliminaTask";
  DeleteTask.value = "Elimina";

  // va a prendere valore input , la mette nel div , e la appende al body
  const nameTask = document.getElementById("name").value;
  divTask.innerText = nameTask;
  Conteiner.appendChild(divTask);

  //appendo dentro al div contenente le task un pulsante per eliminarle
  divTask.appendChild(DeleteTask);

  //funziona che ogni volta che clicca il div contenente la task mette il testo con la linea in mezzo
  divTask.addEventListener("click", (e) => {
    divTask.style.textDecoration = "line-through";
  });

  //funzione che ogni volta che clicca il bottone elimina il divtask
  DeleteTask.addEventListener("click", (e) => {
    divTask.remove();
  });
};

const form = document.getElementById("form-task");
form.addEventListener("submit", formSubmit);
