var myFavRecord = [
    {
        trackNum: 1,
        songTitle: "Speak to Me",
        duration: 67,
        authors: 'Mason',
        lyrics: "Ive been mad for fucking years, absolutely years, been over the edge for yonks, been working me buns off for bands. Ive always been mad, I know Ive been mad, like the most of us... very hard to explain why youre mad, even if you're not mad",
    },

    {
        trackNum: 2,
        songTitle: "Breathe (In the Air)",
        duration: 169,
        authors: 'Wright, Gilmour',
        lyrics: "Breathe, breathe in the air. Don't be afraid to care. Leave but don't leave me. Look around and choose your own ground. Long you live and high you fly And smiles you'll give and tears you'll cry And all you touch and all you seeIs all your life will ever be.Run, rabbit run. Dig that hole, forget the sun, And when at last the work is document. Don't sit down it's time to dig another one. For long you live and high you fly But only if you ride the tide  And balanced on the biggest wave You race towards an early grave",
        
        
    },

    {
        trackNum: 3,
        songTitle: "On the Run",
        duration: 225,
        authors: 'Waters, Gilmour',
        lyrics:"[female announcer, announcing flights at airport, including 'Rome'] Live for today, gone tomorrow, that's me, HaHaHaaaaaa",
        
    },

    {
        trackNum: 4,
        songTitle: "Time",
        duration: 413,
        authors: 'Mason, Waters, Gilmour, Wright',
        lyrics:"Ticking away the moments that make up a dull day You fritter and waste the hours in an offhand way. Kicking around on a piece of ground in your home town Waiting for someone or something to show you the way. Tired of lying in the sunshine staying home to watch the rain. You are young and life is long and there is time to kill today. And then one day you find ten years have got behind you. No one told you when to run, you missed the starting gun. So you run and you run to catch up with the sun but it's sinking Racing around to come up behind you again. The sun is the same in a relative way but you're older, Shorter of breath and one day closer to death. Every year is getting shorter never seem to find the time. Plans that either come to naught or half a page of scribbled lines Hanging on in quiet desperation is the English wayThe time is gone, the song is over, Thought I'd something more to say.",
    },

    {
        trackNum: 5,
        songTitle: "Gig in the Sky",
        duration: 284,
        authors: 'Wright',
        lyrics: "And I am not frightened of dying, any time will do, I don't mind. Why should I be frightened of dying? There's no reason for it, you've gotta go sometime.  If you can hear this whispering you are dying. I never said I was frightened of dying",
    },

    {
        trackNum: 6,
        songTitle: "Money",
        duration: 383,
        authors: 'Waters',
        lyrics: "Money, get away. Get a good job with good pay and you're okay. Money, it's a gas. Grab that cash with both hands and make a stash. New car, caviar, four star daydream, Think I'll buy me a football team. Money, get back. I'm all right Jack keep your hands off of my stack. Money, it's a hit. Don't give me that do goody good bullshit. I'm in the high-fidelity first class traveling set And I think I need a Lear jet. Money, it's a crime. Share it fairly but don't take a slice of my pie. Money, so they say Is the root of all evil today. But if you ask for a raise it's no surprise that they're giving none away. HuHuh! I was in the right! Yes, absolutely in the right! I certainly was in the right! You was definitely in the right. That geezer was cruising for a bruising! Yeah! Why does anyone do anything? I don't know, I was really drunk at the time! I was just telling him, he couldn't get into number 2. He was asking why he wasn't coming up on freely, after I was yelling and screaming and telling him why he wasn't coming up on freely. It came as a heavy blow, but we sorted the matter out",
    },

    {
        trackNum: 7,
        songTitle: "Us and Them",
        duration: 469,
        authors: 'Waters, Wright',
        lyrics: "Us, and them And after all we're only ordinary men.Me, and you. God only knows it's not what we would choose to do. Forward he cried from the rear and the front rank died. And the general sat and the lines on the mapmoved from side to side. Black and blue And who knows which is which and who is who. Up and down. But in the end it's only round and round. Haven't you heard it's a battle of words The poster bearer cried. Listen son, said the man with the gun There's room for you inside. I mean, they're not gunna kill ya, so if you give 'em a quick short,sharp, shock, they won't do it again. Dig it? I mean he get off lightly, 'cos I would've given him a thrashing - I only hit him once It was only a difference of opinion, but really...I mean good manners don't cost nothing do they, eh? Down and out It can't be helped but there's a lot of it about. With, without. And who'll deny it's what the fighting's all about? Out of the way, it's a busy day I've got things on my mind. For the want of the price of tea and a slice The old man died."
    },

    {
        trackNum: 9,
        songTitle: "Brain Damage",
        duration: 226,
        authors: 'Waters',
        lyrics: "The lunatic is on the grass. The lunatic is on the grass. Remembering games and daisy chains and laughs. Got to keep the loonies on the path. The lunatic is in the hall. The lunatics are in my hall. The paper holds their folded faces to the floor And every day the paper boy brings more. And if the dam breaks open many years too soo And if there is no room upon the hil And if your head explodes with dark forebodings to I'll see you on the dark side of the moon. The lunatic is in my head. The lunatic is in my head. You raise the blade, you make the change You re-arrange me 'til I'm sane. You lock the door And throw away the key There's someone in my head but it's not me. And if the cloud bursts, thunder in your ear You shout and no one seems to hear. And if the band you're in starts playing different tunes I'll see you on the dark side of the moon.I can't think of anything to say except… I think it's marvelous! HaHaHa! "
    },

    {
        trackNum: 10,
        songTitle: "Eclipse",
        duration: 132,
        authors: 'Waters',
        lyrics: "All that you touch All that you see All that you taste All you feel. All that you love All that you hate All you distrust All you save. All that you give All that you deal All that you buy, beg, borrow or steal. All you create All you destroy All that you do All that you say. All that you eat And everyone you meet All that you slight And everyone you fight. All that is now All that is gone All that's to come and everything under the sun is in tune but the sun is eclipsed by the moon"
    }
]

// for(var i = 0; i < myFavRecord.length; i++) {
//  if(myFavRecord[i].duration < 240) {
//     console.log (myFavRecord[i].songTitle)
//  }

var col, 
    card, 
    cardBody, 
    songTitle, 
    composers,
    duration, 
    cta

for (var key in myFavRecord) {
    col = document.createElement ('div')
    col.classList.add (`col-lg-3`, `col-md-4`, `col-sm-12`, `mb-3`)
    card = document.createElement('div')
    card.classList.add ('card')
    cardBody = document.createElement ('div')
    cardBody.classList.add('card-body')
    songTitle = document.createElement ('h5')
    songTitle.innerHTML = myFavRecord [key].songTitle
    composers = document.createElement ('h6')
    composers.innerHTML =myFavRecord[key].authors
    duration = document.createElement ('p')
    duration.innerHTML =`<strong> Durtion </strong> ${myFavRecord[key].duration}`
    
    cta = document.createElement ('a')
    cta.classList.add ('btn', 'btn-light')
    cta.setAttribute ('onClick', `showLyrics(${key})`)
    cta.innerHTML = 'lyrics'

    
    cardBody.appendChild(songTitle)
    cardBody.appendChild(composers)
    cardBody.appendChild(duration)
    cardBody.appendChild(cta)

    card.appendChild(cardBody)
    col.appendChild(card)


    document.getElementById ('songs').appendChild (col)
}

function showLyrics (key){
    var numKey = parseInt (key)
    document.getElementById ('lyrics').innerHTML = myFavRecord(num.key).lyrics
}


