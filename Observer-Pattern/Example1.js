const Subject = {
    observer: [],// observer array
    state: 0, // Subject state
    getState: function () {
        return this.state
    },
    setState: function (state) {
        this.state = state
        this.notifyAll()// notify all observer when state change
    },
    attach: function (obs) {
        this.observer.push(obs)
    },
    notifyAll: function () {
        // notifying all observer
        this.observer.forEach(obs=>{
            obs.update()
        })
    }
}

const BinaryObserver = {
    subject: null,
    observe: function (subject) {
        this.subject = subject
        subject.attach(this)
    },
    update: function () {// get the current state of the subject
        let num = this.subject.getState()
        console.log("Binary String", +num.toString(2))
    }
}

const HexObserver = {
    subject: null,
    observer: function (subject) {
        this.subject = subject
        subject.attach(this)
    },
    update: function () {
        let num = this.subject.getState()
        console.log("Hex String", +num.toString(6))
    }
}
const OctObserver = {
    subject: null,
    observe: function (subject) {
        this.subject = subject
        subject.attach(this)
    },
    update: function () {
        let num = this.subject.getState()
        console.log("Oct String", +num.toString(8))
    }
}

function main() {

    //Create 3 observer which is hook/listening to the subject event
    BinaryObserver.observe(Subject)
    OctObserver.observe(Subject)
    HexObserver.observer(Subject)

    //when the state change observer will be notified
    console.log("First State change to 10")
    Subject.setState(10)
    console.log("Second State change to 15")
    Subject.setState(15)
}

main()