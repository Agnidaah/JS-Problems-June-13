// Create a JavaScript function getUserData that simulates fetching user data from a server asynchronously. The function takes a callback function callback as an argument. Inside the getUserData function, after a delay of 2 seconds, invoke the callback function with a mock user object containing name, email, and age properties.

function getUserData(callback) {
  setTimeout(() => {
    const user = {
      name: "John Doe",
      email: "johndoe@example.com",
      age: 25,
    };
    callback(user);
  }, 2000);
}

getUserData((user) => {
  console.log(user);
});
