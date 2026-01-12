const express = require("express");
const { exec } = require("child_process");
const { getUserByName } = require("./db");

const app = express();
app.use(express.json());

// ❌ Unused variable
const unusedVariable = 123;

// ❌ eval usage
app.post("/calculate", (req, res) => {
  const expression = req.body.expression;
  const result = eval(expression);
  res.send({ result });
});

// ❌ Command Injection
app.post("/ping", (req, res) => {
  const host = req.body.host;
  exec("ping -c 1 " + host, (err, stdout) => {
    if (err) {
      res.send(err);
    }
    res.send(stdout);
  });
});

// ❌ SQL Injection
app.get("/user", (req, res) => {
  const name = req.query.name;
  const query = getUserByName(name);
  res.send({ query });
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});
