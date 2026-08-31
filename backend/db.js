// Database fallback for serverless deployments
const db = {
  pragma: () => {},
  exec: () => {},
  prepare: () => ({
    run: () => ({ lastInsertRowid: 1, changes: 1 }),
    get: () => null,
    all: () => []
  })
};

module.exports = db;