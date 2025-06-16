import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'unfonts.css';
import './tailwind.css';
import './index.css';
import { App } from './app';
import { TooltipProvider } from './components/ui/tooltip';

createRoot(document.body).render(
  <StrictMode>
    <TooltipProvider>
      <App />
    </TooltipProvider>
  </StrictMode>
);
