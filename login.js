const formUser = document.querySelector("#form-login")
const passwordError = document.getElementById("error-note")
const lName = document.getElementById("name")
const password = document.getElementById("password")

const entries = JSON.parse(localStorage.getItem("database")) || []

let loginPerson = []

formUser.addEventListener("submit", (e) => {
  e.preventDefault()
  window.location.href = "home.html"

  if (lName.value === "" && password.value === "") return

  if (entries.length === 0) {
    window.location.href = "register.html"
  }

  let member = entries.some((data) => {
    if (lName.value !== data.fullName && password.value !== data.password) {
      window.location.href = "register.html"
    } else if (
      lName.value === data.fullName && password.value !== data.password
   
      ) {
        console.log("password incorrect")
      passwordError.style.display = "block"
      passwordError.textContent = `Incorrect Password`
    } else if (
      lName.value === data.fullName && password.value === data.password
    ) {
     
      let newMember = {
        firstName: lName.value,
      }
      loginPerson.push(newMember)
      localStorage.setItem("newMember", JSON.stringify(loginPerson))
    }
    return lName.value === data.fullName && password.value === data.password
  })
  if (member) {
    window.location.href = "home.html"
    last()
  }
})

function last() {
    lName.value = ""
    password.value = ""
}

