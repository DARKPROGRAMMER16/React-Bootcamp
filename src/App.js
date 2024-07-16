
import './App.css';
import Header from './Components/Header';
import MovieCard from './Components/MovieCard';

function App() {

  const user = {
    name:"Alex",
    age:22
  }

  return (
    <>

      <Header user={user}/>

      <div className='movieContainer'>

      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      </div>

    </>
 
  );
}

export default App;
