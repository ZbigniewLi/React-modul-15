import Home from './Components/Home/Home'
import Container from './Components/Container/Container'
import NavBar from './Components/NavBar/NavBar'
import Favorite from './Components/Favorite/Favorite';
import About from './Components/About/About';
import { Routes, Route } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import List from './Components/List/List';

const App = () => {
  return (
    <main>
    <NavBar />
    <Container>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/favorite" element={<Favorite />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/list/:listId" element={<List />} />
    </Routes>
    </Container>
</main>
  )
}

export default App;
