


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


fetch('https://mockend.com/api/mockend/demo/posts')
.then(response => response.json())
.then(json => myData(json))


function myData(obj) {
    for ( key in obj ) {
        el = document.createElement('div')
        el.classList.add('column', 'is-full-mobile', 'is-half-tablet', 'is-one-quarter-desktop')
    
        card =  document.createElement('div')
        card.classList.add('card')
    
        cardImage = document.createElement('div')
        cardImage.classList.add('card-image')
    
        figure = document.createElement('figure')
        figure.classList.add('image', 'is-4by3')
    
        img =document.createElement('img')
        img.setAttribute('src', obj[key].cover)
        img.setAttribute('alt', obj[key].title)
    
        figure.appendChild(img)
        cardImage.appendChild(figure)
        card.appendChild(cardImage)
        el.appendChild(card)
        document.getElementById('myContent').appendChild(el)
    }
}