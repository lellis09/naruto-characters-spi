const express = require('express')
const app = express()
const PORT = 8000


const character ={
    'naruto uzumaki': {
        'characterName': 'Naruto Uzumaki',
        'birthday': 'October 10th',
        'ninjaRank': 'Genin',
        'affliation': 'Konohagakure, Mount Myoboku, Allied Shinobi Forces',
        'popularJutsu': 'Multi-Shadow Clone Jutsu, Wind Release: Rasen Shuriken'
    },
    'kakashi hatake': {
        'characterName': 'Kakashi Hatake',
        'birthday': 'September 15th',
        'ninjaRank': 'Jonin',
        'affliation': 'Konohagakure, Root (Anime only), Allied Shinobi Forces',
        'popularJutsu': 'Chidori, Kamui'
    },
    'jiraiya': {
        'characterName': 'Jiraiya',
        'birthday': 'November 11th',
        'ninjaRank': 'Sannin, Sage',
        'affliation': 'Konohagakure, Mount Myoboku',
        'popularJutsu': 'Hair Needle Senbon, Rasengan'
    },
    'shikamaru nara': {
        'characterName': 'Shikamaru Nara',
        'birthday': 'September 22nd',
        'ninjaRank': 'Chūnin',
        'affliation': 'Konohagakure, Allied Shinobi Forces',
        'popularJutsu': 'Shadow Sewing Technique, Shadow Clutch Technique'
    },
    'itachi uchiha': {
        'characterName': 'Itachi Uchiha',
        'birthday': 'June 9th',
        'ninjaRank': 'Anbu',
        'affliation': 'Konohagakure, Akatsuki',
        'popularJutsu': 'Amaterasu, Tsukuyomi'
    },
    'unknown': {
        'characterName': 'unknown',
        'birthday': 'unknown',
        'ninjaRank': 'unknown',
        'affliation': 'unknown',
        'popularJutsu': 'unknown'
    },
}
    
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=> {
    let characterName = request.params.name.toLowerCase()
    if (character[characterName]){
        response.json(character[characterName])
    }else{
        response.json(character['unknown'])
    }
    
})

app.listen(PORT, ()=> {
    console.log (`The server is now running on ${PORT}. Betta go catch it!`)
})