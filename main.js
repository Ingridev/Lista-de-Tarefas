const addTask = document.getElementById("addTask")
const bntAddTask = document.getElementById("btnTask")
const divAdded = document.getElementById("added")


bntAddTask.onclick = function() {

 const neutral = document.createElement("div")
 const add = document.createElement("div")
 const iconFrame = document.createElement("img")
 const paragTask = document.createElement("p")
 const remove = document.createElement("div")
 const iconRemove = document.createElement("img")

  neutral.setAttribute("class","neutral")
  add.setAttribute("class","add")
  iconFrame.setAttribute("class","iconFrame")
  iconFrame.setAttribute("src","assets-zip/Frame.svg")
  remove.setAttribute("class","remove")
  iconRemove.setAttribute("class","iconRemove")
  iconRemove.setAttribute("src","assets-zip/remove.svg")

   divAdded.appendChild(neutral)
   neutral.appendChild(add)
   neutral.appendChild(remove)

    add.appendChild(iconFrame)
    add.appendChild(paragTask)
    remove.appendChild(iconRemove)

     if(addTask.value == "") {
      window.alert("Você adicionou uma tarefa vazia!")
     } else {
      paragTask.innerText = addTask.value 
     }

      neutral.onclick = function() {
       paragTask.style.color = "#02b553"
       paragTask.style.textDecoration = "line-through"
       iconFrame.setAttribute("src","assets-zip/check.svg")
       neutral.style.borderColor = "#02b553"
      }

      neutral.ondblclick = function() {
       paragTask.style.color = "black"
       paragTask.style.textDecoration = ""
       iconFrame.setAttribute("src","assets-zip/Frame.svg")
       neutral.style.borderColor = "white"
      }

      iconRemove.onclick = function() {
       neutral.style.display = iconRemove == 'none' ? 'block' : 'none';
      }

     document.getElementById("addTask").value = ""
     
    }






 


 




