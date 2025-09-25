const FORM = document.querySelector('.email-form')
const EXPRESSION = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
function handleSubmit(e) {
  e.preventDefault()

  const formData = new FormData(e.target)
  const data = Object.fromEntries(formData)

  console.log(formData)
  console.log(data.email)
  console.log(EXPRESSION)
}
FORM.addEventListener('submit', handleSubmit)
