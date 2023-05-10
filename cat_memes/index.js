import { catsData } from "./data.js";

const emotionRadios = document.getElementById("emotion-radios");
const imageBtn = document.querySelector("#get-image-btn");
const gifsOnlyOption = document.getElementById("gifs-only-option");
const memeModalInner = document.getElementById("meme-modal-inner");
const memeModal = document.getElementById("meme-modal");
const memeModalCloseBtn = document.getElementById("meme-modal-close-btn");

imageBtn.addEventListener("click", renderCat);

memeModalCloseBtn.addEventListener("click", closeModal);

emotionRadios.addEventListener("change", highlightCheckedOption);

function renderCat() {
  const catObject = getSingleCatObject();

  memeModalInner.innerHTML = `
  <img 
  class="cat-img" 
  src="./images/${catObject.image}"
  alt="${catObject.alt}"
  >
  `;
  memeModal.style.display = "flex";
}

function getSingleCatObject() {
  const catsArray = getMatchingCatsArray();

  if (catsArray.length === 1) {
    console.log(catsArray[0]);
  } else {
    const randomNumber = Math.floor(Math.random() * catsArray.length);
    return catsArray[randomNumber];
  }
}

function getMatchingCatsArray() {
  if (document.querySelector('input[type="radio"]:checked')) {
    const selectedEmotion = document.querySelector(
      'input[type="radio"]:checked'
    ).value;
    const isGif = gifsOnlyOption.checked;

    const filteredCatsArray = catsData.filter(function (emotion) {
      if (isGif) {
        return emotion.emotionTags.includes(selectedEmotion) && emotion.isGif;
      } else {
        return emotion.emotionTags.includes(selectedEmotion);
      }
    });
    return filteredCatsArray;
  }
}

function closeModal() {
  memeModal.style.display = "none";
}

function highlightCheckedOption(e) {
  const emotionsArray = document.getElementsByClassName("radio");
  for (let newEmotion of emotionsArray) {
    newEmotion.classList.remove("highlight");
  }
  document.getElementById(e.target.id).parentElement.classList.add("highlight");
}

function getEmotionsArray(cats) {
  const emotionsArray = [];
  for (let cat of cats) {
    for (let emotion of cat.emotionTags) {
      if (!emotionsArray.includes(emotion)) {
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
