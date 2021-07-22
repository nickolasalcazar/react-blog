import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = 'Welcome';
  const num_likes = 22;

  return (
    <div className="App">
      <Navbar />
      <div className='content'>
        <Home />
      </div>
    </div>
  );
}

export default App;
