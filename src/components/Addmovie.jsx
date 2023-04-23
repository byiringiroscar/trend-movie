import React from 'react';
import './addmovie.scss';

const Addmovie = () => (
  <main>
    <h2 className="main-title">Add movies</h2>
    <form>
      <input type="text" placeholder="Movie name" name="movieName" />
      <input type="text" placeholder="Movie link" name="movieLink" />
      <select name="movieGenre">
        <option value="action">Action</option>
        <option value="blockbuster">Blockbuster</option>
        <option value="horror">Horror</option>
        <option value="comedian">Comedian</option>
        <option value="thriller">Thriller</option>
        <option value="romance">Romance</option>
      </select>
      <input type="file" name="movieFile" />
      <button type="submit">Submit</button>
    </form>
  </main>
);

export default Addmovie;
