# What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
getElementById:This method is used to select a single element based on its unique id attribute.
getElementsByClassName:This method returns a specific class name.
querySelector: Returns the first element that matches the selector.
querySelectorAll returns a static nodelist of all matching elements 
# How do you create and insert a new element into the DOM?
Using document.createElement to make a new element
Setting content like text or attributes (using .textContent, .innerHTML, .className, .setAttribute,etc)
Inserting the element into the document (parent.appendChild(newElement)).

# What is Event Bubbling and how does it work?

Event bubbling is a way the browser handles events — when we click on an element,
the event doesn’t just trigger on that element. Instead,
it “bubbles” up through its ancestors in the DOM tree.

# What is Event Delegation in JavaScript? Why is it useful?

Event delegation uses event bubbling to handle many child elements through an event listener on a common parent.
     Saves memory and improves performance by reducing the number of listeners.

# What is the difference between preventDefault() and stopPropagation() methods?

preventDefault(): This method  stops  the browser default action associated with an event.
stopPropagation(): This method stops the event from bubbling

