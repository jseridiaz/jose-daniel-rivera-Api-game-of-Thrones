export let clearFilters = () => {
  let divFilter = document.querySelector('#div-img')
  let selectorHouses = document.querySelector('#house-list')
  let selectorCharacter = document.querySelector('#character-list')
  let input = document.querySelector('#input-search > input')

  divFilter.innerHTML = ''
  input.value = ''
  selectorCharacter.value = 'All Characters'
  selectorHouses.value = 'All Family Houses'
}
