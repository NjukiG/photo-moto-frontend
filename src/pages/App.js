import '../App.css';
import Home from './Home';
import LoginForm from './LoginForm';
import AlbumsPage from './AlbumsPage';
import PhotosPage from './PhotosPage';


function App() {
  return (
    <div className="App">
      <Home />
      <AlbumsPage />
      <PhotosPage />
      <LoginForm />
    </div>
  );
}

export default App;
