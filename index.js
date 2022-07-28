const dropDownElement = document.querySelectorAll('.drop-down-element')
const dropDownList = document.querySelectorAll('.drop-down-list')

dropDownElement.forEach((element, index) => {
  element.addEventListener('click', () => revealDropDown(index))
})

const revealDropDown = (index) => {
  if (dropDownList[index].classList.contains('drop-down-hidden')) {
    dropDownElement[index].classList.toggle('drop-down-element-active')
    dropDownList[index].classList.remove('drop-down-hidden')
    setTimeout(function () {
      dropDownList[index].classList.remove('drop-down-invisible')
    }, 30)
  } else {
    dropDownElement[index].classList.toggle('drop-down-element-active')
    dropDownList[index].classList.add('drop-down-invisible')
    dropDownList[index].addEventListener(
      'transitionend',
      (e) => {
        dropDownList[index].classList.add('drop-down-hidden')
      },
      {
        once: true
      }
    )
  }
}

const navElements = document.querySelector('.nav-elements')
const navStateBtn = document.querySelector('#nav-button')

navStateBtn.addEventListener('click', () => openCloseNav())

const openCloseNav = () => {
  if (navElements.classList.contains('nav-elements-active')) {
    navElements.classList.remove('nav-elements-active')
    navStateBtn.classList.remove('nav-button-active')
  } else {
    navElements.classList.add('nav-elements-active')
    navStateBtn.classList.add('nav-button-active')
  }
}

// module.exports = { revealDropDown }

const responsiveSlider = function () {
  const slider = document.getElementById('slider')
  let sliderWidth = slider.offsetWidth
  const slideList = document.getElementById('slideWrap')
  let count = 1
  const items = slideList.querySelectorAll('li').length

  window.addEventListener('resize', function () {
    sliderWidth = slider.offsetWidth
  })

  const nextSlide = function () {
    if (count < items) {
      slideList.style.left = '-' + count * sliderWidth + 'px'
      count++
    } else if ((count = items)) {
      slideList.style.left = '0px'
      count = 1
    }
  }

  setInterval(function () {
    nextSlide()
  }, 5000)
}

window.onload = function () {
  responsiveSlider()
}
