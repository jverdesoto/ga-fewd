var myFavRecord = [
    {
        trackNum: 1,
        songTitle: "Speak to Me",
        duration: 67, // Duration into a number of secods ex: 1:07 = 67
        authors: 'Nick Mason',
        lyrics: 'hello "My name is" keeps on going'
    },
    {
        trackNum: 2,
        songTitle: 	"Breathe (In the Air)",
        duration: 169, // Duration into a number of secods ex: 1:07 = 67
        authors: 'Roger Waters, Richard Wright, David Gilmour'
    },
    {
        trackNum: 4,
        songTitle: 	"Time",
        duration: 413, // Duration into a number of secods ex: 1:07 = 67
        authors: 'Roger Waters, Richard Wright, David Gilmour'
    }
]

// inside a Loop
// Inside the loop: ONLY console log the songs that have a duration shorter than 240s
for(var i = 0; i < myFavRecord.length; i++) {
    if(myFavRecord[i].duration < 240) {
        console.log(`Title ${myFavRecord[i].songTitle} - Duration: ${myFavRecord[i].duration}`);
    }
}

// i, j, k, l....
// foo bar