const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code'
  ];
  function repeatCounter(list) {
    const countMap = {};
    for (let i = 0; i <list.length; i++){
        const word = list[i];
        if (countMap[word]){
            countMap[word]++;
        }else {
            countMap[word] = 1;
        }
    }
    return countMap;
}
console.log(repeatCounter(words));