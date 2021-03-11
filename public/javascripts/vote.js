document.addEventListener("DOMContentLoaded", async () => {
  document.querySelector(".vote").addEventListener("click", async (ev) => {

    try {
      if (ev.target.id) {
        const res = await fetch(`/answer/${ev.target.id}`, ({ method: 'PATCH' }))
        const json = await res.json()
        document.querySelector(".score").innerHTML = json.score
      }
      else throw res;
    }
    catch (err) {
      document.querySelector(".error").innerHTML = "Something went wrong! Please try again!";
    }
  })

  const downVoteBtn = document.querySelectorAll(".downVote")
  console.log(downVoteBtn);
  downVoteBtn.forEach((button) => {
    button.addEventListener("click", async (e) => {
     const answerId = e.target.id.split('-')[1];
     const res = await fetch(`/questions/answer/${answerId}/downvote`, {method: 'PATCH'})
    })
  })

})
