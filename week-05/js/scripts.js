var myMockData = [
    {
		"body": "Debitis et neque facilis magnam.",
		"category": "unknown generator",
		"cover": "https://picsum.photos/seed/8392/1920/1080",
		"createdAt": "2016-04-19T19:44:19Z",
		"id": 5,
		"isDraft": false,
		"title": "ad impedit sunt",
		"views": 733
	},
	{
		"body": "Error nisi deserunt consectetur ea a.",
		"category": "unknown generator",
		"cover": "https://picsum.photos/seed/9839/1920/1080",
		"createdAt": "2012-11-14T20:24:23Z",
		"id": 6,
		"isDraft": false,
		"title": "molestias",
		"views": 151
	},
]

var el,
    column,
    card,
    cardImage,
    figure,
    img,
    cardContent,
    content,
    title,
    pubTime


fetch('https://mockend.com/mockend/demo/posts')
.then(response => response.json())
.then(json => myData(json));

function myData(obj) {
    for ( key in obj ) {
        el = document.createElement('div')
        el.classList.add('column', 'is-full-mobile', 'is-half-tablet', 'is-one-quarter-desktop')
    
        card = document.createElement('div')
        card.classList.add('card')
    
        cardImage = document.createElement('div')
        cardImage.classList.add('card-image')
    
        figure = document.createElement('figure')
        figure.classList.add('image', 'is-4by3')
    
        img = document.createElement('img')
        img.setAttribute('src', obj[key].cover)
        img.setAttribute('alt', obj[key].title)
    
        figure.appendChild(img)
        cardImage.appendChild(figure)
        card.appendChild(cardImage)
        el.appendChild(card)
        document.getElementById('myContent').appendChild(el)
    }
}