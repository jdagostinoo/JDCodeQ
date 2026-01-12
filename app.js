const express = require("express");
const app = express();

// Parse JSON bodies
app.use(express.json());

// Import demo functions with code quality + security issues
const {
  validateUser,
  processUser,
  processData,
  alwaysTrue,
  insecureDemo,
  impossibleLogic,
  deadCodeDemo
} = require("./validation");

// Demo endpoints

app.post("/validate", (req, res) => {
  const valid = validateUser(req.body);
  res.send({ valid });
});

app.post("/process-user", (req, res) => {
  const result = processUser(req.body);
  res.send({ result });
});

app.post("/process-data", (req, res) => {
  const result = processData(req.body.data || []);
  res.send({ result });
});

app.get("/always-true", (req, res) => {
  const result = alwaysTrue("demo");
  res.send({ result });
});

// Forced Aikido demo findings

app.get("/demo/insecure", (req, res) => {
  insecureDemo("demo");
  res.send("ok");
});

app.get("/demo/impossible", (req, res) => {
  res.send({ result: impossibleLogic(1, 2) });
});

app.get("/demo/dead", (req, res) => {
  res.send({ result: deadCodeDemo() });
});

// Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Demo app running on port ${PORT}`);
});
