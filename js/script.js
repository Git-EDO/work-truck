// Управление формой настройки сайта

const closeSettings = document.querySelector('.settings-close-btn')
const openSettings = document.querySelector('.open-settings')
const settingsBody = document.querySelector('.start-page-settings')

const navBtns = document.querySelectorAll('.settings-nav-btn')
const settingsFormData = document.querySelectorAll('.settings-form-data')

const contactsBtn = document.querySelector('.contacts-btn')
const servicesBtn = document.querySelector('.services-btn')
const codeBtn = document.querySelector('.code-btn')

const firstFormBtn = document.querySelector('.first-form-btn')
const secondFormBtn = document.querySelector('.second-form-btn')
const thirdFormBtn = document.querySelector('.third-form-btn')

const firstData = document.querySelector('.first-data')
const secondData = document.querySelector('.second-data')
const thirdData = document.querySelector('.third-data')
const attentionText = document.querySelector('.settings-buttons p')

openSettings.addEventListener('click', (e) => {
  e.preventDefault()
  settingsBody.style.display = 'flex'
})

closeSettings.addEventListener('click', (e) => {
  e.preventDefault()
  settingsBody.style.display = 'none'
})

firstFormBtn.addEventListener('click', (e) => {
  e.preventDefault()
  unactiveBtns()
  unactiveFormData()

  servicesBtn.classList.add('active')
  secondData.style.display = 'flex'
})

secondFormBtn.addEventListener('click', (e) => {
  e.preventDefault()
  unactiveBtns()
  unactiveFormData()

  codeBtn.classList.add('active')
  thirdData.style.display = 'flex'
  attentionText.style.display = 'block'
})

contactsBtn.addEventListener('click', (e) => {
  e.preventDefault()
  unactiveBtns()
  unactiveFormData()

  firstData.style.display = 'flex'
  e.target.classList.add('active')
  attentionText.style.display = 'none'
})

servicesBtn.addEventListener('click', (e) => {
  e.preventDefault()
  unactiveBtns()
  unactiveFormData()

  secondData.style.display = 'flex'
  e.target.classList.add('active')
  attentionText.style.display = 'none'
})

codeBtn.addEventListener('click', (e) => {
  e.preventDefault()
  unactiveBtns()
  unactiveFormData()

  thirdData.style.display = 'flex'
  e.target.classList.add('active')
  attentionText.style.display = 'block'
})

const unactiveFormData = () => {
  settingsFormData.forEach((data) => {
    data.style.display = 'none'
  })
}

const unactiveBtns = () => {
  navBtns.forEach((btn) => {
    btn.classList.remove('active')
  })
}

// Селект выбора цвета

// Управление select
const colorSelect = document.querySelector('.color-select-body')
const colorDropDown = document.querySelector('.color-select-options')
const hiddenInput = document.querySelector(
  '.color-selection-select select-hidden'
)
const colorHiddenInput = document.querySelector('.color-hidden-input')

colorSelect.addEventListener('click', function (e) {
  e.preventDefault()
  e.stopPropagation()
  e.target.classList.toggle('active')
  colorDropDown.classList.toggle('active')
})

// Присваиваем значение выбранной опции в селект

colorDropDown.addEventListener('click', function (e) {
  colorSelect.innerHTML = e.target.innerHTML
  colorHiddenInput.value = e.target.dataset.colors
  colorDropDown.classList.remove('active')
})

// Закрываем селект при клике не по нему

document.addEventListener('click', (e) => {
  if (!e.target.closest('.color-selection-select')) {
    colorSelect.classList.remove('active')
    colorDropDown.classList.remove('active')
  }
})

// Селект выбора типа авто

// Управление select
const carTypeSelect = document.querySelector('.car-type-select-body')
const carTypeDropDown = document.querySelector('.car-type-select-options')
const carTypeHiddenInput = document.querySelector('.car-type-hidden-input')

carTypeSelect.addEventListener('click', function (e) {
  e.preventDefault()
  e.stopPropagation()
  e.target.classList.toggle('active')
  carTypeDropDown.classList.toggle('active')
})

// Присваиваем значение выбранной опции в селект

carTypeDropDown.addEventListener('click', function (e) {
  carTypeSelect.innerHTML = e.target.innerHTML
  carTypeHiddenInput.value = e.target.innerText
  carTypeDropDown.classList.remove('active')
})

// Закрываем селект при клике не по нему

document.addEventListener('click', (e) => {
  if (!e.target.closest('.car-type-selection-select')) {
    carTypeSelect.classList.remove('active')
    carTypeDropDown.classList.remove('active')
  }
})

// Дополнительные фото в галерее

const addGalleryPhotos = document.querySelector('.gallery-grid-item-link')
const additionalPhotos = document.querySelectorAll('.additional-grid-item')

addGalleryPhotos.addEventListener('click', (e) => {
  e.preventDefault()
  addGalleryPhotos.style.display = 'none'
  additionalPhotos.forEach((photo) => (photo.style.display = 'block'))
})
