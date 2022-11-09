import { liPersonComponent } from "./components/LiPerson.js"
import { getRandomUserData } from "./services/RandomUserAPI.js"

const personListElement = document.querySelector('ul')

let personList = JSON.parse(localStorage.getItem('personList'))

function setPersonList(person){
  personList.push(person)
  const newLiElement = liPersonComponent({person})
  personListElement.appendChild(newLiElement)
  document.querySelector('h1').textContent = `User List (${personList.length})`
}


// Async / Await
async function getUserData(){
  try {
    if(!personList || personList.length === 0 ){
      personList = await getRandomUserData()
      localStorage.setItem('personList', JSON.stringify(personList))
    }

    personList.map(person => {
      setPersonList(person)
    })

  } catch (error) {
    console.warn(`Not available! ${error}`)
  } finally {
    console.log(personList)
  }
}

getUserData()

