// SELECTORS
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');
const display = document.getElementById('display')


const personData = [];

// addUser();
// addUser();

// FUNCTIONS
function addUser() {
  fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => {
      // console.log(data.results);
      const result = data.results;
      result.forEach(person => {
        // console.log(person.name, Math.floor(Math.random() * 1000000))
        // display.innerHTML = `${person.name.first} ${person.name.last}`
        const newUser = {
          name: `${person.name.first} ${person.name.last}`,
          money: Math.floor(Math.random() * 1000000)
        };
        personData.push(newUser);
        console.log(personData)
      });
    });
}



// EVENT LISTENERS
addUserBtn.addEventListener('click', addUser);
// doubleBtn.addEventListener('click', double);
// showMillionairesBtn.addEventListener('click', showMillionaires);
// sortBtn.addEventListener('click', sort);
// calculateWealthBtn.addEventListener('click', calculateWealth);