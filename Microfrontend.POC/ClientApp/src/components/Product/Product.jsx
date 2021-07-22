import React from 'react';
import { axiosInstace } from '../../axios';
import './styles.css';
export const Product = (props) => {

	const onAddToCartClick=(e,id)=>{
		e.preventDefault();
		axiosInstace.post(`/productlist?id=${id}`);
	}

	return (
		<div className="product-cn">
			<img src={props.product.Img} alt="no-img " />

			<h3>{props.product.Name}</h3>
			<div className="product-addtocart-cn">
				<button type="submit" onClick={(e)=>onAddToCartClick(e,props.product.Id)}  className="product-addcartbtn">
					Add To Cart
				</button>
				<h2>{props.product.Price}$</h2>
			</div>
		</div>
	);
};
