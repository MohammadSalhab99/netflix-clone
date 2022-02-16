import React, {useEffect} from "react"
import MovieList from "./MovieList"
import  { useState } from "react";
import {Container ,Row} from 'react-bootstrap'



function Home(){
   const [movies,setMovies] = useState();
const fetchData = async () =>{
    try{
    const response = await fetch(`https://mohammad-movie.herokuapp.com/trending`);
    const data = await response.json();
    console.log(data);
    setMovies(data);
}catch(error){
    console.log(error);
}

}
const updateCaptions= (data, id)=> {
    let updatedMovies = movies.map(movie => {
        if (movie.id == id) {
            movie.caption = data.userCaption;
            return movie;
        }
        else return movie
    })
    setMovies(updatedMovies);
}
    useEffect(() =>{
        fetchData();
    },[])
    return(
        <>
        <h1>this is home</h1>
        <main>
            {movies &&
        <Container fluid className="main-container">
                        <Row className="flex-row">
                            <MovieList movies ={movies} updateCaption={updateCaptions} />
                        </Row>
        </Container>
}
       </main>
        </>
    )
}
export default Home;