const formRegister = document.getElementById("form-register")
const emailError = document.getElementById("email-error")

let fullname = document.getElementById("FullName")
let email = document.getElementById("email")
let password = document.getElementById("password")

let displayError = document.querySelector("#error")



let datas = JSON.parse(localStorage.getItem("database")) || []

formRegister.addEventListener("submit", (e) => {
  e.preventDefault()
  if (
    fullname.value === "" && email.value === "" && password.value === ""
  )
    return

  if (password.value.length <= 8) {
    let personData = {
      fullname: fullname.value,
      email: email.value,
      password: password.value,
    }

    datas.push(personData)

    localStorage.setItem("database", JSON.stringify(datas))

    window.location.href = "login.html"

    last()
}   else {
    displayError.style.display = "block"
    displayError.textContent = ` Password must be at least 8 characters`
  }
})

function last() {
  fullname.value = ""

  email.value = ""
  
  password.value = ""
}