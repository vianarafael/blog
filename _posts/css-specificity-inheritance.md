---
title: 'CSS - Specificity and Inheritance'
description: 'How the cascad determines the properties applied to each element'
date: '2021-09-02'
modified_date: '2021-09-02'
image: /assets/images/posts/random-img.jpg
---

Cascade is the algorithm that controls the properties applied to each element on the page.
 
This is achieved using:
__Specificity__, and
__Inheritance__
 
## Specificity
---
When you have the same element targetted by multiple rules, the most specific one will win.

### How do you know which selector is more specific?

Think of 5 slots that have increasing weight on the specificity.

0-0-0-0-0

### Slot 1- Element Selectors
```css
  p { ... } /* 0-0-0-0-1 */
``` 

### Slot 2 - Class, pseudo-class, attribute selectors
```css
  .my-class { ... } /* 0-0-0-1-0 */
```

### Slot 3 - ID selector
```css
  #my-id { ... } /* 0-0-1-0-0 */
```

### Slot 4 - Inline Style
```html
  <p style=”color: red”>...</p> <!-- 0-1-0-0-0 -->
```

### Slot 5 - !important
```css
  p { color: yellow !important} /* 1-0-0-0-0 */
```

## Inheritance
---
__Some__ properties are inhereted by all the children of the parent selector.

It is possible to force properties to inherit (or not to inherit):
```css
    /* Force Inheritance */
  p { 
    background-color: inherit; 
    }

    /* Preventing Inheritance */
    p {
      font-family: revert;
    }
```

There are other two values:
* initial: Will set the value of the property to the browser default.
* unset: Acts as either inherit or initial. If the parent has a value that matches - it inherits, otherwise - act as initial.



