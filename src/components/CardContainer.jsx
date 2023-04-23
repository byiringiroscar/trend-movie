import React from 'react';

const CardContainer = (prop) => {
  const { movieCategory, moviesAll } = prop;
  return (
    <div className="card-container">
      <h3 className="category">{movieCategory}</h3>
      <div className="card-movie">
        {moviesAll.map((item) => {
          const movieImage = `https://movies-w2a8.onrender.com${item.image}`;
          return ((
            <div key={item.name} className="card">
              <div className="image-div">
                <img src={movieImage} alt="movie" />
              </div>
              <p>{item.name}</p>
            </div>
          ));
        })}
      </div>
    </div>
  );
};

export default CardContainer;
