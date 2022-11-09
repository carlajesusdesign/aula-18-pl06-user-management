import { Person } from "../models/Person.js"

async function getRandomUserData(totalUsers = 10){
  const response = await fetch(`https://randomuser.me/api/?results=${totalUsers}`)
  const { results } = await response.json()

  const personList = results.map(user => {
    const person = new Person(user)
    return person
  })

  return personList
}

export { getRandomUserData }

