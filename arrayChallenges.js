console.clear();

//Question 1

let teaFlavours = ["green tea", "black tea", "oolong tea"];
let firstTea = teaFlavours[0];
console.log(firstTea);

// Question 3

let teaTypes = ["herbal tea", "white tea", "masala tea"];
teaTypes[1] = "jasmine tea";
console.log(teaTypes);

//Question 4

let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited.push("Berlin");
console.log(citiesVisited);

//Question 5

let teaOrdes = ["chai", "iced tea", "matcha tea", "earl tea"];

let lastOrder = teaOrdes.pop();
console.log(lastOrder);

//Question 6

let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTree = popularTeas;
console.log(popularTeas);
console.log(softCopyTree);

// Question 7

let topCities = ["Berlin", "Singapore", "New York"];

let hardCopyCities = [...topCities]; ///creating hardcopy of an array

topCities.pop();
console.log(topCities);
console.log(hardCopyCities);

//Question 8

let europeanCitis = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
let worldCities = europeanCitis.concat(asianCities);
console.log(worldCities);
