// forEach() method
const bands = ['Muse', 'Evanescence', 'U2', 'Pearl Jam', 'Placebo'];

bands.forEach(band => {
    console.log(band + ' is my favorite band!')
});


// filter() method
const things = ['computer', 9, 'sofa', 'camera', 989, 41, 'dishmachine'];

const onlyStrings = things.filter(thing => {
    return typeof thing === 'string';

});

console.log(onlyStrings);

const onlyNumbers = things.filter(thing => {
    return typeof thing === 'number';

});

console.log(onlyNumbers);

const favoriteCitys = ['Barcelona', 'Lisbon', 'Zürich', 'Coimbra', 'Oliveira do Hospital', 'Milao'];

const longFavoriteCitys = favoriteCitys.filter(city => {
    return city.length > 6
});
console.log(longFavoriteCitys);