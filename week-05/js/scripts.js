


var el,
    column,
    card,
    cardImage,
    figure,
    img,
    cardContent,
    content,
    title,
    contentP,
    pubTime,
    myData

fetch('https://mockend.com/api/mockend/demo/posts')
.then(response => response.json())
.then(json => myData(json))

function myData(obj) {
    for ( key in obj ) {
        el = document.createElement('div')
        el.classList.add('column', 'is-full-mobile', 'is-half-tablet', 'is-one-third-desktop')
    
        card = document.createElement('div')
        card.classList.add('card')
    
        cardImage = document.createElement('div')
        cardImage.classList.add('card-image')
    
        figure = document.createElement('figure')
        figure.classList.add('image', 'is-4by3')

        cardContent = document.createElement('div')
        cardContent.classList.add('card-content')

        content = document.createElement('div')
        content.classList.add('content')

        title = document.createElement('p')
        title.classList.add('title')
        title.innerHTML = obj[key].title

        contentP = document.createElement('p')
        contentP.innerHTML = obj[key].body

        pubTime = document.createElement('time')
        pubTime.setAttribute('datetime', obj[key].createdAt)

        img = document.createElement('img')
        img.setAttribute('src', obj[key].cover)
        img.setAttribute('alt', obj[key].title)
    
        figure.appendChild(img)
        cardImage.appendChild(figure)
        content.appendChild(title)
        content.appendChild(contentP)
        content.appendChild(pubTime)
        cardContent.appendChild(content)
        card.appendChild(cardImage)
        card.appendChild(cardContent)
        el.appendChild(card)
        document.getElementById('myContent').appendChild(el)
    }
}
