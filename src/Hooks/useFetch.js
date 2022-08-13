import { useEffect, useState } from "react";

function useFetch(url, defaultResponse, recipeString, isStorage) {
  const [data, setData] = useState(defaultResponse);

  console.log("data results" + data);
  console.log(
    `Getting data from local storage:: ${JSON.parse(
      localStorage.getItem(recipeString)
    )}`
  );

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    if (isStorage === true) {
      // checking if there's data in local storage
      const localStorageCheck = localStorage.getItem(recipeString);
      if (JSON.parse(localStorageCheck)) {
        setData({ isLoading: false, data: JSON.parse(localStorageCheck) });
      } else{
        getDataFromApi(signal)
      }
    }else{
        getDataFromApi(signal)
    }
    
    return ()=>{
      console.log("memory leak removal")
      controller.abort()
    } 
  }, []);

  async function getDataFromApi({signal}) {
    try {
      const api = await fetch(url,signal);
      console.log(
        `url request sent for fetch:: ${url} - response from fetch:: ${api}`
      );
      if (api.status !== 200) {
        throw Error;
      }
      const apiResponse = await api.json();

      console.log(apiResponse);
      if (isStorage === true) {
        localStorage.setItem(recipeString, JSON.stringify(apiResponse));
      }
      setTimeout(setData({ isLoading: false, data: apiResponse }), 10000);
    } catch (error) {
      console.error(`Unfortunately an error occured ${error}`);
    }
  }

  return data;
}

export default useFetch;
