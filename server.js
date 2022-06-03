const express = require('express')
const app = express()
const PORT = 8000

const artiste = {
    'davido': {
        'birthName': 'David Adeleke',
        'age': 29,
        'birthLocation': 'Atlanta, USA'
    },
    'zlatan': {
        'birthName': 'Omoniyi Temidayo Raphael',
        'age': 27,
        'birthLocation': 'mile 12, Lagos State'
    },
    'burna boy': {
        'birthName': 'Damini Ebunoluwa Ogulu',
        'age': 31,
        'birthLocation': 'Lagos State'
    },
    'unknown': {
        'birthName': 'unknown',
        'age': 0,
        'birthLocation': 'unknown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const artisteName = request.params.name.toLowerCase()
    if (artiste[artisteName]){
        response.json(artiste[artisteName])
    } else {
        response.json(artiste['unknown'])
    }
    // response.json(artiste)
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}!`);
})