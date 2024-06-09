## Table of contents

  - [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)


### The challenge

Users should be able to:

- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [blog card challenge solution](https://joshuapoc.github.io/challenges/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- box shadows

### What I learned

- for accessibility matters, using min-height for the body when using flex is better than height. It will prevent overflowing for users with small screens
- <cite> is used for quoting works
- <q> is used for quoting a few lines of another source. In css quotes: none removes the quotation marks
- <blockquote> is used for quoting block or serveral lines of source
- variable fonts are extensibly customizable
- @font-face imports downloaded fonts locally. with font-family you can set a custom name for the font
- <svg> is used to create vector images
- its best to establish width of containers with px as opposed to %, so that the property is fixed 
- both text-shadow and box-shadow use the same properties for shadows

### Continued development

- My initial intention was to set the "attribution container" at the utmost bottom while keeping the "card container" in the middle. I found it the impossible since justify-self doesn't work on flex. if this scenario is possible with flex alone id like to know how to
- Learning grid
- learning media queries better

### Useful resources

- [Shadows explanation](https://www.youtube.com/watch?v=qTEDcXJ-dzw) - With this video i learn how to apply shadows for both texts and boxes 

## Author

- Frontend Mentor - [@joshuapoc](https://www.frontendmentor.io/profile/joshuapoc)
- Github - [@joshuapoc](https://github.com/joshuapoc)

## Acknowledgments
- https://www.frontendmentor.io/profile/kodan96 - thanks for clearing out why min-height is preferred
- https://www.youtube.com/watch?v=qTEDcXJ-dzw - great for learning the basics
