function vehicle(vehicleType){
    this.type = vehicleType || 'car'
    this.model = 'default'
    this.license = '00000000-000'
}

// create a test car instance
var testInstance = new vehicle('car')
console.log('car test instance',testInstance)
//vehicle { type: 'car', model: 'default', license: '00000000-000' }

// create a truck instance
var truck = new vehicle('truck')

// Add new functionality into the truck instance
truck.setModel = function(model){
    this.model = model
}

truck.setColor = function(color){
    this.color = color
}

truck.setModel('CAT')
truck.setColor('Blue')

console.log('truck instance',truck)
//vehicle {
//    type: 'truck',
//    model: 'CAT',
//    license: '00000000-000',
//    setModel: [Function (anonymous)],
//    setColor: [Function (anonymous)],
//    color: 'Blue'
//  }


//demonstracting that test instance is 
var secondInstance = new vehicle('car')
console.log(secondInstance)
//vehicle { type: 'car', model: 'default', license: '00000000-000' }