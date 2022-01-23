class Subject{
    #Observer =[]
    #state = 0

    getState(){
        return this.#state
    }

    setState(state){
        this.#state = state
        this.notifyAll()
    }

    attach(observer){
        this.#Observer.push(observer)
    }

    notifyAll(){
        this.#Observer.forEach(obs=>{
            obs.update()
        })
    }
}


class BinaryObserver{
    #subject = null
    constructor(subject){
        this.subject = subject
        this.subject.attach(this) 
    }
    update(){
        let num = this.subject.getState()
        console.log("Binary String", +num.toString(2))
    }
}

class HexObserver{
    #subject = null
    constructor(subject){
        this.subject = subject
        this.subject.attach(this) 
    }
    update(){
        let num = this.subject.getState()
        console.log("Hex String", +num.toString(6))
    }
}
class OctObserver{
    #subject = null
    constructor(subject){
        this.subject = subject
        this.subject.attach(this) 
    }
    update(){
        let num = this.subject.getState()
        console.log("Octal String", +num.toString(8))
    }
}

function main(){
    subject = new Subject()
    binaryObs = new BinaryObserver(subject)
    hexObs = new HexObserver(subject)
    octObs = new OctObserver(subject)


    console.log("First State is 10")
    subject.setState(10)
    console.log("Second State is 15")
    subject.setState(15)
}

main()