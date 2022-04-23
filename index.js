// Write your code here!

/* index.html
after index.js is processed
  1) no longer has DOM node 'main#main'
  2) has a 'newHeader' variable that points to node 'h1#victory'
  3) has a 'newHeader' variable that points to node 'h1#victory'
  4) has a 'newHeader' variable that points to node 'h1#victory' with "YOUR-NAME is the champion" inside */

/* 1) no longer has DOM node 'main#main' */
const main = document.querySelector('main#main')
main.remove()
/* 2) has a 'newHeader' variable that points to node 'h1#victory' */
/* 3) has a 'newHeader' variable that points to node 'h1#victory' */
const newHeader = document.querySelector('h1#victory')
/* 4) has a 'newHeader' variable that points to node 'h1#victory' with "YOUR-NAME is the champion" inside */
newHeader.textContent = "YOUR-NAME is the champion"

