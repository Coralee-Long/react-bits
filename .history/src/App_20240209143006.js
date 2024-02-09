import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <AppRoutes />
      </Router>
      <Footer />
    </>
  );
};

export default App;
