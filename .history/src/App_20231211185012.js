import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from '/src/routes/AppRoutes.js';

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
