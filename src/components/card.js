import axios from 'axios'

const Card = (article) => {
  //declaration and className assignment
  const cardInfo = document.createElement('div')
  cardInfo.className = 'card'

    const headLine = document.createElement('div')
    headLine.className = 'headline'

    const author = document.createElement('div')
    author.className = 'author'
      const imageCont = document.createElement('div')
      imageCont.className = 'img-container'
      
      const image = document.createElement('img')
    const namePlate =document.createElement('span')
//passing values
headLine.textContent = article.headline
image.src = article.authorPhoto
namePlate.textContent = ` By ${article.authorName}` 
//appending order 
cardInfo.appendChild(headLine)
cardInfo.appendChild(author)
author.appendChild(imageCont)
imageCont.appendChild(image)
author.appendChild(namePlate)

return cardInfo
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

const cardAppender = (selector) => {
  const place = document.querySelector(selector)
    axios.get(`https://lambda-times-api.herokuapp.com/articles`)
    .then(response =>{
      const articlesArray = Object.keys(response.data.articles)
      articlesArray.forEach(topic =>{
        response.data.articles[topic].forEach(item =>{
          const create = Card(item)
          place.appendChild(create)
          })
        })
      })
    .catch(error =>{
      console.log(error.message)
    })
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
