const arrangeApiData = (data) => {
  //Destructuring received data
  let { id, name, platforms, background_image, released, rating, genres } =
    data;
  //Getting needed information from platforms
  platforms = platforms.map((plat) => {
    const { platform } = plat;
    return platform.name;
  });
  //Getting needed information from genres
  genres = genres.map((gen) => gen.name);
  //Returning arranged information
  return {
    id,
    name,
    platforms,
    background_image,
    released,
    rating,
    genres,
  };
};

const arrangeApiDataId = (data) => {
  //Destructuring received data
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
  //Getting needed information from platforms
  platforms = platforms.map((plat) => {
    const { platform } = plat;
    return platform.name;
  });
  //Getting needed information from genres
  genres = genres.map((gen) => gen.name);
  //Returning arranged information
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

const arrangeDbData = (data) => {
  //Destructuring received data
  let { id, name, platforms, background_image, released, rating, genres } =
    data;
  //Getting needed information from genres
  genres = genres.map((gen) => gen.name);
  //Returning arranged information
  return {
    id,
    name,
    platforms,
    background_image,
    released,
    rating:Number(rating),
    genres,
  };
};

const arrangeDbDataId = (data) => {
  //Destructuring received data
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
  //Getting needed information from genres
  genres = genres.map((gen) => gen.name);
  //Returning arranged information
  return {
    id,
    name,
    description,
    platforms,
    background_image,
    released,
    rating:Number(rating),
    genres,
  };
};

module.exports = {
  arrangeApiData,
  arrangeDbData,
  arrangeDbDataId,
  arrangeApiDataId,
};