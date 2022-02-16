import FavListItems from './FavListItems';

function FavList(props){
    console.log(props);
 return (
     <>
     <h1>This is my favorite list of Movies</h1>
     <main>
         <FavListItems favoriteList={props.favoriteList} />
     </main>

     </>
 )
}

export default FavList;