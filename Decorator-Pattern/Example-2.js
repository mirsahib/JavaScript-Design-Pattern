/**
 * let say we have a shop which sell computer anc mobile device
 * and we want a invoicing system to evalute the price of mobile and computer 
 * according to device upgrade
 */



//base function
function Device(name){
    this.name = name || 'mobile'
    this.cost = function(){ return 20000 }
    this.monitorSize = function(){ return '22'}
}


// decorator 1 {update the cost on device memory increase}
function memory(device,addOn){

    let cost = device.cost()
    device.cost = function(){
        return cost+addOn
    }
}

// decorator 2 {update the cost on device disk increase}
function disk(device,addOn){

    let cost = device.cost()
    device.cost = function(){
        return cost+addOn
    }
}



var Computer =new Device('Computer') // instantiate base function as computer
var Mobile = new Device('Mobile')// instantiate base function as mobile

console.log('Computer before upgrade',Computer.cost())
console.log('Mobile before upgrade',Mobile.cost())

memory(Computer,1000)// cost gets updated as we upgrade the memory
disk(Computer,500)// cost gets updated as we upgrade the disk

memory(Mobile,500) // cost gets updated as we upgrade the memory
disk(Mobile,100)// cost gets updated as we upgrade the disk

console.log('Computer after upgrade',Computer.cost())
console.log('Mobile after upgrade',Mobile.cost())

/**
 * Computer before upgrade 20000
 * Mobile before upgrade 20000
 * Computer after upgrade 21500
 * Mobile after upgrade 20600
 */