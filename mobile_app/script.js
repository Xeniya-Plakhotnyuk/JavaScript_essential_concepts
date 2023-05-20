
/* FireBase Stuff & Browser module stuff*/
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js'
import { getDatabase, ref, push, onValue} from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js'


/* My database */
const firebaseConfig = {
    databaseURL: "https://sandbox-c3f95-default-rtdb.firebaseio.com/"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app)
// Referencing the database and creating a table in it
const shopingList = ref(database, "toDoDatabase")


const btn = document.getElementById('add-button')
const input = document.getElementById('input-field')
const shopingListEl = document.getElementById('shopping-list')


btn.addEventListener('click', function(){
    let inputValue = input.value
    
    push(shopingList, inputValue)
    
    clearInputFieldEl()

     })

     onValue(shopingList, function(snapshot) {
        let goodsArray = Object.entries(snapshot.val())
        
        clearShoppingListEl()
        
        for (let i = 0; i < goodsArray.length; i++) {
            let currentItem = goodsArray[i]
            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]
            
            appendItemToShoppingListEl(currentItemValue)
        }
    })



// onValue(shopingList, function(snapshot){
// let goodsArray = Object.entries(snapshot.val())
// shopingListEl.innerHTML = ""
// for (let i = 0; i < goodsArray.length; i++) {
//     let currentItem = goodsArray[i]
//     let currentItemID = currentItem[0]
//     let currentItemValue = currentItem[1]
   
//     appendItemToShoppingListEl(currentItemValue[i])
// }
//  })


function clearShoppingListEl() {
    shopingListEl.innerHTML = ""
}

 function appendItemToShoppingListEl(itemValue) {
    // shopingListEl.innerHTML += `<li>${itemValue}</li>`

    let newEl = document.createElement("li")
    
    newEl.textContent = itemValue
    
    shopingListEl.append(newEl)
}

 function clearInputFieldEl(){
    input.value = ' '
 }


// https://github.com/Drazen-TheGRC/ToDo-Firebase-App/blob/main/index.js


