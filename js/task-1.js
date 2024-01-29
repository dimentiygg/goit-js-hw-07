const categories = document.querySelectorAll('li.item');
console.log(`Number of categories: ${categories.length}`);
const items = document.querySelectorAll('li');

for (let category of categories) {
  console.log(`Category: ${category.querySelector('.item h2').textContent}`);
  console.log(`Elements: ${category.querySelectorAll('.menu-item').length}`);
}
