console.log('Task 01');

const categoriesList = document.querySelectorAll('li.item');

console.log('Number of categories: ', categoriesList.length);

categoriesList.forEach(category => {
  console.log('\nCategory: ', category.firstElementChild.textContent); // Header
  console.log('Elements: ', category.lastElementChild.children.length); // ul list elements q-ty
});
