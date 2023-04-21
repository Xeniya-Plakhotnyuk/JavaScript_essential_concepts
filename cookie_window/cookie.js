const modalWindow = document.querySelector('#modal')

const cross = document.querySelector('#modal-close-btn')

const formSubmit = document.getElementById('submit-form')

const declineBtn = document.querySelector('#decline_button')

const modalText = document.getElementById('modal-text')

const modalChoiceBtns = document.getElementById('modal-choice-btns')

setTimeout(function(){
modalWindow.style.display = 'inline'
}
, 1500)

cross.addEventListener('click', function(){
modalWindow.style.display = 'none'
})


formSubmit.addEventListener('submit', function(e){
e.preventDefault()

const formData = new FormData(formSubmit)

const name = formData.get('fullName')

modalText.innerHTML = `
<div class="modal-inner-loading">
<img src="loading.svg" class="loading">
<p id="uploadText">
    Uploading your data to the dark web...
</p>
</div>`

setTimeout(function(){
document.getElementById('uploadText').innerText = 'Making the sale...'
}, 1500)

setTimeout(function(){
    document.querySelector('.modal-inner').innerHTML =  `<h2>Thanks <span class="modal-display-name">${name}</span> you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="pirate.gif">
    </div>
    ` 
cross.disabled = false

}, 3000)
})

declineBtn.addEventListener('mouseenter', function(){
    console.log('hovered')
    declineBtn.style.display = 'none'

})



