//Convert JSON to a JavaScript Object
const jsonstring ='{"name": "John", "age": 30, "title": "software engineer"}';
const engineer = JSON.parse(jsonstring); 
console.log(engineer.name);
console.log(engineer.age);


//Convert a JavaScript Object to JSON
/*const devloper= {
    name: "sara",
    age: 25,
    title: "frontend developer"
};

const jsonString =JSON.stringify(devloper);
console.log(jsonString);
*/

//Using JSON with Fetch API
//GET request (receiving JSON from an API)

async function getUsers(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data[0].name);  
    }
    catch(error){
        console.error('Error fetching users:', error);
    }
}
getUsers();


//POST request (sending JSON to an API)
async function addEng(){
    const newEngineer = {
        name: "Mike",
        age: 28,
        title: "backend developer"
    };
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newEngineer)
        });
        const data = await response.json();
        console.log('New Engineer added:', data);}
    catch(error){
        console.error('Error adding engineer:', error);
    }
}


addEng();

