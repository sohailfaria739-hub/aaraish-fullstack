// Fallback mock database for Vercel serverless deployment
const db = {
  prepare: (query) => {
    return {
      run: () => ({ lastInsertRowid: 1, changes: 1 }),
      get: () => null,
      all: () => [
        {
          id: 1,
          name: "Classic Silk Dress",
          price: 4999,
          category: "dresses",
          image: "https://via.placeholder.com/300",
          description: "Elegant silk dress",
          is_popular: 1
        },
        {
          id: 2,
          name: "Casual Summer Outfit",
          price: 2999,
          category: "dresses",
          image: "https://via.placeholder.com/300",
          description: "Lightweight summer wear",
          is_popular: 1
        }
      ]
    };
  },
  exec: () => {}
};

module.exports = db;