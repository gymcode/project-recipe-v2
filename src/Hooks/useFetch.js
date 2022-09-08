import { useEffect, useState } from "react";
import * as Sentry from "@sentry/react";

function useFetch(
  url,
  defaultResponse,
  recipeString,
  isStorage,
) {
  const [data, setData] = useState(defaultResponse);

  console.log({
    message: "data content & data from local storage...",
    body: {
      data: data,
      localStorage: JSON.parse(localStorage.getItem(recipeString)),
    },
  });

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    if (isStorage === true) {
      // checking if there's data in local storage
      const localStorageCheck = localStorage.getItem(recipeString);
      if (JSON.parse(localStorageCheck)) {
        setData({ isLoading: false, data: JSON.parse(localStorageCheck) });
      } else {
        getDataFromApi(signal);
      }
    } else {
      getDataFromApi(signal);
    }

    return () => {
      console.log("memory leak removal");
      controller.abort();
    };
  }, []);

  async function getDataFromApi({ signal }) {
    try {
      
      const api = await fetch(url, signal);
      console.log({
        message: "request url sent & raw response received from API fetch...",
        body: {
          url: url,
          response: api,
        },
      });

      if (api.status !== 200) {
        throw Error;
      }
      const apiResponse = await api.json();

      console.log({
        message: "json response...",
        body: {
          url: apiResponse,
        },
      });

      if (isStorage === true) {
        localStorage.setItem(recipeString, JSON.stringify(apiResponse));
      }
      setTimeout(setData({ isLoading: false, data: apiResponse }), 10000);
    } catch (error) {
      Sentry.captureException(error);

      console.error({
        message: "unfortunately an error occured trying to fetch",
        error: error,
      });
    }
  }

  return data;
}

export default useFetch;
