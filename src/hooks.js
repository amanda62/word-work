import { useState, useEffect } from "react";
import WordWorkAPI from "./WordWorkAPI";

export const useWordbank = () => {
  const [wordbank, setWordbank] = useState([]);
  useEffect(() => {
    WordWorkAPI.getWordbank().then(wb => setWordbank(wb));
  }, []);
  return [wordbank, setWordbank];
};
