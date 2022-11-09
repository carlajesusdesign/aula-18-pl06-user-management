class Person {
  constructor( { name, email, phone, dob, picture, location, nat } ){
    this.fullname = `${name.title} ${name.first} ${name.last}`
    this.email = email
    this.phone = phone
    this.date_of_birth = new Date(dob.date).toLocaleDateString()
    this.avatar = picture.large
    this.nationality = nat
    this.age = dob.age
    this.address = `${location.street.name}, ${location.street.number} (${location.postcode})`

  }
}

export { Person }

