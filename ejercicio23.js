const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
    { name: "Spirited Away", durationInMinutes: 80 },  
    { name: "The Matrix", durationInMinutes: 136 },  
    { name: "Amélie", durationInMinutes: 110 },  
    { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
  ];
  
  // Inicializamos los arrays para las películas filtradas
  const smallMovies = [];
  const mediumMovies = [];
  const largeMovies = [];
  
  // Bucle para clasificar las películas
  for (const movie of movies) {
    if (movie.durationInMinutes < 100) {
      smallMovies.push(movie); // Agregar a películas pequeñas
    } else if (movie.durationInMinutes >= 100 && movie.durationInMinutes < 200) {
      mediumMovies.push(movie); // Agregar a películas medianas
    } else {
      largeMovies.push(movie); // Agregar a películas grandes
    }
  }
  
  // Imprimir los arrays resultantes
  console.log("Películas pequeñas:", smallMovies);
  console.log("Películas medianas:", mediumMovies);
  console.log("Películas grandes:", largeMovies);
  