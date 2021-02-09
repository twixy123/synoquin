const home = document.getElementById('home')
if (home) {
  const viewCountry = document.querySelector('.select_country__view_all'),
    viewCountryBlock = document.querySelector('.select_country__hidden_block')

  viewCountry.addEventListener('click', function () {
    const height = viewCountryBlock.querySelector('.cards_container').clientHeight
    if (this.classList.contains('active')) {
      this.classList.remove('active')
      viewCountryBlock.style.maxHeight = `0`
      this.innerHTML = 'View All'
    } else {
      this.classList.add('active')
      this.innerHTML = 'Hide'
      viewCountryBlock.style.maxHeight = `${height}px`
    }
  })
}

const landing = document.getElementById('landing')

if (landing) {
  setHeigthTrustCards()
  window.addEventListener('load', ()=>{
    setHeigthTrustCards()
  })
}

function setHeigthTrustCards() {
  const trustCards = document.querySelectorAll('.people_trust__card')
  trustCards.forEach((tc, i, arr) => {
    tc.classList.add('with_line')
    const heightArr = []
    arr.forEach(h => heightArr.push(h.clientHeight))
    const height = Math.max.apply(null, heightArr)
    tc.style = `min-height: ${height}px !important;`
  })
  if (trustCards.length > 4) {
    trustCards.forEach((tc, tci) => {
      if ((tci + 1) % 3 == 0) {
        tc.classList.remove('with_line')
      }
    })
  }
  trustCards[trustCards.length - 1].classList.remove(('with_line'))
}