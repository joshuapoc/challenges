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

- Solution URL: [Challenge solution](https://joshuapoc.github.io/challenges/blog-card-challenge)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- grid
- box shadows
- simple media query for landscape orientation

### What I learned

Common knowlegde
- variable fonts are extensibly customizable

HTML knowledge
- [cite] is used for quoting works
- [q] is used for quoting a few lines of another source. In css quotes: none removes the quotation marks
- [blockquote] is used for quoting block or serveral lines of source
- [svg] is used to create vector images

CSS knowledge
- [@font-face] imports downloaded fonts locally. with font-family you can set a custom name for the font
- [px] sets fixed values to elements
- [%] sets element values relative to its parent
- [text-shadow/box-shadow] use the same properties for shadows
- [min-heigth]: 100hv in the body allows to scope the entire height of the viewport while still allowing scrolling should more content be added. hight: 100vh wouldnt support scrolling 
- [max-height] sets an elemnt´s height to a value while allowing it to shrink but not grow beyond that value
- [heigth] sets the element´s height to a fixed value despite any window resizing
- [max-width] sets an elemnt´s width to a value while allowing it to shrink but not grow beyond that value
- [min-width] sets an elemnt´s width to a value while allowing it to grow but not shrink beyond that value
- [width] sets the element´s width to a fixed value despite any window resizing
- [flex] works better for simple layouts where only rows/columns are needed, otherwise multiple containers are needed to create complex layout
- [grid] works better for complex and main site layouts
- [p:first-child] looks for the element p if its the first child inside a container
- [p:fisrt-of-type] looks for the fisrt element of type p
- [display:inline] only works for text elements
- [display:inline-block] only works for text elements
- [:is()] selects a list of elements. It shortens the amount of specified selected elements
- [:not()] opposite to :is()

### Continued development

- keep working on grid and flex independentely
- keep working on max/min-width/height and max/min/fit-content
- keep working on selectors
- keep working on media queries

### Useful resources

- [Shadows] explanation = (https://www.youtube.com/watch?v=qTEDcXJ-dzw)
- [width,min/max-width] explanation = (https://youtu.be/YjtunZW7jxw?si=racyWtxdmJudh_pS)
- [min-height/heigh] scroll and min-height problem explanation = (https://www.youtube.com/watch?v=dpuKVjX6BJ8&t=941s)

## Author

- Frontend Mentor - [@joshuapoc](https://www.frontendmentor.io/profile/joshuapoc)
- Github - [@joshuapoc](https://github.com/joshuapoc)

## Acknowledgments
- https://www.frontendmentor.io/profile/kodan96 - thanks for clearing out why min-height is preferred
- https://www.youtube.com/watch?v=qTEDcXJ-dzw - great for learning the basics
- https://www.youtube.com/@DaveGrayTeachesCode - great for clearing common problems
- https://www.frontendmentor.io/profile/Alex-Archer-I - thanks for pointing out the usage of organized main, h, etc tags for better semantic. Also thanks for explaining flex
