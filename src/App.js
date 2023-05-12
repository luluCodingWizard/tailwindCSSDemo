import React, { useState } from "react";

const movies = [
  {
    title: "The Godfather",
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    year: 1972,
    image:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg",
    ranking: 1,
  },
  {
    title: "The Shawshank Redemption",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    year: 1994,
    image:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    ranking: 2,
  },
  {
    title: "The Dark Knight",
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    year: 2008,
    image:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
    ranking: 3,
  },
  {
    title: "Schindler's List",
    description:
      "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    year: 1993,
    image:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
    ranking: 4,
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    description:
      "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    year: 2003,
    image:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    ranking: 5,
  },
  {
    title: "Pulp Fiction",
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    year: 1994,
    image:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    ranking: 6,
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    description:
      "A young hobbit, Frodo, who has found the One Ring that belongs to the Dark Lord Sauron, begins his journey with eight companions to Mount Doom, the only place where it can be destroyed.",
    year: 2001,
    image:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/6oom5QYQ2yQTMJIbnvbk",
  },
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredMovies = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className=" bg-slate-950">
      <div className="md:container  bg-gray-200 p-3 flex gap-2">
        <aside className=" min-w-1/4">
          <h1 className=" text-3xl font-bold text-red-900">Top 5 Movies</h1>
          <input
            type="text"
            placeholder="Search movies"
            value={searchTerm}
            onChange={handleSearch}
          />
        </aside>
        <ul className="grid grid-cols-3 gap-2">
          {filteredMovies.map((movie) => (
            <li key={movie.id}>
              <img
                src={movie.image}
                alt={movie.title}
                className=" h-40 mx-auto"
              />
              <h2>{movie.title}</h2>
              <p>Year: {movie.year}</p>
              <p>description: {movie.description}</p>
              <p>ranking: {movie.ranking}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
