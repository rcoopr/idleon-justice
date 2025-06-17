import { useSearchStore } from '../lib/hooks/use-search-store';
import { Button } from './ui/button';

export function Encounters() {
  const { filteredEncounters, selectedEncounter, setSelectedEncounter } = useSearchStore();

  return (
    <div className="flex flex-wrap gap-4 justify-center mb-4">
      {filteredEncounters.map((enc) => (
        <Button
          key={enc.name}
          shine
          active={selectedEncounter?.name === enc.name}
          className="w-16 h-16 lg:w-20 lg:h-20 rounded-xl"
          onClick={() => setSelectedEncounter((prev) => (prev?.name === enc.name ? null : enc))}
        >
          <img src={enc.icon} alt={enc.name} />
        </Button>
      ))}
    </div>
  );
}
