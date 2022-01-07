module.exports = {
  development: {
    username: "israel",
    password: "israboy",
    database: "kusawasi",
    port: "5432",
    host: "localhost",
    dialect: "postgres",
    define: {
      timestamps: false,
    },
  },
  production: {
    username: "",
    password: "",
    database: "",
    host: "",
    port: "",
    dialect: "postgres",
    define: {
      timestamps: false,
    },
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
};
