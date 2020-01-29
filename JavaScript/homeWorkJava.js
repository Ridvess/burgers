
console.log("-First task");
let name = "Роман";
console.log(name);
name = "Алексей";
console.log(name);
//-------------------
console.log("-Second task");

if ( 1 == 1 ) {
    console.log("true")
} else {
    console.log("false");
}

if ( 12 == 1 ) {
    console.log("true")
} else {
    console.log("false");
}

console.log("-Third task");

for(let i = 0; i < 10; i++){
    let a = 1;
    a+=a;
    console.log(a)
}

console.log("-Fourth task");

function sum(p1, p2, p3) {
    let result = 0;
    result = p1 + p2 + p3;
    return result;
}

console.log(sum(3, 10, 1));


console.log("-Fifth task");

var array = ['привет', 'loftschool'];
array.push('я изучаю', 'javascript');
console.log(array.length);
for (i = 0; i < array.length; i++){
    console.log(array[i])
}

console.log("-Sixth task");

let numberArray = [23, 542, 56, 543, 211, 1, 34, 99, 100, 111];
for (i=0; i<numberArray.length; i++){
    if(numberArray[i] > 100){
        console.log(numberArray[i]);
    }
}

console.log("-Seventh task");

let person = {name: 'Роман', lastName: 'Филипенко', age: 20 };

console.log(person.name);
console.log(person.lastName);
console.log(person.age);

person.name = 'Виктор';

console.log(person.name);

console.log("-Eighth task");

var human = {name:'', lastName: '', age: 0};
human.name = 'Роман';
human.lastName = 'Филипенко';
human.age = 20;

function hello(human) {
    return ("Привет, меня зовут " + human.name +" "+ human.lastName +
        " и мне " + human.age + " лет!")
}

console.log(hello(human));
