
// import {
//   BrowserRouter
// } from 'react-router-dom';

import {
  Provider
} from 'react-redux';
import { store } from './store';

import AppRoutes from './routes/AppRoutes';

function App() {
  return (
      <Provider store={store}>
        <AppRoutes></AppRoutes>
      </Provider>
  );
}

export default App;
