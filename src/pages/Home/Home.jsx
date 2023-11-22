// import { fetchApi } from "services/API"

import { Header } from "App.styled";
import PopularMovies from "components/PopularMovies/PopularMovies";

 const Home = () => {
 
    return (
        <main>
        <Header>Trending movies</Header>
       <PopularMovies/>
      </main>
    );
 }

export default Home;