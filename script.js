// Retrieve the list from local storage if it exists, or create an empty array
let bucketList = JSON.parse(localStorage.getItem('bucketList')) || [];

const form = document.getElementById('addForm');
const itemList = document.getElementById('itemList');

function renderList() {
  itemList.innerHTML = '';
  bucketList.forEach(function (item, index) { // Replace arrow function with a traditional function
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <input type="checkbox" data-index="${index}" ${item.completed ? 'checked' : ''}>
      <span>${item.name}</span>
    `;
    itemList.appendChild(listItem);
  });
}

function updateLocalStorage() {
  localStorage.setItem('bucketList', JSON.stringify(bucketList));
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const itemInput = document.getElementById('itemInput');
  const newItem = { name: itemInput.value, completed: false };
  bucketList.push(newItem);
  itemInput.value = '';
  updateLocalStorage();
  renderList();
});

itemList.addEventListener('change', function (e) {
  if (e.target.matches('input[type="checkbox"]')) {
    const index = e.target.getAttribute('data-index');
    bucketList[index].completed = e.target.checked;
    updateLocalStorage();
    renderList();
  }
});

// Initial rendering of the list
renderList();
