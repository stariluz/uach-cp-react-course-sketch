import { useState } from 'react';

const useVideogamesData = () => {
  const [games, setGames] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>("");

  const fetchVideogames = async (params?: string) => {
    setIsLoading(true);
    try {
      const res = await fetch(`https://api.rawg.io/api/games?key=e5190f36da374820b8ec07396096d1c8${params || ''}`);
      const data = await res.json();
      setGames(data.results);
      // console.log(data.results);
      setIsLoading(false);
      setError(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setError(error);
    }
  }

  return {
    games,
    error,
    isLoading,
    fetchVideogames
  };
}
export default useVideogamesData;