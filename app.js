// Usando objeto express (Lllamando al modulo)
const express = require('express')
//App de express
const app = express()
app.use(express.json()) //indicamos que usaremos Json
//Puerto en que vmaos a ver nuestra app: localhost:3000
const port = 3000

//HTTP METHODS
app.get('/v1/explorers', (req, res) => {
    console.log(`Api explorers GET ALL request ${new Date()}`)
    const explorer1 = {id: 1, name: "Josue1"}
    const explorer2 = {id: 2, name: "Josue2"}
    const explorer3 = {id: 3, name: "Josue3"}
    const explorer4 = {id: 4, name: "Josue4"}
    const explorers = [explorer1, explorer2, explorer3, explorer4]
    res.status(200).json(explorers)
})



//Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);

})