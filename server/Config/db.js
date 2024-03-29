const mongoose = require("mongoose")

const Agenda = require("agenda")


const agendastring = "mongodb://localhost/AgendaTutorial"

const agenda = new Agenda({
    db: {address: agendastring, collection: 'Agenda'},
    processEvery: '20 seconds',
    useUnifiedTopology: true
});

agenda.on("ready", () =>{
    console.log("Agenda is connected to db")
 }).on("error", () =>{
     console.log("Agenda connection error")
 })

const DBconnect = async() =>{
    try {
        const connectstring = await mongoose.connect(agendastring);
        console.log(`DB is connected to ${connectstring.connection.host}`)
    } catch (error) {
        console.log(`An error occured in connecting DB to ${agendastring} `)
    }
}

module.exports = {DBconnect, agenda}
