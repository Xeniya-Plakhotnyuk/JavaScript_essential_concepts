const modalWindow = document.querySelector('#modal')

const cross = document.querySelector('#modal-close-btn')

setTimeout(function(){
modalWindow.style.display = 'inline'
}
, 1500)

cross.addEventListener('click', function(){
modalWindow.style.display = 'none'
})

