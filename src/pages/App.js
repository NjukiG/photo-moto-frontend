import '../App.css';
import Home from './Home';
import LoginForm from './LoginForm';
import AlbumsPage from './AlbumsPage';
import PhotosPage from './PhotosPage';
import SignupForm from './SignupForm';

function App() {
  return (
    <div className="App">
      <Home />
      <AlbumsPage />
      <PhotosPage />
      <LoginForm />
      <SignupForm />
    </div>
  );
}

export default App;
