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
    },
    {
        id: 3,
        madeUpName: "Wolverine",
        realName: "Logan Howelette"
    },
    {
        id: 4,
        madeUpName: "Starlord",
        realName: "Peter Quill"
    },
    {
        id: 5,
        madeUpName: "Dr. Strange",
        realName: "Dr. Stephen Strange"
    },
    {
        id: 6,
        madeUpName: "Mr. Fantastic",
        realName: "Reed Richards"
    }, 
    {
        id: 7,
        madeUpName: "The Sub-Mariner",
        realName: "Namor"
    },
    {
        id: 8,
        madeUpName: "Captain Marvel",
        realName: "Carol Danvers"
    }
    
]

let avengers = []
let id = 0

module.exports = {
    //Create; post. I want this to add heroes my display box
    eyesUp: (request, response) => {
        const madeUpName = request.params.text 
        avengers.push({id, madeUpName})
        id++
        response.status(200).send(avengers)
    },

    //Read; get. I want this to just display a list of marvel heroes for now
    assemble: (request, response) => {
        response.status(200).send(heroRoster)
    },

    //Update; put. This will edit your team in the display box
    tagOut: (request, response) => {
        let madeUpName  = request.body
        let updateId = request.params.id
        let heroIndex = avengers.findIndex(hero => {
            return hero.id === parseInt(updateId)            
        })
        let newAvenger = avengers[heroIndex]

        try {
            avengers[heroIndex] = {
                id: newAvenger.id, 
                madeUpName: madeUpName, // will update text with user input
            }
            response.status(200).send(avengers)
        } catch {
            response.status(404).send()
        }
    },

    //Delete; delete. Delete the team
    theSnap: (request, response) => { 
        avengers.splice(0,avengers.length)
        response.status(200).send(avengers)
    },


}