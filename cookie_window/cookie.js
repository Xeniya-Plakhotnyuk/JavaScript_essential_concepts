const modalWindow = document.querySelector('#modal')

const cross = document.querySelector('#modal-close-btn')

const formSubmit = document.getElementById('submit-form')

const modalText = document.getElementById('modal-text')

setTimeout(function(){
modalWindow.style.display = 'inline'
}
, 1500)

cross.addEventListener('click', function(){
modalWindow.style.display = 'none'
})


formSubmit.addEventListener('submit', function(e){
e.preventDefault()
modalText.innerHTML = `
<div class="modal-inner-loading">
<img src="loading.svg" class="loading">
<p id="uploadText">
    Uploading your data to the dark web...
</p>
</div>`
console.log('Form submitted')
})



