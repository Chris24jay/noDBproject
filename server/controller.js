heroRoster = [
    {
        id: 0,
        madeUpName: "Iron Man",
        realName: "Tony Stark"
    },
    {
        id: 1,
        madeUpName: "Captain America",
        realName: "Steve Rogers"
    },
    {
        id: 2,
        madeUpName: "Spider-Man",
        realName: "Peter Parker"
    }

]

let avengers = []
let id = 3

module.export = {
    //Create; post. I want this to add heroes my display box
    eyesUp: (request, response) => {
        // const {madeUpName} = request.body // 
        avengers.push({id, madeUpName})
        id++
        response.status(200).send(avengers)

    },

    //Read; get. I want this to just diplay a hero roster
    assemble: (request, response) => {
        console.log(request.body)
        response.status(200).send(heroRoster)
    },

    //Update; put. This will edit your team in the display box
    tagOut: (request, response) => {
        let { madeUpName } = request.body
        let updateId = request.param.id
        let avengersID = avengers.findIndex(hero => {
            hero.id === +updateId
        })
        let newAvenger = avengers[avengersID]

        avengers[avengersID] = {
            id: newAvenger.id, //avengers[avengersID].id this will re assign the id 
            madeUpName: madeUpName, // will update text with user input
        }
        response.status(200).send(avengers)
    },

    //Delete; delete. Delete the theme
    theSnap: (request, response) => { 
        avengers.splice(0,avengers.length)
        response.status(200).send(avengers)
    },


}