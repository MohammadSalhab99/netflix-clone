import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap/';
import { useRef } from 'react';

function ModalMovie(props) {

    const commentRef = useRef();
    function handleCaption(e) {
        e.preventDefault()
        const userCaption = commentRef.current.value;
        ;
        const newData = { ...props.Movie, userCaption };
        props.updateCaption(newData, props.movie.idDrink);
        console.log(1111111111,props.movie)
    }

    async function addToFavorite(movie){
        try{
            const res = await fetch(`${process.env.REACT_APP_SERVER}/addMovie`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title : movie.strDrink,
                    image : movie.strDrinkThumb,
                    comment : movie.caption,

                })
                

            })
            const data = await res.json();




        } catch (error) {
            console.log("error", error);
        }
    }

    return (
        <>
            <Modal show={props.show} onHide={() => { props.handleColse() }}>
                <Modal.Header closeButton>
                <img width='40%' src={props.movie.strDrinkThumb} alt={props.movie.strDrink} />
                    <p>{props.movie.topText ? props.movie.topText : "No Text Provided"}</p>
                    <p>{props.movie.caption}</p>
                   
                </Modal.Header>
                <Modal.Body>
                <Modal.Title>{props.movie.strDrink}</Modal.Title>
                  
                </Modal.Body>
                <Modal.Footer>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Captions:</Form.Label>
                        <Form.Control ref={commentRef} type="textarea" placeholder={props.movie.caption ? props.movie.caption : "Add Your Caption Here..."} />
                    </Form.Group>
                    <Button className="addBtn" variant="primary" type="submit" onClick={handleCaption}  >
                        Add a Caption
                    </Button>
                    <Button variant="primary" onClick={()=> addToFavorite(props.movie)} >
                        add to fav
                    </Button>


                    <Button variant="primary" onClick={props.handleColse}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalMovie;
