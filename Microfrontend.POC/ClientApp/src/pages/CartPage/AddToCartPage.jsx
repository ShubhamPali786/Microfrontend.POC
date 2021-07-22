import React, { useEffect, useState } from 'react';
import { axiosInstace } from '../../axios';
import { Cart } from '../../components/Cart/CartProducts/Cart';
import { TotalPrice } from '../../components/Cart/TotalPrice/TotalPrice';

export const AddToCartPage = () => {
	const [addToCartProducts, setAddToCartProducts] = useState([]);

	useEffect(() => {
		if (addToCartProducts.length <= 0)
			axiosInstace.get('productlist/getcart').then((res) => setAddToCartProducts(res.data));
	});

	return (
		<div style={{ display: 'flex' , justifyContent:"space-around"}}>
			{addToCartProducts.length > 0 && (
				<>
					<Cart cartProducts={addToCartProducts} />
					<TotalPrice addToCartProducts={addToCartProducts} />
				</>
			)}
		</div>
	);
};
