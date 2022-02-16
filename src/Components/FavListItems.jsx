import { Button, Card, CardGroup } from "react-bootstrap";

function FavListItems(props){
    return(
        <>
        <CardGroup style={{ display: "flex" }}>
            {
                
                (props.favoriteList ?? []).map(movie => {
                    return (
                        <Card key={movie.idDrink}>
                            <Card.Img variant="top" src={movie.strDrinkThumb} />
                            <Card.Body>
                                <Card.Title>{movie.title}</Card.Title>
                                <Card.Text>
                                    {movie.caption}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )
                })
            }
            
        
        </CardGroup>
        </>
    )
}

export default FavListItems;
