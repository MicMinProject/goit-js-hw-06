console.log(`Zadanie 2`);
console.log('');

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list=document.querySelector('#ingredients')

const ingredientsList = ingredients.forEach(ingredient=>{
  const listing=document.createElement('li');
  list.append(listing);
  listing.textContent=ingredient;
  listing.setAttribute('class','item');
  
})





