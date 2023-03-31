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
    const arrAge = [];
    let sum = 0;
    const result = users.filter(user => user.age)
    Object.values(result).forEach(val => arrAge.push(val.age))
    console.log(arrAge)
    arrAge.forEach(val => sum += val) 
    console.log(sum)
  }
  
  // write a function that totals the age of all users, using reduce if you did not choose that for previous prompt
  function reduceUserAge(users) {
    const arrAge = [];
    const total = 0;
    const result = users.filter(user => user.age)
    Object.values(result).forEach(val => arrAge.push(val.age))
    console.log(arrAge)
    const final = arrAge.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    total
  );
    console.log(final)
  } 
  
  
  // write a function that returns an object where each key is a profession, and each value is the number of users in that profession.  i.e. for this one you should have {engineer: 3, recruiter: 1, chef: 1, musician: 2}
  function returnProfessionObj(users) {
    //engineer
    const arrEngineer = [];
    const engineerObj = users.filter(user => user.job === 'engineer');
    Object.values(engineerObj).forEach(val => arrEngineer.push(val.name));
    //recruiter
    const arrRecruiter = [];
    const recruiterObj = users.filter(user => user.job === 'recruiter');
    Object.values(recruiterObj).forEach(val => arrRecruiter.push(val.name));
    //chef
    const arrChef = [];
    const chefObj = users.filter(user => user.job === 'chef');
    Object.values(chefObj).forEach(val => arrChef.push(val.name));
    //musician
    const arrMusician = [];
    const musicianObj = users.filter(user => user.job === 'musician');
    Object.values(musicianObj).forEach(val => arrMusician.push(val.name));
    const finalObj = `{engineer: ${arrEngineer.length}, recruiter: ${arrRecruiter.length}, chef: ${arrChef.length}, musician: ${arrMusician.length}}`
    console.log(finalObj)
    return finalObj
  }
  
  //returnProfessionObj(users)
  
  // write a function that returns the object for the user 'Janet'
  function returnJanet(users) {
    const filterNames = users.filter(user => user.name === 'Janet')
    console.log(filterNames[0])
    return filterNames[0] 
  }
  
  // write a function that returns an array of all of the hobbies that users have
  function returnHobbies(users) {
    const arrHobbies = [];
    Object.values(users).forEach(val => arrHobbies.push(val.hobbies));
    console.log(arrHobbies);
    return arrHobbies;
  }
  
  // bonus: same as previous prompt, but remove duplicates
  function returnUniqueHobbies(users) {
    const arrHobbies = [];
    Object.values(users).forEach(val => arrHobbies.push(val.hobbies));
    const flatHobbies = arrHobbies.flat()
    const uniqueHobbies = [...new Set(flatHobbies)];
    console.log(uniqueHobbies)
    return uniqueHobbies
  }
  
  // write a function that returns an array sorted from youngest to oldest user.  Do not mutate the original array.
  
  function sortedByAge(users) {
    arrYoungToOld = [];
    const arrUsers = users
    const youngToOldUsers = arrUsers.sort((a,b) => a.age - b.age);
    const namesOfYoungToOld = Object.values(youngToOldUsers).forEach(val => arrYoungToOld.push(val.name))
    console.log(arrYoungToOld)
    return arrYoungToOld;
  }
  