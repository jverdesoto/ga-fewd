var myFavRecord = [
    {
        trackNum: 1,
        songTitle: 	"Nobody Else Will Be There",
        duration: 225, //Duration in seconds
        authors: 'Matt Berninger',
        lyrics: 'Lyrics 1'
    },
    {
        trackNum: 2,
        songTitle: 	"Two",
        duration: 389, //Duration in seconds
        authors: 'Matt Berninger',
        lyrics: 'Lyrics 3'
    },
    {
        trackNum: 3,
        songTitle: 	"Three",
        duration: 327, //Duration in seconds
        authors: 'Matt Berninger',
        lyrics: 'Lyrics 4'
    },
    {
        trackNum: 4,
        songTitle: 	"Four",
        duration: 413, //Duration in seconds
        authors: 'Matt Berninger',
        lyrics: 'Lyrics 4'
    },
    {
        trackNum: 5,
        songTitle: 	"Five",
        duration: 413, //Duration in seconds
        authors: 'Matt Berninger',
        lyrics: 'Lyrics 4'
    },
    {
        trackNum: 6,
        songTitle: 	"Six",
        duration: 413, //Duration in seconds
        authors: 'Matt Berninger',
        lyrics: 'Lyrics 4'
    }
]

//Inside the loop: ONLY console log the songs that have a duration shorter than 240s
// for(var i = 0; i < myFavRecord.length; i++) {
//     if(myFavRecord[i].duration < 240) {
//         console.log(`Title ${myFavRecord[i].songTitle}, Duration: ${myFavRecord[i].duration}`);
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
    //create column
    col = document.createElement('div')
    // add classes to clumn
    col.classList.add('col-lg-3', 'col-md-4', 'col-sm-12', 'mb-3')
    // create card
    card = document.createElement('div')
    // add classes to card
    card.classList.add('card')
    // create card body
    cardBody = document.createElement('div')
    // add classes to card body
    cardBody.classList.add('cardbody')
    // create song title
    songTitle = document.createElement('h5')
    // add content to tag
    songTitle.innerHTML = myFavRecord[key].songTitle
    // create authors
    composers= document.createElement('h6')
    // add content
    composers.innerHTML= myFavRecord[key].authors

    duration = document.createElement('p')
    duration.innerHTML= `<strong>Duration:</strong>${myFavRecord[key].duration} seconds`

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
    var numkey = parseInt(key)
    document.getElementById('lyrics').innerHTML = myFavRecord[numkey].lyrics
}