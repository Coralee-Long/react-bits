import { BrowserRouter as Router } from 'react-router-dom';
import {AppRoutes as Routes} from './routes/Routes.js';

const App = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default App;
