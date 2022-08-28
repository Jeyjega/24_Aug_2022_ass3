const fullName = document.getElementById("fullName")
const signOut = document.querySelector(".signout")

const userData = JSON.parse(localStorage.getItem("newUser")) || []

signOut.addEventListener("click", (e) => {
  e.preventDefault()
  localStorage.removeItem("newUser")
  window.location.href = "login.html"
})