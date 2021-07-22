import React, { useEffect, useState } from 'react';
import { axiosInstace } from '../../axios';
import './styles.css';
import {Product} from "../../components/Product/Product"

export const ProductListPage = () => {
	const [productList, SetProductList] = useState([]);

	useEffect(() => {
		if (productList.length <= 0) {
			axiosInstace.get('productlist/get').then((res) => SetProductList(res.data));
		}
	});

	return (
		<div style={{display:"flex",flexWrap:"wrap"}}>
			{productList.length > 0 && productList.map((item) => <Product product={item} key={item.Id} />)}
		</div>
	);
};
