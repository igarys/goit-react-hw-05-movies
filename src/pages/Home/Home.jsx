// import { fetchApi } from "services/API"

import { Header } from "App.styled";
import { PopularMovies } from "components";
// import { useEffect } from "react";
// import { useState } from "react";

export const Home = () => {
 
    return (
        <main>
        <Header>Trending movies</Header>
       <PopularMovies/>
      </main>
    );
}