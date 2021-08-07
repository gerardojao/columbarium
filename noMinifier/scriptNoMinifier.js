
const main = document.getElementById("main2")
const allUsers = document.getElementById("all-users")
const userInfo = document.getElementById("user-info")

const contentUsers = document.getElementById("content__users")

let allUsersButtons = Array.from(document.querySelectorAll(".content__user .button"))
let allCheckboxs = Array.from(document.querySelectorAll(".content__user .content__checkbox"))
const allUsersCheck=document.getElementById("select-all-users")
const deleteAllButton=document.getElementById("delete-all-users")

const topBarTitle=document.getElementById("top-bar-title")

const addUserButton=document.getElementById("add-user")
const updateUserButton=document.getElementById("update-user")

let newUser=true;
const searchText =document.getElementById("search-text")
const searchNumber =document.getElementById("search-number")

const niche = document.getElementById("nicho")
const responsible = document.getElementById("responsable")
const cell = document.getElementById("celular")
const otherCell = document.getElementById("otroNumero")
const cedulaRes = document.getElementById("cedulaResponsable")

const beneficiary = document.getElementById("beneficiario")
const fallecimiento = document.getElementById("fallecimiento")
const acta = document.getElementById("acta")
const ingreso = document.getElementById("ingreso")
const mensaje =document.getElementById("mensaje")
const pago = document.getElementById("pago")

const form = document.querySelector(".main__form")
const form2 = document.getElementById("form2")

let allNames = []
let allNichos = []
let allUsersData = []

/* Este codigo ya se habia realizado */
const labels = document.querySelectorAll(".form-label")
const inputs = document.querySelectorAll(".formulario__items")

const button = document.querySelector(".form__button")
const label = document.getElementById("label")
const textarea = document.getElementById("textarea")

const showUserInfo= ()=>{
  allUsers.classList.add("all-users--hide")
  userInfo.classList.add("user-info--show")
} 

const hidderUserInfo= ()=>{
  
  allUsers.classList.remove("all-users--hide")
  userInfo.classList.remove("user-info--show")
  form.reset()
  form2.reset()
}

const selectUser = (id) => {
  const element = document.getElementById(id);

  allUsersButtons = Array.from(document.querySelectorAll('.content__users .button'))
  allUserChecks = Array.from(document.querySelectorAll('.content__users .content__checkbox'))

  if (element.checked) {
      allUserChecks.map(check => check.checked = false)
      element.checked = true
      allUsersButtons.map(button => button.classList.add('button--hide'))
      Array.from(element.parentElement.querySelectorAll('.button')).map(button => button.classList.remove('button--hide'))
  } else {
      allUsersButtons.map(button => button.classList.remove('button--hide'))
  }
}

 const selectAllUsers =()=>{
  allUsersButtons = Array.from(document.querySelectorAll(".content__user .button"))

  allCheckboxs = Array.from(document.querySelectorAll(".content__user .content__checkbox"))

  if(allUsersCheck.checked){
      allCheckboxs.map(check=>check.checked=true)
      allUsersButtons.map(button=>button.classList.add("button--hide"))
      deleteAllButton.classList.remove("button--hide")
  }else{
      allCheckboxs.map(check=>check.checked=false)
      allUsersButtons.map(button=>button.classList.remove("button--hide"))
      deleteAllButton.classList.add("button--hide")
  }
} 

 const addUser = ()=>{
  
  topBarTitle.textContent="Registro de Nuevo Usuario";
  addUserButton.classList.remove("button--hide")
  updateUserButton.classList.add("button--hide")
 
}
const saveUser = (id)=>{

  const user = getUserId(id)
  topBarTitle.textContent="Editar Usuario";
  addUserButton.classList.add("button--hide")
  updateUserButton.classList.remove("button--hide")

  

   responsible.value = user.Responsable
   niche.value = user.Nicho
   cell.value = user.NumeroCelular
   beneficiary.value = user.Difunto
   fallecimiento.value = user.FechaFallecimiento
   acta.value = user.Acta
   ingreso.value = user.FechaIngreso
   cedulaRes.value=user.CedulaResponsable
   otherCell.value = user.OtroCelular
   mensaje.value = user.Mensaje
   pago.value = user.UltimoPago

   

   updateUserButton.dataset.id = user.id
   
} 

const getUserId = (id)=>{
  
  id=id.substring(id.lastIndexOf("-")+1)
  console.log(id);  
  for (let i = 0; i < inputs.length; i++){ 
    

    if(inputs[i].nextElementSibling.classList.contains("form-label")){
       inputs[i].nextElementSibling.classList.replace("form-label","form-js")}
     
  
  
}

  return allUsersData.filter(user => user.id == id)[0]
  

}

const getAllUsers = ()=>{
 
  const path = ("php/read-all.php")

  fetch(path)

    .then(res=>(res.ok) ? Promise.resolve(res) : Promise.reject(new Error("Failed to load")) )

    .then(res => res.json())

    .then(data=>{

      allUsersData = data;
      
      const fragment = document.createDocumentFragment()
      for (const user of data) {
        fragment.append(createUserRow(user))
      }
      contentUsers.innerHTML = ""
      contentUsers.append(fragment)

      allNames = Array.from(document.querySelectorAll('[data-difunto]'))    
       
      allNichos = Array.from(document.querySelectorAll('[data-nicho]')) 
      
    })

  .catch(err=>console.log(`Error: ${err.message}`))
}

const createUserRow = (user)=>{

  const fragment = document.createDocumentFragment()

  let userRow = document.createElement("DIV")
  userRow.classList.add("content__user")
  

  let userCheck = document.createElement("INPUT")
  userCheck.setAttribute("type","checkbox")
  userCheck.id=`id-${user.id}`
  userCheck.classList.add("content__checkbox")
  userRow.append(userCheck)

  let userId = document.createElement("P")
  userId.classList.add("content__text")
  userId.textContent = user.id 
  userRow.append(userId)
  

  let userNicho = document.createElement("P")
  userNicho.dataset.nicho = user.Nicho
  userNicho.classList.add("content__text")
  userNicho.textContent = user.Nicho 
  userRow.append(userNicho)

  let userName = document.createElement("P")
  userName.dataset.difunto = user.Difunto 
  userName.classList.add("content__text")
  userName.textContent = user.Difunto 
  userRow.append(userName)
 
  let userResponsable = document.createElement("P")
  userResponsable.classList.add("content__text")
  userResponsable.textContent = user.Responsable 
  userRow.append(userResponsable)
 
  let userNumeroCelular = document.createElement("P")
  userNumeroCelular.classList.add("content__text")
  userNumeroCelular.textContent = user.NumeroCelular 
  userRow.append(userNumeroCelular)

  let userUltimoPago = document.createElement("P")
  userUltimoPago.classList.add("content__text")
  userUltimoPago.textContent = user.UltimoPago 
  userRow.append(userUltimoPago)

  let buttonEdit = document.createElement("A")
  buttonEdit.classList.add("content__link", "button", "button--edit")
  buttonEdit.textContent = "Editar"
  buttonEdit.id = `edit-user-${user.id}`

  let buttonIcon = document.createElement("I")
  buttonIcon.classList.add("fas", "fa-pen")
  buttonEdit.append(buttonIcon)

  userRow.append(buttonEdit)

  let buttonDelete = document.createElement("A")
  buttonDelete.classList.add("content__link", "button", "button--delete")
  buttonDelete.textContent = "Borrar"
  buttonDelete.id = `delete-user-${user.id}`

  buttonIcon = document.createElement("I")
  buttonIcon.classList.add("fas", "fa-trash")
  buttonDelete.append(buttonIcon)

  userRow.append(buttonDelete)



  fragment.append(userRow)
 
  return fragment
  
}

const insertUser = ()=>{

  const path = ("php/insert.php")

  const formData = new FormData()
  formData.append("Difunto",beneficiary.value.toLowerCase())
  formData.append("Nicho",niche.value)
  formData.append("Responsable",responsible.value.toLowerCase())
  formData.append("NumeroCelular",cell.value)

  formData.append("FechaFallecimiento",fallecimiento.value.toLowerCase())
  formData.append("Acta",acta.value)
  formData.append("FechaIngreso",ingreso.value.toLowerCase())
  formData.append("CedulaResponsable",cedulaRes.value)
  formData.append("OtroCelular",otherCell.value.toLowerCase())
  formData.append("Mensaje",mensaje.value)
  formData.append("UltimoPago",pago.value)

 
  fetch(path,{
    method:"POST",
    body:formData
  })

  .then(response => (response.ok) ? Promise.resolve(response) : Promise.reject(new Error('Failed to load')))

  .then(response => response.text())

  .then(data => {
      if (data !== 'ok') {
        
          clean()
          getAllUsers()
          hidderUserInfo()
      }
  })

  .catch((error) => console.log(`Error: ${error.message}`))
 
}

const updateUser = ()=>{
  
   const path = ("php/update.php")

  const formData = new FormData()
  formData.append("id",updateUserButton.dataset.id)
  
  formData.append("Difunto",beneficiary.value.toLowerCase())
  formData.append("Nicho",niche.value)
  formData.append("Responsable",responsible.value.toLowerCase())
  formData.append("NumeroCelular",cell.value)

  formData.append("FechaFallecimiento",fallecimiento.value)
  formData.append("Acta",acta.value)
  formData.append("FechaIngreso",ingreso.value)
  formData.append("CedulaResponsable",cedulaRes.value)
  formData.append("OtroCelular",otherCell.value)
  formData.append("Mensaje",mensaje.value)
  formData.append("UltimoPago",pago.value)

console.log(formData)
 
  fetch(path,{
    method:"POST",
    body:formData
  })

  .then(response => (response.ok) ? Promise.resolve(response) : Promise.reject(new Error('Failed to load')))

  .then(response => response.text())

  .then(data => {
      if (data !== 'ok') {
        
          clean()
          getAllUsers()
          hidderUserInfo()
      }
  })

  .catch((error) => console.log(`Error: ${error.message}`)) 
}

 const deleteUser = (id)=>{
  
  const path = ("php/delete.php")

  id = getUserId(id).id


 const formData = new FormData()
 formData.append("id", id)

 fetch(path,{
   method:"POST",
   body:formData
 })

 .then(response => (response.ok) ? Promise.resolve(response) : Promise.reject(new Error('Failed to load')))

 .then(response => response.text())

 .then(data => {
     if (data !== 'ok') {
       
        location.href="http://localhost/columbario%20con%20gulp/"
     }
 })

 .catch((error) => console.log(`Error: ${error.message}`)) 
} 

const clean = ()=>{

  form.reset()
  form2.reset()
  for (let i = 0; i < inputs.length; i++)
  if (inputs[i].value.length<1) {
    inputs[i].nextElementSibling.classList.replace("form-js","form-label")
}

  textarea.classList.replace("mensaje-js","mensaje")
 
}

main.addEventListener("click",e=>{
  if(e.target.classList.contains("top-bar__user-info")|| e.target.classList.contains("fa-plus")){
    newUser=true;
    addUser()
    showUserInfo()
  }else if (e.target.classList.contains("button--cancel")) {
    hidderUserInfo() 
  }else if (e.target.classList.contains("content__checkbox")) {
  selectUser(e.target.id)
  }else if(e.target.id=="select-all-users"){
    selectAllUsers()
  }else if(e.target.id.indexOf("edit-user")!==-1){
    newUser=false;
    showUserInfo()
    saveUser(e.target.id)  
  }else if(e.target.id==("add-user")){
    insertUser()
  }else if(e.target.id==("update-user")){
    updateUser()
  }else if(e.target.id.indexOf==("delete-user")!==-1){
    deleteUser(e.target.id)
  }
})

searchText.addEventListener(`keyup`,e=>{
    let value = searchText.value
    
     if (value==" ") {
        for (const name of allNames)  {
          
            name.parentElement.style.display="grid" 
        }   
    } 
   for (const name of allNames) {
    
       if (name.dataset.difunto.indexOf(value)==-1) {
           name.parentElement.style.display="none"
       }else{
        name.parentElement.style.display="grid"
       }
   }

  
})

searchNumber.addEventListener(`keyup`,()=>{
  let value = searchNumber.value
   if (typeof value=="number") {
    for (const nicho of allNichos)  {
      
        nicho.parentElement.style.display="grid" 
    }   
} 
for (const nicho of allNichos) {

   if (nicho.dataset.nicho.indexOf(value)==-1) {
       nicho.parentElement.style.display="none"
   }else{
    nicho.parentElement.style.display="grid"
   }
} 
})


mensaje.addEventListener("keyup",()=>{

 if(mensaje.nextElementSibling.classList.contains("mensaje")){
    mensaje.nextElementSibling.classList.replace("mensaje","mensaje-js")}
 
 if(mensaje.value.length<1){
    mensaje.nextElementSibling.classList.replace("mensaje-js","mensaje")}
 })


getAllUsers()