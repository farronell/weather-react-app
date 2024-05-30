import { useEffect, useState } from "react";

export default function useDataFetch(city) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null)
  const url = `http://api.weatherapi.com/v1/current.json?key=912636aaa79f470e833184741242905&query=${city}`;


  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) =>{
        console.error("Error fetching weather data:", error)
        setError(error)
      });
  }, [url]);

  return {data, error};
}
