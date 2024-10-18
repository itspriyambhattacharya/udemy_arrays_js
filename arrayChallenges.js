console.clear();

//Question 1

let teaFlavours = ["green tea", "black tea", "oolong tea"];
let firstTea = teaFlavours[0];
console.log(firstTea);
console.log("-------------------------------------------------");

//Question 2

let cities = ["London", "Tokyo", "Paris", "New York"];
let favouriteCity = cities[2];
console.log(favouriteCity);
console.log("-------------------------------------------------");

// Question 3

let teaTypes = ["herbal tea", "white tea", "masala tea"];
teaTypes[1] = "jasmine tea";
console.log(teaTypes);
console.log("-------------------------------------------------");

//Question 4

let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited.push("Berlin");
console.log(citiesVisited);
console.log("-------------------------------------------------");

//Question 5

let teaOrdes = ["chai", "iced tea", "matcha tea", "earl tea"];

let lastOrder = teaOrdes.pop();
console.log(lastOrder);
console.log("-------------------------------------------------");

//Question 6

let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTree = popularTeas;
console.log(popularTeas);
console.log(softCopyTree);
console.log("-------------------------------------------------");

// Question 7

let topCities = ["Berlin", "Singapore", "New York"];

let hardCopyCities = [...topCities]; ///creating hardcopy of an array

topCities.pop();
console.log(topCities);
console.log(hardCopyCities);
console.log("-------------------------------------------------");

//Question 8

let europeanCitis = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
let worldCities = europeanCitis.concat(asianCities);
console.log(worldCities);
console.log("-------------------------------------------------");

//Question 9

let teaMenu = ["masala tea", "oolong tea", "green tea", "earl tea"];
let menuLength = teaMenu.length;
console.log(menuLength);
console.log("-------------------------------------------------");

//Question 10

let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];
let isLondonInLisst = cityBucketList.includes("London");
console.log(isLondonInLisst);
