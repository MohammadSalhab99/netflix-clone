import {Link} from 'react-router-dom';


function Navbar(){
    return(
        <>
        <Link to="/">Home</Link>
        <Link to ="/FavList">FavList</Link>
        </>
    )

}
export default Navbar;