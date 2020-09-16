function userInfo() {
  if(this.registered == true) {
    console.log(`Registration date: ${this.date}`)
  }
  else {
    console.log(`Unregistered user: ${this.name}`)
  }
}

let obj1 = {
  name: 'Juliya',
  registered: true,
  date: new Date().toLocaleDateString(),
  getInfo: userInfo
}
let obj2 = {
  name: 'Payton',
  registered: false,
  date: new Date().toLocaleDateString(),
  getInfo: userInfo
}

console.log(obj1.getInfo())
console.log(obj2.getInfo())