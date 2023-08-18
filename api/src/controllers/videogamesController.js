const { Videogame, Genre } = require("../db");
const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;
const { Op } = require("sequelize");

const getDbVideogames = async () => {
  //Getting videogames from database
  let dbVideogames = await Videogame.findAll({
    include: {
      model: Genre,
      atributes: ["name"],
      through: {
        atributes: [],
      },
    },
  });
  //Desctructuring and getting needed information
  dbVideogames = dbVideogames.map((result) => {
    let { id, name, platforms, background_image, released, rating, genres } =
      result;
    genres = genres.map((gen) => gen.name);
    return {
      id,
      name,
      platforms,
      background_image,
      released,
      rating,
      genres,
    };
  });
  //Returning videogames array to handler
  return dbVideogames;
};

const getApiVideogames = async () => {
  //Getting videogames from API
  const { data } = await axios.get(
    `https://api.rawg.io/api/games?key=${API_KEY}`
  );
  //Desctructuring and getting needed information
  const apiVideogames = data.results.map((result) => {
    let { id, name, platforms, background_image, released, rating, genres } =
      result;
    //Desctructuring and getting needed information from platforms
    platforms = platforms.map((plat) => {
      const { platform } = plat;
      return platform.name;
    });
    //Destructuring and getting needed information from genres
    genres = genres.map((gen) => gen.name);
    //Returning arranged element from map
    return {
      id,
      name,
      platforms,
      background_image,
      released,
      rating,
      genres,
    };
  });
  //Returning videogames array to handler
  return apiVideogames;
};

const getDbVideogameByName = async (search) => {
  //Getting videogames from database:
  // * Including genre from Genre model
  // * Searching by name, case unsensitive
  // * Limit 15 results
  let dbVideogames = await Videogame.findAll(
    {
      where: { name: { [Op.iLike]: `%${search}%` } },
      include: {
        model: Genre,
        atributes: ["name"],
        through: {
          atributes: [],
        },
      },
    },
    { limit: 15 }
  );
  //Desctructuring and getting needed information
  if (dbVideogames) {
    dbVideogames = dbVideogames.map((dbVideogame) => {
      let {
        id,
        name,
        description,
        platforms,
        background_image,
        released,
        rating,
        genres,
      } = dbVideogame;
      //Desctructuring and getting needed information from genres
      genres = genres.map((gen) => gen.name);
      //Returning arranged element from map
      return {
        id,
        name,
        description,
        platforms,
        background_image,
        released,
        rating,
        genres,
      };
    });
  }
  //Returning videogames array to handler
  return dbVideogames;
};

const getApiVideogamesByName = async (search) => {
  // Getting videogames array from API
  const { data } = await axios.get(
    `https://api.rawg.io/api/games?search=${search}&key=${API_KEY}`
  );
  //Desctructuring and getting needed information
  const apiVideogames = data.results.map((result) => {
    let { id, name, platforms, background_image, released, rating, genres } =
      result;
    //Desctructuring and getting needed information from platforms
    platforms = platforms.map((plat) => {
      const { platform } = plat;
      return platform.name;
    });
    //Desctructuring and getting needed information from genres
    genres = genres.map((gen) => gen.name);
    //Returning arranged element from map
    return {
      id,
      name,
      platforms,
      background_image,
      released,
      rating,
      genres,
    };
  });
  //Returning videogames array to handler
  return apiVideogames;
};

const getDbVideogameById = async (idVideogame) => {
  //Searching for videogame in the database
  // * Including genres from Genre model
  const game = await Videogame.findByPk(idVideogame, {
    include: {
      model: Genre,
      atributes: ["name"],
      through: {
        atributes: [],
      },
    },
  });
  //Desctructuring and getting needed information
  let {
    id,
    name,
    description,
    platforms,
    background_image,
    released,
    rating,
    genres,
  } = game;
  //Desctructuring and getting needed information from genres
  genres = genres.map((gen) => gen.name);
  //Returning videogame to handler
  return {
    id,
    name,
    description,
    platforms,
    background_image,
    released,
    rating,
    genres,
  };
};

const getApiVideogamebyId = async (idVideogame) => {
  //Searching for videogame in the API
  const { data } = await axios.get(
    `https://api.rawg.io/api/games/${idVideogame}?key=${API_KEY}`
  );
  //Desctructuring and getting needed information
  let {
    id,
    name,
    description,
    platforms,
    background_image,
    released,
    rating,
    genres,
  } = data;

  //Desctructuring and getting needed information from platforms
  platforms = platforms.map((plat) => {
    const { platform } = plat;
    return platform.name;
  });
  //Desctructuring and getting needed information from genres
  genres = genres.map((gen) => gen.name);
  //Returning videogame to handler
  return {
    id,
    name,
    description,
    platforms,
    background_image,
    released,
    rating,
    genres,
  };
};

const postVideogame = async (
  id,
  name,
  description,
  platforms,
  background_image,
  released,
  rating,
  genres
) => {
  //Creating new videogame in database from data received
  const newGame = await Videogame.create({
    id,
    name,
    description,
    platforms,
    background_image,
    released,
    rating,
  });
  //Adding received genres as relation in Genre model
  newGame.addGenres(genres);
  //Returning created game
  return newGame;
};

module.exports = {
  getDbVideogames,
  getApiVideogames,
  getDbVideogameByName,
  getApiVideogamesByName,
  getDbVideogameById,
  getApiVideogamebyId,
  postVideogame,
};
