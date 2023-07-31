import { useState } from "react";
import { BASE_URL } from "../services/BASE_URL";

const useSearch = () => {

  const [data, setData] = useState();
 
  const request = async (word) => {
    try {
      const response = await fetch(`${BASE_URL}en/${word}`);
      setData(await response.json());
    } catch (error) {
      console.log(error);
    }
  }; 
  return { data, request };
};

export default useSearch;