keys({ keyOne: 1, keyTwo: 2, keyThree: 3 });
values({ keyOne: 1, keyTwo: 2, keyThree: 3 });
const data = [
    {
        '_id': '5b5e3168c6bf40f2c1235cd6',
        'index': 0,
        'age': 39,
        'eyeColor': 'green',
        'name': 'Stein',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e3168e328c0d72e4f27d8',
        'index': 1,
        'age': 38,
        'eyeColor': 'blue',
        'name': 'Cortez',
        'favoriteFruit': 'strawberry'
    },
    {
        '_id': '5b5e3168cc79132b631c666a',
        'index': 2,
        'age': 2,
        'eyeColor': 'blue',
        'name': 'Suzette',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e31682093adcc6cd0dde5',
        'index': 3,
        'age': 19,
        'eyeColor': 'green',
        'name': 'George',
        'favoriteFruit': 'banana'
    }
];
let b = 3;
let c = 4;
let a = 18;
let d = 2;
let e = 5;
let g = 8;
function findTypes() {
    let t = [];
    for (let i = 0; i < arguments.length; i++) {
        t.push(typeof arguments[i]);
    }
    return t;
}
function executeforEach(array1, function1) {
    for (let i = 0; i < array1.length; i++) {
        function1(array1[i]);
    }
}
function mapArray(array1, function1) {
    const newArray = [];
    executeforEach(array1, function (el) {
        newArray.push(function1(el));
    });
    return newArray;
}
function filterArray(a, func) {
    const ab = [];
    executeforEach(a, (item) => {
        if (func(item)) {
            ab.push(item);
        }
    });
    return ab;
}


function getAmountOfAdultPeople(dataInput) {
    const arr = filterArray(dataInput, x => x.age > a);
    return arr.length;
}
function keys(x) {
    const arrayOfKeys = [];
    for (let key in x) {
        if (x.hasOwnProperty(key)) {
            arrayOfKeys.push(key);
        }
    }
    return arrayOfKeys;
}

function values(object) {
    const arrayOfValues = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            arrayOfValues.push(object[key]);
        }
    }
    return arrayOfValues;
}


function showFormattedDate(date) {
    const dayOfTheMonth = date.getDate();
    const month = date.toString().substr(c, b);
    const year = date.getFullYear();
    return `Date: ${dayOfTheMonth} of ${month}, ${year}`;
}


function isEvenYear(x) {
    return !(x.getFullYear() % d);
}


function isEvenMonth(x) {
    return Boolean(x.getMonth() % d);
}

alert(findTypes(null, e, 'hello', undefined));
showFormattedDate(new Date('2019-01-27T01:10:00'));

executeforEach([1, d, b], function (el) {
    console.log(el);
});

mapArray([d, e, g], function (el) {
    return el + b;
});

alert(getAmountOfAdultPeople(data));
alert(isEvenYear(new Date('2019-01-27T01:10:00')));
alert(isEvenMonth(new Date('2019-02-27T01:10:00')));

alert(filterArray([d, e, g], (el) => el > b));