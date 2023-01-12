let images = [{
    url: "https://i.ibb.co/PNPTC0N/slider-1.jpg",
    
  }, {
    url: "https://i.ibb.co/dkwK5T9/slider-2.jpg",
    
  }, {
    url: "https://i.ibb.co/ww3p0ZK/slider-3.jpg",
    
  
}];

let textCity = [{
  city: "Rostov-on-Don LCD admiral",
  
}, {
  city: "Sochi Thieves",
}, {
  city: "Rostov-on-Don Patriotic",

}];

const entities = [
  {
    text: 'Rostov-on-Don LCD admiral',
    img: 'https://i.ibb.co/PNPTC0N/slider-1.jpg',
    apartmentArea: '81 m2', 
    repairTime: '3.5 months', 
    repairCost: 'Upon request'
  },
  {
    text: 'Sochi Thieves',
    img: 'https://i.ibb.co/dkwK5T9/slider-2.jpg', 
    apartmentArea: '105 m2', 
    repairTime: '4 months', 
    repairCost: 'Upon request'

  },
  {
    text: 'Rostov-on-Don Patriotic',
    img: 'https://i.ibb.co/ww3p0ZK/slider-3.jpg', 
    apartmentArea: '93 m2', 
    repairTime: '3 months', 
    repairCost: 'Upon request'
  }
  
]

let textRes = document.querySelector('.textCity')
let textArea = document.querySelector('.textArea')
let textTime = document.querySelector('.textTime')
let textCost = document.querySelector('.textCost')

console.log(textRes)

const setEntity = (index) => {
  
  textRes.innerText = entities[index].text
  textArea.innerText = entities[index].apartmentArea
  textTime.innerText = entities[index].repairTime
  textCost.innerText = entities[index].repairCost

}

let imagePro = document.querySelector('.slider__images')
console.log(imagePro)

const setImages = (currentIndex) => { 
  imagePro.style.backgroundImage = `url(${entities[currentIndex].img})`
}

const prev = document.querySelector('.left1')
const next = document.querySelector('.right1')
let currentIndex = 0

setEntity(currentIndex)
setImages(currentIndex)

console.log(next)
console.log(prev)

const linkHot = document.querySelectorAll('.item-project')
const arr = Array.from(linkHot)

console.log(arr)

const sliderDots = document.querySelectorAll(".slider__dots-item");
const sliderArr = Array.from(sliderDots)
console.log(sliderDots)

const dotStart = (currentIndex) => { 
  sliderDots.forEach(item => item.classList.remove('active'))
  sliderArr[currentIndex].classList.add('active')
}

dotStart(currentIndex)

const linkStart = (currentIndex) => { 
  linkHot.forEach(item => item.classList.remove('active'))
  linkHot[currentIndex].classList.add('active')
}

linkStart(currentIndex)

sliderDots.forEach(item => {
  item.addEventListener('click', function() {
    currentIndex = sliderArr.indexOf(this)
    dotStart(currentIndex)
    console.log(currentIndex)
    setEntity(currentIndex)
    setImages(currentIndex)
    linkStart(currentIndex)
    
  })
})

linkHot.forEach(item => { 
  item.addEventListener('click', function() {
    currentIndex = arr.indexOf(this)
    linkStart(currentIndex)
    // console.log(currentIndex)
    setEntity(currentIndex)
    setImages(currentIndex)
    dotStart(currentIndex)
  })
})

prev.addEventListener('click', () => {
  if (currentIndex === 0) currentIndex = 2;
  else currentIndex -= 1;
  setEntity(currentIndex);
  linkStart(currentIndex)
  setImages(currentIndex)
  dotStart(currentIndex)
})

next.addEventListener('click', () => {
  if (currentIndex === 2) currentIndex = 0;
  else currentIndex += 1;
  setEntity(currentIndex);
  linkStart(currentIndex)
  setImages(currentIndex)
  dotStart(currentIndex)
  
})

// console.log(currentIndex)

