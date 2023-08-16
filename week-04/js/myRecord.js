var myFavRecord = [
    {
        trackNum: 1,
        songTitle: "Run to Me",
        duration: 67, // Duration into a number of seconds ex: 1:07 = 67
        authors: 'Nick Mason',
    },
    {
        trackNum: 2,
        songTitle: "Breath (in the air)",
        duration: 169, // Duration into a number of seconds ex: 1:07 = 67
        authors: 'Nick Mason',
        lyrics: 'Ive been mad for fucking years, Absolutely years, been over the edge for yonks, Been working me buns off for bands, Ive always been mad, I know Ive been mad Like the most of us have. Very hard to explain why youre mad Even if youre not mad Hahahahahahaha! Hehehehehehehe, Ah-ah-ah'
    },
    {
        trackNum: 3,
        songTitle: "On The Run",
        duration: 225, // Duration into a number of seconds ex: 1:07 = 67
        authors: 'Nick Mason',
        lyrics: 'Have your baggage and your passports ready and follow the green line to customs and then to immigration. BA 215 to Rome, Cairo and Lagos... Live for today, gone tomorrow. Thats me... ha ha ha...'
    },
    {
        trackNum: 4,
        songTitle: "Time",
        duration: 413, // Duration into a number of seconds ex: 1:07 = 67
        authors: 'Nick Mason',
        lyrics: 'Ticking away the moments that make up a dull day.Fritter and waste the hours in an offhand way. Kicking around on a piece of ground in your hometown. Waiting for someone or something to show you the way'
    },
    {
        trackNum: 5,
        songTitle: "The Great Gig in the Sky",
        duration: 284, // Duration into a number of seconds ex: 1:07 = 67
        authors: 'Nick Mason',
        lyrics: 'And I am not frightened of dying. Any time will do, I dont mind. Why should I be frightened of dying?. Theres no reason for it, youve gotta go sometime. I never said I was afraid of dying'
    },
]
//two:169 three:225 four:413
// inside a loop
// inside the loop: only console log the songs that have a duration shorter than 240s
// for(var i =0; i < myFavRecord.length ;i++) {
//     if(myFavRecord[i].duration <= 240) {
//         console.log(`Title ${myFavRecord[i].songTitle}, Duration: ${myFavRecord[i].duration}`);
//     }
// }

var col,
    card,
    cardbody,
    songTitle,
    composers,
    duration,
    cta

for (var key in myFavRecord){
    // create the column
    col = document.createElement('div')
    // add the classes to the column
    col.classList.add('col-lg-3', 'col-md-4', 'col-sm-12', 'mb-3')
    // create the card
    card = document.createElement('div')
    // add the classes the card
    card.classList.add('card')
    // create the card body
    cardbody = document.createElement('div')
    // add the classes to the card body
    cardbody.classList.add('card-body')
    // add the song title
    songTitle = document.createElement('h5')
    // add the content to the tag
    songTitle.innerHTML = myFavRecord[key].songTitle
    // create authors
    composers = document.createElement('h6')
    // add the content
    composers.innerHTML = myFavRecord[key].authors
    duration = document.createElement('p')
    duration.innerHTML = `<strong>Duration:</strong> ${myFavRecord[key].duration}`

    cta = document.createElement('a')
    cta.classList.add('btn','btn-light')
    cta.setAttribute('href', '#')
    cta.setAttribute('onClick', `showLyrics(${key})`)
    cta.innerHTML = 'Lyrics'

    cardbody.appendChild(songTitle)
    cardbody.appendChild(composers)
    cardbody.appendChild(duration)
    cardbody.appendChild(cta)

    card.appendChild(cardbody)

    col.appendChild(card)

    
    document.getElementById('songs').appendChild(col)
}

function showLyrics(key) {
    var numKey = parseInt(key)
    document.getElementById('lyrics').innerHTML = myFavRecord[numKey].lyrics
}
