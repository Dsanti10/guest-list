import { useState, useEffect } from "react";

//TODO: fetch necessary data from API
const BASE_URL = "https://fsa-crud-2aa9294fe819.herokuapp.com/api";
const COHORT = "/2506-DevinS";
const API = BASE_URL + COHORT;

//TODO: if guest is not selected, render guest list
//TODO: create a state to know if a guest is selected or not

export default function useQuery(resource) {
  const [guest, setGuest] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getGuests = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(API + resource);
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const result = await response.json();
        setGuest(result.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getGuests();
  }, [resource]);

  return { guest, loading, error };
}
