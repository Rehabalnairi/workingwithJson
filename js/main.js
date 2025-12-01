//Convert JSON to a JavaScript Object
const jsonstring ='{"name": "John", "age": 30, "title": "software engineer"}';
const engineer = JSON.parse(jsonstring); 
console.log(engineer.name);
console.log(engineer.age);


//Convert a JavaScript Object to JSON
const devloper= {
    name: "sara",
    age: 25,
    title: "frontend developer"
};

const jsonString =JSON.stringify(devloper);
console.log(jsonString);


//