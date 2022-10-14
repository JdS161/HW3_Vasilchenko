var lastName = prompt("Your last name:");

const promises = new Promise(resolve => resolve(lastName))
.then(value => value.toUpperCase())
    .then(value => Array.from(value))
.then(value => value.reverse())
.then(value => alert(value));