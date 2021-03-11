window.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const doDelete = confirm('are you sure you want to delete the question?')
    if(doDelete) {
      e.target.submit()
    }
  })
})
