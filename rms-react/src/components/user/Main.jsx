import React, { useEffect, useState } from "react";
import { fetchApiData } from "../../api/api";
import Header from './header/Header';
import Category from './categories/Category';
import FeaturedJob from './featured-jobs/FeaturedJob';
import Footer from './footer/Footer';
import Jobs from './jobs/Jobs';
import Loader from '../../services/Loader';

const Main = () => {
    const [loader, setLoader] = useState(true)
    const [data, setData] = useState([])
    useEffect(() => {
        setTimeout(() => {
          const fetchData = async () => {
            const response = await fetchApiData(`home`);
            if (response && response.status && response.status === true) {
              setData(response.data);
            } else {
              console.log(response);
            }
            setLoader(false);
          };
          fetchData();
        }, 100);
      }, [loader]);
    return (
        <>
            {loader ? ( 
                <Loader /> 
                ) : <>
                    <Header />
                    <Category categories={data.categories} />
                    <FeaturedJob featured={data.featured_job} />
                    <Jobs latest={data.latest} />
                    <Footer />
                </>}
        </>
    );
}

export default Main;