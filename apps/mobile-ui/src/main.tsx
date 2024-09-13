import { setupIonicReact } from '@ionic/react';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'jquery';
import 'owl.carousel';

import './styles.scss';

import App from './app/App';

setupIonicReact({
  mode: 'ios',
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
