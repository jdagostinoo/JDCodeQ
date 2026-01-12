const express = require("express");
const {
  validateUser,
  processUser,
  process,
  calculateUserAccess,
  buildResponse,
  shouldRetry
} = require("./validation");

const app = express();
app.use(express.json());

// --- DEMO: CODE QUALITY – Debugging & short-circuit logic ---
app.get("/demo/code-quality", (req, res) => {
  insecureDemo("demo");
  return res.send("ok"); // short-circuit, bypassed logic
});

function insecureDemo(input) {
  console.log("Debug input:", input);
  debugger; // Debugging artifact
}

// --- DEMO: Nested complexity ---
app.get("/demo/complexity", (req, res) => {
  const access = calculateUserAccess(
    { active: true, role: "admin" },
    "prod",
    { allowAdmin: true }
  );
  res.send({ access });
});

// --- DEMO: Unused variables ---
app.get("/demo/unused", (req, res) => {
  res.send(buildResponse({ demo: true }));
});

// --- DEMO: Magic numbers ---
app.get("/demo/magic", (req, res) => {
  res.send({ retry: shouldRetry(10) });
});

// --- Existing examples wired ---
app.post("/user/validate", (req, res) => {
  res.send({ valid: validateUser(req.body) });
});

app.post("/user/process", (req, res) => {
  res.send(processUser(req.body));
});

app.post("/process", (req, res) => {
  res.send(process(req.body));
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
