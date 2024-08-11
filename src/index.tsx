import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SectionProvider } from './context/SectionProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <SectionProvider>
    <App />
  </SectionProvider>
);

reportWebVitals();
