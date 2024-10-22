const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function nameFinder(nameList, nameToFind) {
    const index = nameList.indexOf(nameToFind);
    if (index >= 0){
      return {exists: true, position: index};
      } else {
        return{exists:false};
      }
    }
  
  console.log(nameFinder(names, 'Bruce'));
  console.log(nameFinder(names, 'Iván'));