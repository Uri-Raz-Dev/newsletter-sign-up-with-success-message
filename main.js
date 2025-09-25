const FORM = document.querySelector('.email-form')
const INPUT = document.getElementById('email')
const SUCCESS_MSG = document.querySelector('.success-message')
const DISMISS_MSG = document.querySelector('.dismiss-msg')
const EMAIL_ERR = document.querySelector('.email-err')
const EXPRESSION = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
function handleSubmit(e) {
  e.preventDefault()

  const formData = new FormData(e.target)
  const data = Object.fromEntries(formData)
  let successMsgDisplay = getComputedStyle(SUCCESS_MSG).display
  if (EXPRESSION.test(data.email)) {
    SUCCESS_MSG.style.display = 'flex'
    INPUT.classList.remove('error')
    EMAIL_ERR.style.display = 'none'
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
})
