import { BrowserRouter } from 'react-router-dom';
import Footer from "app_container/Footer";
import Header from 'app_container/Header';
import Navigation from './Components/routes/Navigation';




function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navigation />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
