1. What is the difference between getElementByld, getElementsByClassName, and querySelector /
querySelectorAll?
2. How do you create and insert a new element into the DOM?
3. What is Event Bubbling and how does it work?
4. What is Event Delegation in JavaScript? Why is it useful?
5. What is the difference between preventDefault() and stopPropagation() methods?


Solve


1. Difference between getElementByld, getElementsByClassName, and querySelector/querySelectorAll
getElementByld("id") —i Finds only one element with that unique id .
getEIementsByClassName("class") -i Finds all elements with that class, gives a list (HTMLCollection).
querySelector("selector") —y Finds the first element that matches a CSS selector (like . class , , div
querySelectorAll("selector") -+ Finds all elements that match the CSS selector, gives a NodeList.



2. How to create and insert a new element into the DOM?
 Create it —Y document.
 Add content -4 element. innerText = "Hello"
 Insert it parent. appendChiId(eIement)
Example:
newDiv =
document - createE1ement ( "div'
const
newDiv. innerText = "This is new! " •
document. body appendChi1d(newDiv);



3. What is Event Bubbling?
When you click an element, the event goes from the element -4 to its parent —Y to the body —i up to the root.
Example: click on a button -i first button's event runs, then its parent div's event, then body's event.




4. What is Event Delegation? Why is it useful?
Instead of putting event listeners on many child elements, you put one listener on the parent and check
which child was clicked.
It is useful because:
Less code
Better performance
Works for new elements added later



5. Difference between preventDefault() and stopPropagation()
 preventDefault() - Stops the default action. Example: clicking a link won't open a new page.
 stopPropagation() - Stops the event from bubbling up to parent elements.
