window.addEventListener('DOMContentLoaded', () => {
  const showMore =document.querySelector('.showMore');



  const container = document.querySelector(".container");
    const entirePage = document.querySelector(".entirePage");
    let count = 10;
    showMore.addEventListener('click', (e) => {
      const questionTitle = document.querySelectorAll(".q");
      for(let i = 0; i < count; i++) {
        questionTitle[i].style.position='absolute'
      }
      count+=10;
    })

})
