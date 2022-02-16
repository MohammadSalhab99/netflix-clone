import { Card, CardGroup,Button } from 'react-bootstrap/';
import {useState} from 'react';
import ModalMovie  from './ModalMovie';

function MovieList(props) {
    const [showModal, setShowModal] = useState(false);
    const [movie, setMovie] = useState();
  return (
    <>
    
    <CardGroup>
        {props.movies.map((movie) =>{
        return (
            <div key={movie.id}>
             <Card key={movie.id} >
                <Card.Img variant='top' src={movie.strDrinkThumb}/>
                <Card.Body>
                  <Card.Title>{movie.strDrink}</Card.Title>
                  <Card.Text>
                  {movie.summary ? movie.topText : "No text"}
                  </Card.Text>
                  <Card.Text>
                  {movie.caption ? movie.caption : "No Caption Added"}
                  </Card.Text>
                  
                  <Button variant="primary" onClick={() => { setMovie(movie); setShowModal(true) }} >Show Modal</Button>
                </Card.Body>
              </Card>
            </div>
          )}
        )}
      </CardGroup>
      {showModal && <ModalMovie show={showModal} movie={movie} handleColse={() => { setShowModal(false) }} updateCaption={props.updateCaption} />}
    </>
  );
}
export default MovieList;
