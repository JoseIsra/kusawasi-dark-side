const router = require("express").Router();

//  ALL AVAILABLE ROUTES IN THE APP
const categoryRouter = require("./categories");
const clientRouter = require("./clients");
const companyRouter = require("./companies");
const ownerRouter = require("./owners");
const userTypeController = require("./typeusers");

// GENERAL USE OF ALL ROUTES
function routerApi(app) {
  app.use("/api", router); // declaración ruta maestra
  router.use("/category", categoryRouter); // sería /api/category ...
  // router.use("/company", companyRouter); // sería /api/v1/company ...
  // router.use("/owner", ownerRouter); // sería /api/v1/owner ...
  // router.use("/client", clientRouter); // sería /api/v1/client ...
  // router.use("/usertype", userTypeController); // sería /api/v1/usertype ...
}

//DONT FORGET TO MODULE.EXPORTS = SOMESHIT
module.exports = routerApi;
