## Table of contents

  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)


### The challenge

Social links challenge
Your users should be able to: 
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [Social links challenge](https://joshuapoc.github.io/challenges/social-links-profile-challenge)
- I added a link for this challenge´s JavaScript file with commented guide here: (https://github.com/joshuapoc/challenges/tree/main/social-links-profile-challenge/js/commented-js-code.txt)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- grid
- javascript
- CSS transitions
- simple media querie

### What I learned

Common knowglede
- shift + alt + a works better for commenting in/out blocks of code
- div.class_name makes it faster to write tags in html
- div*3 quickly creates 3 div tags in html
- hsl() stands for Hue Saturation and Lightness  

HTML knowledge
- [html-element]

CSS knowledge
- [max-width] max-width wont work with flex/grid alone since there might be properties setting the element to either a specific stretch or position. for it to work width: 100%; must be added and then max-width: value_px/%/em, otherwise width: 100% is not needed 
- [transitions] instead of declearing several transitions instructions for each property, they can be in one declaration separated by ",". In order for transitions to work they start at a point A and then are animated to a point B by either pseudo selectors, scripts
transitions on text-decoration usually dont work cause the point A is "none" as though it werent specified. The solution to this can be setting the initial transition to transparent (it might be implemented on a css reset) 
- [z-index] works for layering elements. It works by setting a hierarchy amongst elements. The element with the biggest number will be the one portrayed and layered first or on "top"

JavaScript knowledge
- [defer] this attribute must be use in the script tag if written on the head section of the html document. defer makes sure the html document is loaded before it executes the script. The same can be achieved by putting the script tag right before the "</body>" tag
- [querySelector] returns first element be it by tag, class or id
- [querySelectorAll] returns a nodelist, similar to [getElementsByClassName] collection but this isnt live, meaning newly added elements wont be taken into account
- html collections and nodelists are treated as objects

### Continued development

- keep working on grid and flex independentely
- [min-height] idk whether its ok to use min-height: inherit; on the main tag so it inherits the height of the body. The main tag was too short, i managed to solve the problem with min-height: inherit; and flex-grow: 1; but id like to know which approach is better
- max-width: ..px and width: 100% will work on both flex and grid items. However on grid items, when scaling down the viewport max-width gets ignored, id like to know why that happens with grid and not with flex
- learn about the difference between defer and async attributes for the script tag in html 
- learn about the differences between for, for of, for in and for each when it comes to querySelectors and getElementsByClassName

### Useful resources

- 

## Author

- Frontend Mentor - [@joshuapoc](https://www.frontendmentor.io/profile/joshuapoc)
- Github - [@joshuapoc](https://github.com/joshuapoc)

## Acknowledgments

- https://stackoverflow.com/questions/14938428/why-would-max-width-not-work-on-this - explains why max-width doesnt work sometimes with either flex or grid
