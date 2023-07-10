const data = [
    {
        name: 'pawel',
        age: 38,
        city: 'krakow',
        hobbies: ['js', 'python', 'drugs']
    },
    {
        name: 'mateusz',
        age: 28,
        city: 'wroclaw',
        hobbies: ['sport', 'gotowanie', 'kino']
    },
    {
        name: 'damian',
        age: 33,
        city: 'swidnica',
        hobbies: ['sport', 'programowanie', 'podroze']
    },
    {
        name: 'jan',
        age: 19,
        city: 'krakow',
        hobbies: ['watches', 'cigars', 'real estate']
    },
    {
        name: 'konrad',
        age: 33,
        city: 'bialystok',
        hobbies: ['history', 'games', 'sport']
    },
    {
        name: 'konrad',
        age: 34,
        city: 'warsaw',
        hobbies: ['Tenis stołowy', 'programming microcontrollers', 'books']
    },
    {
        name: 'kamil',
        age: 36,
        city: 'warsaw',
        hobbies: ['chees', 'music', 'sport']
    },
    {
        name: 'wojtek',
        age: 30,
        city: 'trzebnica',
        hobbies: ['boardgames', 'drawing', 'history']
    },
    {
        name: 'Olek',
        age: 23,
        city: 'Warsaw',
        hobbies: ['Czytanie', 'python', 'muzyka']
    },
    {
        name: 'Gabriel',
        age: 26,
        city: 'Czlopa',
        hobbies: ['boardgames', 'drawing', 'history']
    },
    {
        name: 'kuba',
        age: 19,
        city: 'krakow',
        hobbies: ['swimming', 'eating', 'js']
    }
]


// policz średnią wieku
// function avgAge(items){
//     let sum = 0;
//
//     for (const item of items){
//         sum += item.age;
//     }
//
//     return sum / items.length;
// }

// function avgAge(items){
//     return items
//         .map((item) => item.age)
//         .reduce((acc, ce) => acc + ce) / items.length
// }

// const avgAge = (items) => items.reduce((acc, ce) => acc + ce.age, 0) / items.length;

// const result = avgAge(data);

// policz średnią wieku osób mieszkających w miastach 6 literowych
// function avgAgeByCity(items){
//     let sum = 0;
//     let counter = 0;
//
//     for (const item of items){
//         if (item.city.length === 6) {
//             sum += item.age;
//             counter++;
//         }
//     }
//
//     return sum / counter;
// }

function avgAgeByCity(items) {
    const res = items.filter((item) => item.city.length === 6);
    return res
        .map((item) => item.age)
        .reduce((acc, ce) => acc + ce) / res.length
}


// const result = avgAgeByCity(data);


// wyświetl imiona osób, które kochają python

// function peopleWhoLovesPython(elements) {
//     const names = [];
//
//     for (const element of elements){
//         if(element.hobbies.includes('python')){
//             names.push(element.name);
//         }
//     }
//
//     return names;
// }

const peopleWhoLovesPython = (elements) => elements
    .filter((element) => element.hobbies.includes('python'))
    .map((element) => element.name);

// const result = peopleWhoLovesPython(data);


// policz ile jest unikalnych hobby

// function countUniqueHobbies(elements){
//     const hobbies = [];
//
//     for (const element of elements){
//         for (const hobby of element.hobbies){
//             if (!hobbies.includes(hobby)){
//                 hobbies.push(hobby)
//             }
//         }
//     }
//
//     return hobbies.length
// }

const countUniqueHobbies = (elements) => [...new Set(elements
    .flatMap((element) => element.hobbies))]



// const result = countUniqueHobbies(data);


// sprawdź czy ktokolwiek ma więcej niż 35 lat

// const isOldPeople = (persons) => {
//     for (const person of persons){
//         if (person.age > 35){
//             return true;
//         }
//     }
//
//     return false;
// }

// const isOldPeople = (persons) => persons
//     .filter((person) => person.age > 35).length > 0

const isOldPeople = (persons) => persons.some((person) => person.age > 35)

// const result = isOldPeople(data);


// sprawdz czy wszyscy pochodzą z krakow
// const isAllFromKrakow = (persons) => {
//     for (const person of persons) {
//         if (person.city !== 'krakow'){
//             return false;
//         }
//     }
//     return true;
// }

const isAllFromKrakow = (persons) => persons.every((person) => person.city === 'krakow');

// const result = isAllFromKrakow(data);

// wyświetl imiona w kolejności od najmłodszego do najstarszego

function getNamesOrderByAge(persons){
    return persons
        .sort((a, b) => a.age - b.age > 0 ? 1 : -1)
        .map((person) => person.name);
}



const result = getNamesOrderByAge(data);
console.log(result);













