import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';

import { ThemeProvider } from '@emotion/react';

const theme = {
  colors: {
    textTitle: 'rgba(0, 56, 141, 0.815)',
    subText: 'rgb(65, 65, 65)',
    accentText: 'rgba(218, 87, 0, 0.836)',
    white: 'rgb(255, 255, 255)',
    buttonSubmit: 'rgba(0, 71, 177, 0.616)',
    buttonDelete: 'rgba(204, 82, 0, 0.952)',
  },
  hoverColors: {
    buttonSubmit: 'rgba(0, 51, 128, 0.616)',
    buttonDelete: 'rgba(172, 69, 0, 0.952)',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
