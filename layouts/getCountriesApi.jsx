import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const getCountriesApi = (term) => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getCountries = async () => {
    if (term.length !== 0) {
      try {
        setIsLoading(true)
        const { data, status } = await axios.get(
          "https://suggest.aviasales.com/v2/places.json",
          {
            params: {
              locale: "uz_UZ",
              max: 7,
              term: term,
            },
          }
        );
        if (status == 200) {
          setCountries(data);
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false)
        console.log("error in getting countries");
      }
    } else {
      setCountries([])
    }
  };

  useEffect(() => {
    getCountries();
  }, [term]);

  return { countries, isLoading }
};

export default getCountriesApi;
