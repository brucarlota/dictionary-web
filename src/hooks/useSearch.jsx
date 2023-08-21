import { useState } from "react";
import { BASE_URL } from "../services/BASE_URL";

const useSearch = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();
 
  const request = async (word) => {
    try {
      await fetch(`${BASE_URL}en/${word}`)
        .then(async (response) => {
          if (response.ok) {
              setData(await response.json());
            } else {
              setData([]);
            }
        });
    } catch (error) {
      setError(error);
    }
  }; 
  return { data, request, error };
};

export default useSearch;
