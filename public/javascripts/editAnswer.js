

window.addEventListener('DOMContentLoaded', () => {
    
    const token = document.querySelector('meta[name="csrf-token"]')
    async function editAnswer(url = '', data = {}) {
        console.log(data)
        const response = await fetch(url, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
            credentials: 'include'
        })
        return response.json();
    }

    async function deleteAnswer(url = '') {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        })
        return response.json();
    }

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
            save.classList.add('save')
            save.setAttribute('type','submit')
            save.innerText = 'save'
            answer.appendChild(save)
            button.setAttribute('hidden', 'true')

            save.addEventListener('click', () => {
                answer.removeChild(save)
                button.removeAttribute('hidden')
                answer.contentEditable = false
                const description = answer.innerText;
                console.log(answer.questionid)
                editAnswer(`/questions/${answer.dataset.questionid}/answer/${answer.dataset.answerid}/edit`, { description, _csrf: token.content });
            })
        })
    })
    const deleteButtons = document.querySelectorAll('.delete-button')
    
    deleteButtons.forEach(button => {
        button.addEventListener('click', () => {
            const id = Number(button.id.slice(6))
            const answer = document.getElementById(`answer${id}`)
            deleteAnswer(`/questions/${answer.dataset.questionid}/answer/${answer.dataset.answerid}/delete`);
            answer.innerHTML = '';
            answer.remove();
        })
    })







})