
const BASE_URL = "https://academics.newtonschool.co/";
const PROJECT_ID = "vflsmb93q9oc";

import { GET_PRODUCT_LIST, methods } from "./Constant";


const Header = {projectID: PROJECT_ID};


export const generalService = async (apiUrl, method) => {
    const fetching = await fetch(`${BASE_URL}${apiUrl}`, {headers: Header, method: method} );
    const resposne = await fetching;
    return resposne;
}

export const getProductList = () => {
    return generalService(GET_PRODUCT_LIST, methods.GET);    
}

