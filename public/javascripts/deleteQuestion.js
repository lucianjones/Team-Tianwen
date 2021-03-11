window.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const doDelete = confirm('are you sure you want to delete the question?')
    if(doDelete) {
      e.target.submit()
    }
  })
  const showMore = document.querySelector('.showMore')
  showMore.addEventListener('submit', (e) => {
    const count = 10;
    function plusTen (count) {
      count+= 10
    }
    router.get('/', asyncHandler(async(req, res) => {
      const questions = await db.Question.findAll({
        limit: 10
      })
      res.render('questions', {questions})
    }))
  })
})
//working on the showmore want to throw in route to edit the limit to make it count variable instead
