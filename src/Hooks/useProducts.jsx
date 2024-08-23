import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'

export default function useProducts() {


    function getproducts() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);

    };

    let response = useQuery({
        queryKey: ['recentproducts'],
        queryFn: getproducts,
        refetchOnMount: false
    });

    return response;
}
