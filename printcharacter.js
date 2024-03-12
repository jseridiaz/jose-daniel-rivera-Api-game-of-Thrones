export let functionPrintSearch = (
  arrayToDescription,
  element,
  inputSearch,
  mainDiv,
  arrayOfHouses
) => {
  let divCharacterFilter = document.createElement('div')
  let titleHTMLFilter = document.createElement('h2')
  const divImgFilter = document.createElement('div')
  let img = document.createElement('img')
  const divInfo = document.createElement('div')
  const nameHTMLFilter = document.createElement('h3')
  const firstNameFilter = document.createElement('p')
  const secondNameFilter = document.createElement('p')
  const familyGroupFilter = document.createElement('p')
  const description = document.createElement('p')

  let divHaus = document.createElement('div')
  let imgHaus = document.createElement('img')

  divCharacterFilter.classList.add('single-filtered', 'flex-container')

  titleHTMLFilter.textContent = element.title
  let allSingleDiv = document.querySelectorAll('.single-character')

  for (const item of allSingleDiv) {
    if (item.children[2].textContent.includes(element.fullName)) {
      img.src = item.children[1].children[0].src
    }
  }

  nameHTMLFilter.textContent = element['fullName']
  firstNameFilter.textContent = `First Name is: ${element.firstName}`
  secondNameFilter.textContent = `Last Name is: ${element.lastName}`
  familyGroupFilter.textContent = `House: ${element.family}`
  divInfo.id = 'info-character'
  divInfo.classList.add('flex-container-column')
  divHaus.classList.add('absolute', 'single-haus')

  let value = arrayToDescription.find((each) => {
    if (inputSearch.value.includes('Pycelle')) {
      return each.nameOfCharacter == 'Pycelle'
    } else if (inputSearch.value.includes('Grey Worm')) {
      return each.nameOfCharacter === 'Worm'
    } else if (each.nameOfCharacter.includes(element.firstName)) {
      return each
    }
  })

  for (const item of arrayOfHouses) {
    if (element.family.includes(item.haus)) {
      imgHaus.src = item.hausUrl
      imgHaus.loading = 'lazy'
    }
  }

  description.textContent = value.description

  divHaus.appendChild(imgHaus)
  divCharacterFilter.appendChild(divHaus)
  divCharacterFilter.appendChild(titleHTMLFilter)
  divImgFilter.appendChild(img)

  divCharacterFilter.appendChild(divImgFilter)

  divInfo.appendChild(nameHTMLFilter)
  divInfo.appendChild(firstNameFilter)
  divInfo.appendChild(secondNameFilter)
  divInfo.appendChild(familyGroupFilter)
  divInfo.appendChild(description)
  divCharacterFilter.appendChild(divInfo)
  mainDiv.appendChild(divCharacterFilter)
  if (imgHaus.src == '') {
    divHaus.classList.add('none')
  }
}
