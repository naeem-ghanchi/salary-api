const app = require("./app");
const sequelize = require("./database/db");

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    // Connect DB
    await sequelize.authenticate();
    console.log("Database connected");

    // Sync DB (create tables)
    await sequelize.sync();
    console.log("Database synced");

    // Start server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
