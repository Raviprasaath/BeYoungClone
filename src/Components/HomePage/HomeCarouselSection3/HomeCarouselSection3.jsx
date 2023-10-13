import { useEffect, useState } from "react";
import image1 from "../../../assets/homepage-section3/image1.jpg";
import image2 from "../../../assets/homepage-section3/image2.jpg";
import { GET_VARIETY_LIST } from "../../Fetching/Constant";
import { getTypesOfClothsList, getProductList } from "../../Fetching/Service";
import "./HomeCarouselSection3.css";
import { Link } from "react-router-dom";

const HomeCarouselSection3 = () => {
  const [cargoData, setCargoData] = useState([]);
  const [allSong, setAllSong] = useState([]);

  useEffect(() => {
    const title = "description";
    const search_term = "cargo jogger";

    async function homeSection3Fetch1() {
      const data = await getTypesOfClothsList(title, search_term);
      const result = data.data;
      const result2 = result.filter((item)=> {
        return item.gender==="Men"
      });

      setCargoData(result2);
    }
    
    async function homeSection3Fetch2() {
      const data = await getProductList();
      const result = data.data;
      const result2 = result.filter((item)=> {
        return item.gender==="Men"
      });
      setAllSong(result2);
    }
    

    homeSection3Fetch1();
    homeSection3Fetch2();
  }, []);


  return (
    <>
      <div className="flex justify-center my-4">
        <div className="w-[90%] justify-center flex flex-row gap-2.5 overflow-x-scroll overflow-y-hidden p-2.5 touch-scroll sm4:[ w-[80%] flex flex-row ]">
          <Link
            className="w-full"
            to={"/clothing/cargo"}
            state={{ data: cargoData }}
          >
            <img className="w-full" src={image1} alt="img" />
          </Link>
          <Link 
            className="w-full" 
            to="/clothing/all"
            state={{ data: allSong }}
          >
            <img className="w-full" src={image2} alt="img" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeCarouselSection3;



// original
{
  /* <>
<div className="flex justify-center my-4">
    <div className='w-[80%]  flex flex-row gap-2.5 overflow-x-scroll overflow-y-hidden p-2.5  touch-scroll sm4:[ w-[80%] flex flex-row  ]'>            
      <img className='w-[90%] sm4:w-[48%]' src={image1} alt="img" />
      <img className='w-[90%] sm4:w-[48%]' src={image2} alt="img" />
    </div>
</div>
</> */
}
