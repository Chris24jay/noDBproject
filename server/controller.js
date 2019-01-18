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
        const {text} = request.body
        avengers.push({id, text})
        id++
        res.status(200).send(avengers)

    },

    //Read; get. I want this to just diplay a hero roster
    assemble: (request, response) => {
        console.log(request.body)
        response.status(200).send(heroRoster)
    },

    //Update; put. This will edit your team in the display box
    tagOut: (request, response) => {

    },

    //Delete; delete. Delete the theme
    theSnap: (request, response) => {

    },


}