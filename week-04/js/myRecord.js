var myFavRecord = [
    {
        trackNum: 1,
        songTitle: "Speal to Me",
        duration: 67, // Duration into a number of seconds ex: 1:07 = 67
        authors: 'Nick Mason',
    },
    {
        trackNum: 2,
        songTitle: "Breath (in the air)",
        duration: 169, // Duration into a number of seconds ex: 1:07 = 67
        authors: 'Nick Mason',
    },
    {
        trackNum: 3,
        songTitle: "On The Run",
        duration: 225, // Duration into a number of seconds ex: 1:07 = 67
        authors: 'Nick Mason',
    },
    {
        trackNum: 4,
        songTitle: "Time",
        duration: 413, // Duration into a number of seconds ex: 1:07 = 67
        authors: 'Nick Mason',
    },
    {
        trackNum: 5,
        songTitle: "The Great Gig in the Sky",
        duration: 284, // Duration into a number of seconds ex: 1:07 = 67
        authors: 'Nick Mason',
    },
]
//two:169 three:225 four:413
// inside a loop
// inside the loop: only console log the songs that have a duration shorter than 240s
for(var i =0; i < myFavRecord.length ;i++) {
    if(myFavRecord[i].duration <= 240) {
        console.log(`Title ${myFavRecord[i].songTitle}, Duration: ${myFavRecord[i].duration}`);
    }
}
