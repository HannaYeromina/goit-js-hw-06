const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

list.append(...ingredients.map(ingredient => {
  const listIngredient = document.createElement("li");

  listIngredient.textContent = ingredient;
  listIngredient.classList.add("item");

  return listIngredient;
}));

