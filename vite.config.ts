import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import Unfonts from 'unplugin-fonts/vite';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    Unfonts({
      google: { families: ['Six Caps'], preconnect: true, display: 'block', text: 'IDLEONJUSTICE' },
    }),
    tailwindcss(),
    react(),
    svgr(),
  ],
});
