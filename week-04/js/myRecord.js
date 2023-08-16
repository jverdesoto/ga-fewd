var myFavRecord = [
    {
        trackNum: 1,
        songTitle: "Speak to Me",
        duration: 67, // Duration into a number of secods ex: 1:07 = 67
        authors: 'Nick Mason',
        lyrics: 'Lyrics 1'
    },
    {
        trackNum: 2,
        songTitle: 	"Breathe (In the Air)",
        duration: 169, // Duration into a number of secods ex: 1:07 = 67
        authors: 'Roger Waters, Richard Wright, David Gilmour',
        lyrics: 'Lyrics 2'
    },
    {
        trackNum: 4,
        songTitle: 	"Time",
        duration: 413, // Duration into a number of secods ex: 1:07 = 67
        authors: 'Roger Waters, Richard Wright, David Gilmour',
        lyrics: 'Lyrics 3'
    }
]

// inside a Loop
// Inside the loop: ONLY console log the songs that have a duration shorter than 240s
// for(var i = 0; i < myFavRecord.length; i++) {
//     if(myFavRecord[i].duration < 240) {
//         console.log(`Title ${myFavRecord[i].songTitle} - Duration: ${myFavRecord[i].duration}`);
//     }
// }

var col,
    card,
    cardBody,
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
    // add the classes to the card
    card.classList.add('card')
    // create the card body
    cardBody = document.createElement('div')
    // add the classes to the card body
    cardBody.classList.add('card-body')
    // create the song title
    songTitle = document.createElement('h5')
    // add the content to the tag
    songTitle.innerHTML = myFavRecord[key].songTitle
    // create authors
    composers = document.createElement('h6')
    // add the content
    composers.innerHTML = myFavRecord[key].authors
    
    duration = document.createElement('p')
    duration.innerHTML = `<strong>Duration:</strong> ${myFavRecord[key].duration} seconds`

    cta = document.createElement('a')
    cta.classList.add('btn', 'btn-light')
    cta.setAttribute('href', '#')
    cta.setAttribute('onClick', `showLyrics(${key})`)
    cta.innerHTML = 'Lyrics'

    cardBody.appendChild(songTitle)
    cardBody.appendChild(composers)
    cardBody.appendChild(duration)
    cardBody.appendChild(cta)

    card.appendChild(cardBody)

    col.appendChild(card)
    
    document.getElementById('songs').appendChild(col)
}

function showLyrics(key) {
    var numKey = parseInt(key)
    document.getElementById('lyrics').innerHTML = myFavRecord[numKey].lyrics
}