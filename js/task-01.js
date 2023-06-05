 const listItems = document.querySelectorAll("li.item");
 
console.log(`Number of categories: ${listItems.length}`);

listItems.forEach(el => {
    console.log(`Category: ${el.children[0].textContent}`);
    console.log(`Elements: ${el.children[1].children.length}`);
  });
