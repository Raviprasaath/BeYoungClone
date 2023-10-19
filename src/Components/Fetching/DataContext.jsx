import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

export function useDataContext() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const projectId = "vflsmb93q9oc";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?limit=1800", {
            method: 'GET',
            headers: {
              'projectId': projectId
            },
            redirect: 'follow'
          }
        );
        if (response.ok) {
          const jsonData = await response.json();
          console.log('Data from API:', jsonData);
          setData(jsonData);
          setLoading(false);
        } else {
          console.error("Failed to fetch data.");
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);


  const [isDialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  return (
    <DataContext.Provider value={{ data, loading, isDialogOpen, openDialog, closeDialog }}>
      {children}
    </DataContext.Provider>
  );
}
