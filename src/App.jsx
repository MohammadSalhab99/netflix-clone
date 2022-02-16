import FavList from "./Components/FavList";
import "./App.css";
import Home from './Components/Home';
import {Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import {useEffect,useState} from 'react'
function App() {
  const [favoriteList,SetFavList] = useState([]);


const fetchData = async () => {
  try{
    const res = await fetch(`${process.env.REACT_APP_SERVER}/getMovies`);

    const data = await res.json();
    SetFavList(data);

  }catch (error) {
    console.log("error", error);
  }

}


  useEffect(() => {
    fetchData();
  } , []);
 
  return (

    <div >
      <Navbar/>
     <Routes>
      <Route path='/'  element={<Home />} />
      <Route path ='/FavList' element ={<FavList favoriteList={favoriteList}/>} />
      </Routes>

     
    </div>
  );
}

export default App;