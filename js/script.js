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
const carTypeSelect = document.querySelectorAll('.car-type-select-body')
const carTypeDropDown = document.querySelectorAll('.car-type-select-options')
const carTypeHiddenInput = document.querySelectorAll('.car-type-hidden-input')

carTypeSelect.forEach((select) => {
  select.addEventListener('click', function (e) {
    e.preventDefault()
    e.stopPropagation()
    e.target.classList.toggle('active')
    e.target
      .closest('form')
      .querySelector('.car-type-select-options')
      .classList.toggle('active')
  })
})

// Присваиваем значение выбранной опции в селект
carTypeDropDown.forEach((dropdown) => {
  dropdown.addEventListener('click', function (e) {
    e.target.closest('form').querySelector('.car-type-select-body').innerHTML =
      e.target.innerHTML
    e.target.closest('form').querySelector('.car-type-hidden-input').innerHTML =
      e.target.innerText
    dropdown.classList.remove('active')
  })
})

// Закрываем селект при клике не по нему

document.addEventListener('click', (e) => {
  if (!e.target.closest('.car-type-selection-select')) {
    carTypeSelect.forEach((select) => select.classList.remove('active'))
    carTypeDropDown.forEach((dropdown) => dropdown.classList.remove('active'))
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

// Форма ОС

const closeFeedback = document.querySelector('.feedback-close')
const formButton = document.querySelectorAll('.call-form-btn')
const feedbackForm = document.querySelector('.feedback')
const servicesSectionBtns = document.querySelectorAll('.services-section-btn')

formButton.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault()
    btn
      .closest('form')
      .querySelector('.call-form-success-notification').style.display = 'flex'
  })
})

closeFeedback.addEventListener('click', () => {
  feedbackForm.style.display = 'none'
})

servicesSectionBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault()
    feedbackForm.style.display = 'block'
  })
})

// Маска для телефона

const phones = document.querySelectorAll('input[type="tel"]')

phones.forEach((phone) => {
  const phoneMask = IMask(phone, {
    mask: '+{7}(000)000-00-00',
  })
})

// Галерея

$(document).ready(function () {
  $('.gallery-grid-item').magnificPopup({ type: 'image' })
})

$('.gallery-grid').magnificPopup({
  delegate: 'a',
  type: 'image',
  // other options
})

// Scroll из навигации

const servicesScroll = document.getElementById('services-scroll')
const pricesScroll = document.getElementById('prices-scroll')
const contactsScroll = document.getElementById('contacts-scroll')

servicesScroll.addEventListener('click', (e) => {
  e.preventDefault()
  document
    .querySelector('.services-section')
    .scrollIntoView({ behavior: 'smooth', block: 'start' })
})
pricesScroll.addEventListener('click', (e) => {
  e.preventDefault()
  document
    .querySelector('.need-help')
    .scrollIntoView({ behavior: 'smooth', block: 'start' })
})
contactsScroll.addEventListener('click', (e) => {
  e.preventDefault()
  document
    .querySelector('.work-zone')
    .scrollIntoView({ behavior: 'smooth', block: 'start' })
})
