const username = "waseera-user";
const password = "waseera-password";

// Switch to the 'waseera' database (this will create the DB if it doesn't exist)
db = db.getSiblingDB('waseera');

// Check if the user already exists
const user = db.getUser(username);

if (user === null) {
  // Create the user with readWrite role for the 'waseera' database
  db.createUser({
    user: username,
    pwd: password, 
    roles: [
      { role: "readWrite", db: "waseera" }
    ]
  });
  print(`User ${username} created.`);
} else {
  print(`User ${username} already exists.`);
}
