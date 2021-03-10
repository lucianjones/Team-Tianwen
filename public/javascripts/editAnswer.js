window.addEventListener('DOMContentLoaded', () => {
    
    const editButtons = document.querySelectorAll('.edit-button')
    console.log(editButtons)
    
    editButtons.forEach(button => {
        button.addEventListener('click', () => {
            const id = button.id
            const answer = document.getElementById(`answer${id}`)
            // answer.classList.toggle('contenteditable="true"')
            answer.contentEditable = true
            const save = document.createElement('button')
            save.id = `save${id}`
            save.setAttribute('type','submit')
            save.innerText = 'save'
            answer.appendChild(save)
            button.setAttribute('hidden', 'true')
        })
    })







})