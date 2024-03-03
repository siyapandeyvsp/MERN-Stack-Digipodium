/* const user={
name:'Monica',
email:'monica.geller@gmail.com',
password:'iknow'
}
console.log(user.name,user.email,user.password)
console.log(user['password'])

user.password='how are you'
console.log(user['password'])
delete user.password
console.log(user)
//Object is a predefined interface in javascript
console.log(Object.keys(user))
console.log(Object.values(user)) */

const smartPhone = {
    brand: 'Samsung',
    model: 'S23',
    price: '83000',
    colors: ['black', 'blue', 'silver']
  }
  console.log(smartPhone.price)
  console.log(smartPhone.colors[1].length)
  console.log(smartPhone.length)
  smartPhone.colors[0] = 'white'
  console.log(smartPhone)
  console.log(Object.entries(smartPhone))
  
  const phoneArray = [{
    brand: 'Samsung',
    model: 'S23',
    price: '83000',
    colors: ['black', 'blue', 'silver']
  },
  {
    brand: 'Apple',
    model: 'iphone16',
    price: '100000',
    colors: ['black', 'blue', 'silver']
  },{
    brand: 'realme',
    model: 'narzo50 pro',
    price: '21000',
    colors: ['black', 'blue', 'silver','yellow']
  },{
    brand: 'Oneplus',
    model: 'Nord',
    price: '50000',
    colors: ['gold', 'blue', 'silver']
  },
  
  ]
  console.log(phoneArray.length)
  
  console.log( phoneArray[2].colors[2])
  phoneArray[3].price=63000
  console.log(phoneArray)
  
  phoneArray[1].colors.push("pink")
  console.log(phoneArray)
  //filter all phones with price less than 600000
  newPhones=phoneArray.filter((phone)=>phone.price>50000)
  console.log(newPhones)
  const bluephones=phoneArray.filter((phone)=>phone.colors.includes("blue")).map((phone)=>{return phone.brand, phone.model})
console.log(bluephones)