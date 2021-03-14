document.addEventListener("DOMContentLoaded", async () => {
  const upVoteBtn = document.querySelectorAll(".upVote")
  const downVoteBtn = document.querySelectorAll(".downVote")
  downVoteBtn.forEach((button) => {
    button.addEventListener("click", async (e) => {
     const answerId = e.target.id.split('-')[1];
     const res = await fetch(`/questions/answer/${answerId}/downvote`, {method: 'PATCH'})
     const score = document.querySelector(`#score-${answerId}`);
     const scoreHtml = Number(score.innerHTML);
     const up = document.getElementById(`upvote-${answerId}`);
     console.log(button.classList.contains('highlight'))
     if (button.classList.contains('highlight')) {
       button.classList.remove('highlight');
       score.innerHTML = scoreHtml + 1;
    }
    else if (up.classList.contains('highlight')) {
      score.innerHTML = scoreHtml - 2;
      up.classList.remove('highlight');
      button.classList.add('highlight')
    } else {
      score.innerHTML = scoreHtml - 1;
      button.classList.add('highlight');
    }

    })
  })

  upVoteBtn.forEach((button) => {
    button.addEventListener("click", async (e) => {
      const answerId = e.target.id.split('-')[1];
      const res = await fetch(`/questions/answer/${answerId}/upvote`, { method: 'PATCH' })
      const score = document.querySelector(`#score-${answerId}`);
      const down = document.getElementById(`downvote-${answerId}`)
      const scoreHtml = Number(score.innerHTML);
      if(button.classList.contains('highlight')) {
        score.innerHTML = scoreHtml - 1;
        button.classList.remove('highlight')
      }
      else if (down.classList.contains('highlight')) {
        score.innerHTML = scoreHtml + 2;
        down.classList.remove('highlight');
        button.classList.add('highlight')
      }
      else {
        score.innerHTML = scoreHtml + 1;
        button.classList.add('highlight');
      }
    })
  })

})
