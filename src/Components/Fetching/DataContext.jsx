import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

const projectId = "vflsmb93q9oc";

const baseUrl = "https://academics.newtonschool.co";
const LIMIT = 1800;
const fullProduct = `api/v1/ecommerce/clothes/products?limit=${LIMIT}`;


const METHODS = 'GET';


export function useDataContext() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const commonHeaders = {
    'projectId': projectId
  };

  const fetchData = async (baseUrlLink, extension, method) => {
    try {
      const response = await fetch( `${baseUrlLink}/${extension}`, {
          method: `${method}`,
          headers: {
            ...commonHeaders
          },
          redirect: 'follow'
        }
      );
      if (response.ok) {
        const jsonData = await response.json();
        
        setData(jsonData);
        setLoading(false);
        
      } else {
        console.error("Failed to fetch data.");
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchData(baseUrl, fullProduct, METHODS);
  }, []);

  const [isDialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  
  
  const [refresher, setRefresher] = useState(false);

  const refreshNavbar = () => {
    setRefresher((prev) => !prev);
  }



  

  return (
    <DataContext.Provider value={{ data, loading, isDialogOpen, openDialog, closeDialog, refreshNavbar }}>
      {children}
    </DataContext.Provider>
  );
}




// let myHeaders = new Headers();
// myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MzMzOGM1YjQxYzZhOTNiYzc4NmQyOCIsImlhdCI6MTY5ODExNjMyOSwiZXhwIjoxNzI5NjUyMzI5fQ.-gF9tLhJFzxzXYpAf8WEjkTkpZVTCc34j9kjHCtvOP0");
// myHeaders.append("projectId", "p7nvgrsg3fdf");

// let formdata = new FormData();
// formdata.append("profileImage", fileInput.files[0], "[PROXY]");

// let requestOptions = {
//   method: 'PATCH',
//   headers: myHeaders,
//   body: formdata,
//   redirect: 'follow'
// };

// fetch("https://academics.newtonschool.co/api/v1/user/updateProfileImage", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));