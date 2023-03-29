const users = [
    {
      name: 'Johnny',
      age: 33,
      job: 'engineer',
      hobbies: ['gaming', 'reading']
    },
    {
      name: 'Jane',
      age: 25,
      job: 'recruiter',
      hobbies: ['running', 'soccer']
    },
    {
      name: 'Jack',
      age: 40,
      job: 'chef',
      hobbies: ['reading', 'guitar', 'running']
    },
    {
      name: 'Jared',
      age: 31,
      job: 'musician',
      hobbies: ['gaming', 'running']
    },
    {
      name: 'Janet',
      age: 27,
      job: 'engineer',
      hobbies: ['guitar', 'writing']
    },
    {
      name: 'Jason',
      age: 34,
      job: 'musician',
      hobbies: ['running', 'guitar']
    },
    {
      name: 'Jacob',
      age: 30,
      job: 'engineer',
      hobbies: ['soccer', 'gaming']
    }
  ];
  
  
  
  
  // TODO - go through each of these.  If you first use a for loop to solve a prompt, that is completely fine-- but make sure you also write a function for the prompt that uses the array methods forEach, map, filter, find, findIndex or reduce where it makes sense. 
  
  // write a function that prints the age of each user
  function printAge(users) {
    Object.values(users).forEach(val => console.log(val.name, val.age))
  }
  
  // write a function that returns an array of the names of the users :
  function arrayOfNames(users) {
    arrNames = [];
    Object.values(users).forEach(val => arrNames.push(val.name))
    console.log(arrNames)
    return arrNames
  }
  
  // write a function that returns an array of the names of users under 30
  function filterAge(users) {
    arrNames = [];
    const result = users.filter(user => user.age < 30)
    Object.values(result).forEach(val => arrNames.push(val.name))
    console.log(arrNames);
    return arrNames
  }
  
  // write a function that totals the age of all users
  function totalUserAge(users) {
    arrAge = [];
    let sum = 0;
    const result = users.filter(user => user.age)
    Object.values(result).forEach(val => arrAge.push(val.age))
    console.log(arrAge)
    arrAge.forEach(val => sum += val) 
    console.log(sum)
  }
  
  totalUserAge(users);
  
  // write a function that totals the age of all users, using reduce if you did not choose that for previous prompt
  
  
  // write a function that returns an object where each key is a profession, and each value is the number of users in that profession.  i.e. for this one you should have {engineer: 3, recruiter: 1, chef: 1, musician: 2}
  
  
  // write a function that returns the object for the user 'Janet'
  
  // write a function that returns an array of all of the hobbies that users have
  
  // bonus: same as previous prompt, but remove duplicates
  
  // write a function that returns an array sorted from youngest to oldest user.  Do not mutate the original array.