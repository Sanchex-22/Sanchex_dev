import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/approutes.tsx';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <BrowserRouter>
  <HelmetProvider>
  {/* <React.StrictMode> */}
      <AppRoutes/>    
  {/* </React.StrictMode> */}
  </HelmetProvider>
  </BrowserRouter>
)
