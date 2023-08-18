const { Router } = require("express");
const {
  getVideogamesHandler,
  getVideogameByNameHandler,
  getVideogameByIdHandler,
  postVideogameHandler,
} = require("../handlers/videogamesHandlers");

const videogamesRouter = Router();

videogamesRouter.get("/", getVideogamesHandler);

videogamesRouter.get("/name", getVideogameByNameHandler);

videogamesRouter.get("/:idVideogame", getVideogameByIdHandler);

videogamesRouter.post("/", postVideogameHandler);

module.exports = videogamesRouter;
