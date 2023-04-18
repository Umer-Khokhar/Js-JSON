const myObj = {
  name: "Umer",
  age: 18,
  hobbies: ["Gardening", "Coding"],
  loc: function () {
    console.log("Lahore");
  },
};
console.log(myObj);
console.log(myObj.name);
myObj.loc();
console.log(typeof myObj);

// Converting myObj to string using JSON

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON); // myobj is now converted to string
console.log(typeof sendJSON); // type is also now string
//Note: We lost the method inside of myObj because when we use stringify function or method should lost
// console.log(sendJSON.hobbies[1]) // throw error because converted into string

// Converting myObj to object again

const reciveJSON = JSON.parse(sendJSON);
// Again converted into object but the mehtod inside the object is lost
console.log(reciveJSON);
console.log(reciveJSON.hobbies[1]);
