const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

console.log('Task 02');

let ingredientsElArray = ingredients.map(ingredient => {
  const liEl = document.createElement('li');
  liEl.textContent = ingredient;
  liEl.classList.add('item');
  return liEl;
});

const ingredientsEl = document.querySelector('ul#ingredients');

ingredientsEl.append(...ingredientsElArray);
