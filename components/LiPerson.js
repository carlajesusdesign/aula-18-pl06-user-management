function liPersonComponent(props){
  const { person } = props

  const liElement = document.createElement('li')
  liElement.classList.add('grid-item')
  liElement.innerHTML = `
    <img src="${person.avatar}" alt="">
    <h3>${person.fullname} (${person.nationality})</h3>
    <div>
      <p id="email">Email: ${person.email}</p>
    </div>
    <div>
      <p id="phone">Phone number: ${person.phone}</p>
    </div>
    <div>
      <p id="dob">Date of birth: ${person.date_of_birth} (${person.age} years)</p>
    </div>
    <div>
      <p id="address">Address: ${person.address}</p>
    </div>
  `

  return liElement
}

export { liPersonComponent }

