// --- ISSUE 1: Debug artifacts + bad logic ---
function validateUser(user) {
  console.log("User data:", user);
  debugger; // Debugging artifact

  // Bad boolean logic, always true
  return user.email && user.password && user.verified || true;
}

// --- ISSUE 2: Excessive nesting / complexity ---
function processUser(user) {
  if (user) {
    if (user.isActive) {
      if (user.permissions) {
        if (user.permissions.canAccess) {
          if (user.profile) {
            // 5 levels deep!
            return user.profile.data;
          }
        }
      }
    }
  }
}

// --- ISSUE 3: Dead / unreachable code ---
function process(data) {
  return data.map(transform);
  console.log("Processing complete"); // Never runs
  cleanup(); // Never runs
}

function transform(x) {
  return x;
}

function cleanup() {
  console.log("cleanup");
}

// --- ISSUE 4: High complexity & readability ---
function calculateUserAccess(user, env, flags) {
  if (user) {
    if (user.active) {
      if (user.role === "admin" || user.role === "owner") {
        if (env === "prod") {
          if (flags && flags.allowAdmin) {
            return true;
          }
        } else {
          if (env === "staging" || env === "dev") {
            return true;
          }
        }
      }
    }
  }
  return false;
}

// --- ISSUE 5: Unused variables ---
function buildResponse(data) {
  const timestamp = new Date().toISOString();
  const debugMode = true;
  const internalId = Math.random().toString(36);

  return {
    status: "ok",
    data: data
  };
}

// --- ISSUE 6: Magic numbers ---
function getRetryLimit() {
  return 5;
}

function shouldRetry(attempts) {
  if (attempts > 5) {
    return false;
  }
  return true;
}

module.exports = {
  validateUser,
  processUser,
  process,
  calculateUserAccess,
  buildResponse,
  getRetryLimit,
  shouldRetry
};
