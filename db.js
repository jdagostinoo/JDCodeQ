const sqlite3 = require("sqlite3").verbose();

// ❌ Hardcoded credentials
const DB_PASSWORD = "super_secret_password";

const db = new sqlite3.Database(":memory:");

db.serialize(() => {
  db.run("CREATE TABLE users (id INT, name TEXT)");
  db.run("INSERT INTO users VALUES (1, 'admin')");
});

function getUserByName(name) {
  // ❌ SQL Injection
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return query;
}

module.exports = {
  db,
  getUserByName
};
