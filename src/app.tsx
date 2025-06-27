import './App.css';

import { Analytics } from '@vercel/analytics/react';
import { ToTop } from './components/to-top';
import { Header } from './components/header';
import { SearchInput } from './components/search-input';
import { Encounters } from './components/encounters';
import { GeneralStrategy } from './components/general-strategy';
import { DialogueOptions } from './components/dialogue-options';
import { Attribution } from './components/attribution';

export function App() {
  return (
    <main className="w-screen min-h-screen relative flex justify-center bg-nebula-900 text-nebula-300 px-6 sm:px-12 md:px-16 py-8 md:py-16 background">
      <Analytics />
      <div className="h-fit relative z-10 w-full max-w-5xl flex flex-col items-center gap-y-8 content">
        <Header />
        <Attribution />
        <SearchInput />
        <Encounters />
        <GeneralStrategy />
        <DialogueOptions />
        <div className="h-screen" aria-hidden />
      </div>
      <ToTop />
    </main>
  );
}

/**
 * TODO
 *
 * host
 * summary dialogue options
 */
