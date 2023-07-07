# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Screenshot](images/screenshot.PNG)

### Links

- Solution URL: [Github](https://github.com/cmb347827/intro-section-with-dropdown-navigation-main-display-none-version)
- Live Site URL: [Live Github](https://cmb347827.github.io/intro-section-with-dropdown-navigation-main-display-none-version/)

## My process

### Built with

- Semantic HTML5 markup
- Bootstrap custom overrides
- Bootstrap
- Jquery and Javascript
- Sass/SCSS
- Mobile-first workflow

### What I learned

- I could re-use code from another frontend mentor project: base-appearl-coming-soon-master, for the desktop and mobile hero.jpg
- At first I had placed the toggle button for the menu on the outside of the nav element. This worked but I learned it was not accessible.
  When I placed the button within the nav element it broke my code. 
  Then I thought placing the nav element offscreen with `left:-9999px;` would correctly be accessible , and my code worked.
  But I learned the nav element would then still be keyboard accessible and screenreaders would be able to find it, and therefore confusing if it can't also be accessed by mouse.
  When I changed the children elements of the nav element and placed the toggle button within my code worked again and now was correctly accessible.

### Continued development

- Daily tutorials and projects in HTML5, CSS3, Javascript, Bootstrap, Sass/SCSS. For now, in time I will go re-learn React ect.

### Useful resources

- [building accessible menu systems](https://www.smashingmagazine.com/2017/11/building-accessible-menu-systems/) - Here I read the toggle button needs to be within the nav
- [Freecodecamp forum post , stated -9999px is 'fine'](https://forum.freecodecamp.org/t/menu-toggle-button-outside-of-nav-element/383564) - This post steered me in the wrong direction unfortunately as it can happen when you're learning
- [Freecodecamp forum post that helped explain where I went wrong](https://forum.freecodecamp.org/t/i-absolutely-hate-dealing-with-accessibility-what-an-absolute-nightmare/620106/4) - I now understood why placing the nav element `left:-9999px` was not a good idea and it cleared everything up for me that was fuzzy


## Author

- Website - [One of my latest codepens](https://codepen.io/cynthiab72/pen/oNybYON)
- Frontend Mentor - [@cmb347827](https://www.frontendmentor.io/profile/cmb347827)

