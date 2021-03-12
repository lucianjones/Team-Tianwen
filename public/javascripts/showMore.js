window.addEventListener('DOMContentLoaded', () => {
  const showMore =document.querySelector('.showMore');



  const container = document.querySelector(".container");
    const entirePage = document.querySelector(".entirePage");
    let count = 10;
    let heightContainer = 1500
    let tlength = document.querySelectorAll(".qquestion").length
    showMore.addEventListener('click', (e) => {
      const questionTitle = document.querySelectorAll(".qquestion");
      console.log(tlength)
      if(tlength > 10){
        for(let i = 0; i < count; i++) {
          questionTitle[i].style.position='absolute'
        }
        tlength-=10
        count+=10;
        heightContainer+= 1500
        container.style.height = heightContainer + 'px'
      }else {
        for(let i = 0; i < questionTitle.length; i++) {
          questionTitle[i].style.position='absolute'
        }
        container.style.height = '100%'
      }
    })
})
