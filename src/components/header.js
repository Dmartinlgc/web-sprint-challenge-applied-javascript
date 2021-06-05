

const Header = (titleText, dateText, tempText) => {
  //declarations and class assignments
  const header = document.createElement('div')
  header.className = 'header'
  const date = document.createElement('span')
  date.className = 'date'
  const title = document.createElement('h1')
  const temp = document.createElement('span')
  temp.className = 'temp'
//value assignment
date.textContent = dateText
title.textContent = titleText
temp.textContent = tempText
//appending to DOM
header.appendChild(date) 
header.appendChild(title)
header.appendChild(temp)

return header

  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

const headerAppender = (selector) => {
  const app = document.querySelector(selector) //appIn is pointing to location on the DOM
  const end =Header('str1','str2','str3') //this function is constructing  div
  app.appendChild(end)  //the  location that appIn points to: appending appEnds value of the div to the Dom 
  console.log('HEADER APPENDED')
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
