const FORM = document.querySelector('.email-form')
const LAYOUT = document.querySelector('.layout-container')
const INPUT = document.getElementById('email')
const SUCCESS_MSG = document.querySelector('.success-message')
const DISMISS_MSG = document.querySelector('.dismiss-msg')
const EMAIL_ERR = document.querySelector('.email-err')
const USER_EMAIL = document.querySelector('.user-email')
const EXPRESSION = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
function handleSubmit(e) {
  e.preventDefault()

  const formData = new FormData(e.target)
  const data = Object.fromEntries(formData)
  if (EXPRESSION.test(data.email)) {
    LAYOUT.style.display = 'none'
    document.body.style.opacity = 100 + '%'
    SUCCESS_MSG.style.display = 'flex'
    INPUT.classList.remove('error')
    EMAIL_ERR.style.display = 'none'
    USER_EMAIL.textContent = INPUT.value
    INPUT.value = ''
  } else {
    INPUT.classList.add('error')
    EMAIL_ERR.style.display = 'flex'
  }

  console.log(EXPRESSION.test(data.email))
  console.log(data.email)
  // console.log(EXPRESSION)
}
FORM.addEventListener('submit', handleSubmit)

DISMISS_MSG.addEventListener('click', () => {
  SUCCESS_MSG.style.display = 'none'
  LAYOUT.style.display = 'flex'
  if (window.innerWidth >= 1440) {
    document.body.style.opacity = 52 + '%'
  } else {
    document.body.style.opacity = 100 + '%'
  }
})

INPUT.addEventListener('focusin', () => {
  document.body.style.opacity = 100 + '%'
})
INPUT.addEventListener('focusout', () => {
  if (EMAIL_ERR.style.display !== 'none' || window.innerWidth <= 1440) {
    document.body.style.opacity = 100 + '%'
  } else {
    document.body.style.opacity = 52 + '%'
  }
})
