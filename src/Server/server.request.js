import { useEffect, useState } from "react";
import axios from "axios";
import { useData } from "../Context/DataContext";

// console.log(process.env.REACT_APP_BACKEND_URL)
const {REACT_APP_BACKEND_URL} = process.env
export const useAxios = () => {

        const [prodData, setProd] = useState(null);
        const {dataDispatch } =useData()
        useEffect(() => {
          setTimeout(() => {
            axios
              .get(`${REACT_APP_BACKEND_URL}/products`)
              .then((response) => {
                // localStorage.setItem("products",JSON.stringify(response.data.products))
                setProd(response.data.products);
                // dataDispatch({type:"SET_PRODUCTS",payLoad:prodData})
                // console.log(response.data);
              })
            .catch(function(error) {
              console.log(error);
            });
          }, 1000);
        }, [dataDispatch,prodData]);
        return prodData;

    }