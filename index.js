const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

  function findMatching(array, names){
      return array.filter(function result(result){
          result.toLowerCase() === names.toLowerCase();
      })
  }

  function fuzzyMatch(array, names){
      return array.filter(function result(result){
        result[0] === names[0];
      }) 
  }

  function matchName(array, names){
      return array.filter(function result(result){
          return result.name === names;
      })
  }