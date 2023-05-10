import React, { useState } from "react";

const movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    image: "https://picsum.photos/id/1018/200/300",
  },
  {
    id: 2,
    title: "The Godfather",
    year: 1972,
    image: "https://picsum.photos/id/1023/200/300",
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    image: "https://picsum.photos/id/1005/200/300",
  },
  {
    id: 4,
    title: "Schindler's List",
    year: 1993,
    image: "https://picsum.photos/id/1003/200/300",
  },
  {
    id: 5,
    title: "Forrest Gump",
    year: 1994,
    image: "https://picsum.photos/id/1002/200/300",
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
    <div>
      <aside>
        <h1 className="underline font-medium">Top 5 Movies</h1>
        <input
          type="text"
          placeholder="Search movies"
          value={searchTerm}
          onChange={handleSearch}
        />
      </aside>
      <ul>
        {filteredMovies.map((movie) => (
          <li key={movie.id}>
            <img src={movie.image} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>Year: {movie.year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
