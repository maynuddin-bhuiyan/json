const foodShop = {Name: 'KacciBai', TypeOfPrice :{Nanna:'140', Dom:'120', Bereany:'120',  Bunna:'120',},
Open: '10 Am', Close: '10 Pm', Loction: 'Mirpur 01',
};
console.log(foodShop);

const foodstringify = JSON.stringify(foodShop);

const foodParse = JSON.parse(foodstringify);

console.log(foodstringify);
console.log(foodParse);
