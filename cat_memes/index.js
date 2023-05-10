import { catsData } from "./data.js";

const emotionRadios = document.getElementById("emotion-radios")
const imageBtn = document.querySelector('#get-image-btn')
imageBtn.addEventListener('click', getMatchingCatsArray)

const gifsOnlyOption = document.getElementById('gifs-only-option')

emotionRadios.addEventListener('change', highlightCheckedOption)

function highlightCheckedOption(e){

const emotionsArray = document.getElementsByClassName('radio')
for(let newEmotion of emotionsArray){
  newEmotion.classList.remove('highlight')
}
    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}

 function getMatchingCatsArray(){
 const isGif = gifsOnlyOption.checked
 console.log(isGif)

  if(document.querySelector('input[type="radio"]:checked')){
    const selectedEmotion = document.querySelector('input[type="radio"]:checked').value
  console.log(selectedEmotion)
  
    }
   }

function getEmotionsArray(cats) {
  const emotionsArray = [];
  for (let cat of cats) {
    for (let emotion of cat.emotionTags) {
        if(!emotionsArray.includes(emotion)){
        emotionsArray.push(emotion);
        }
           
    }
  }
  return emotionsArray;
}

function renderEmotionsRadios(cats) {
  let radioItems = ``;
  const emotions = getEmotionsArray(cats);
  for (let emotion of emotions) {
    radioItems += `
    <div class="radio">
    <label for="${emotion}">${emotion}</label>
    <input
        type="radio"
        id="${emotion}"
        value="${emotion}"
        name="emotions"
        >
</div>
    
      
    `;
  }
  emotionRadios.innerHTML = radioItems;
}

renderEmotionsRadios(catsData);
