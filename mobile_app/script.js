
/* FireBase Stuff & Browser module stuff*/
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js'
import { getDatabase, ref, push} from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js'


/* My database */
const firebaseConfig = {
    databaseURL: "https://sandbox-c3f95-default-rtdb.firebaseio.com/"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app)
// Referencing the database and creating a table in it
const toDoDatabase = ref(database, "toDoDatabase")


const btn = document.getElementById('add-button')
const input = document.getElementById('input-field')



btn.addEventListener('click', function(){
let inputValue = input.value
console.log(inputValue)

push(toDoDatabase, inputValue)
})



// https://github.com/Drazen-TheGRC/ToDo-Firebase-App/blob/main/index.js


