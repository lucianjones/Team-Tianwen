
async function searchFetch(url='', data={}){
  const response = await fetch(url, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
  })
  return response.json()
}
window.addEventListener("DOMContentLoaded", (e) => {
  const searchBtn = document.getElementById('search-btn')
  const searchInput = document.getElementById('search-input')
  searchBtn.addEventListener('click', e => {
    const query = searchInput.value
    const newQuery = query.split(' ').join('+')
    searchFetch(`/search?${newQuery}`)
  })
})
