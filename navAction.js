const toggle= document.getElementsByClassName('toggle-button')[0]
const list = document.getElementsByClassName('list')[0]

toggle.addEventListener('click', () => {
    list.classList.toggle('active')
})