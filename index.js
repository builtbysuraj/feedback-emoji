const stars = document.querySelectorAll('.fa-star')
const emojis = document.querySelectorAll('.fa-regular')
const colorsArray = ["red", "orange", "blue", "#10b981", "#059669"]

updateRating(4)

stars.forEach((e, i) => {
  e.addEventListener('click', () => {
    updateRating(i)
  })
})

function updateRating(index) {
  stars.forEach((e, idx) => {
    if (idx < index + 1) {
      e.classList.add('active')
    } else {
      e.classList.remove('active')
    }
  })
  emojis.forEach((emojis) => {
    emojis.style.transform = `translateX(-${index * 50}px)`
    emojis.style.color = colorsArray[index]
  })
}