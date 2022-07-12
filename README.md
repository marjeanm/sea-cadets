# Cleveland Sea Cadets homepage.

This is the home page for the cleveland unit of the Navy Sea Cadets. [WebHost](https://godaddy.com)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

This webpage is made for a recruitment tool and landing space for the Cleveland Ohio Sea Cadet org.

### The purpose

Highlighting acheivements, and the benfits for your child to be included an orginization to better themselves for now, and the rest of their lives.

Users should be able to:

#### understand these concepts.

- About us
  - Mission statement
  - Volunteer/cadets
- Recruitment
  - visual /photo grid
- Where are we located
  - google api map
- contact us
  - were recruits and prospects can communicate.
- media
  - divion photo gallery/youtube videos
- footer
  -contact info
  - mission statement
    -all the social media icons.

### Screenshot

![]()

### Links

- Github: [Git Repository](https://github.com/marjeanm/sea-cadets)

- Live Site URL: [Add live site URL here](https://nscccleveland.org/)

## My process

### Built with

- Semantic HTML5 markup
- CSS
- Flexbox
  -Css Grid
- Mobile-first workflow
- Javascript

### What I learned

I learned you have to set the width of the paragraph element to a specific px. Or when you generate the quote the added space will mess up css.
Also, you can set flexbox on the body to make sure everything is either in rows or columns to your specifications with out alot of guess work.
Also, i used Axios (npm) for the api fetch. I feel it works better for me, and javascript promises. it is a library that is good to work with and get familar with for client side node.js work.

This code centers the container, and makes sure the elements are stacked.

```css
body {
  background-color: hsl(218, 23%, 16%);
  font-family: 'Manrope';
  font-size: 18px;
  height: 94vh;
  display: flex;
  flex-direction: column;
}
```

This Css below sets up the quote body and sets a width on the quote body to stay put and not expand.

```css
#quote {
  font-weight: 800;
  margin: 0;
  text-align: center;
  width: 295px;
}
```

This is the axios code that i used to pull the api request. I like it becuase it is short and sweet,and not alot of lines of code.

```js
const digit = document.getElementById('digits');
const quote = document.getElementById('quote');
const generate = document.querySelector('.btn');
const adviceQuote = async () => {
  const res = await axios.get('https://api.adviceslip.com/advice');
  try {
    digit.textContent = res.data.slip.id;
    quote.textContent = `"${res.data.slip.advice}"`;
  } catch (e) {
    console.log('error', e);
  }
};
generate.addEventListener('click', adviceQuote);
```

### Continued development

Plans i have are to add a background changer, and a pop up greeting name and date.

### Useful resources

- [MDN](https://developer.mozilla.org/en-US/) - This is a great source for people starting out. Also, helps with looking up solutions and reworking your code.

## Author
