document.addEventListener("DOMContentLoaded", async () => {
  const upVoteBtn = document.querySelectorAll(".upVote")
  const downVoteBtn = document.querySelectorAll(".downVote")
  downVoteBtn.forEach((button) => {
    button.addEventListener("click", async (e) => {
     const answerId = e.target.id.split('-')[1];
     const res = await fetch(`/questions/answer/${answerId}/downvote`, {method: 'PATCH'})
     const score = document.querySelector(`#score-${answerId}`);
     const scoreHtml = Number(score.innerHTML);
     score.innerHTML = scoreHtml - 1;
     downVoteBtn.setAttribute('disabled', 'true');
     upVoteBtn.setAttribute('disabled', 'false');
    })
  })



  upVoteBtn.forEach((button) => {
    button.addEventListener("click", async (e) => {
      const answerId = e.target.id.split('-')[1];
      const res = await fetch(`/questions/answer/${answerId}/upvote`, { method: 'PATCH' })
      const score = document.querySelector(`#score-${answerId}`);
      const scoreHtml = Number(score.innerHTML);
      score.innerHTML = scoreHtml + 1;
      downVoteBtn.setAttribute('disabled', 'false');
      upVoteBtn.setAttribute('disabled', 'true');
    })
  })

})
