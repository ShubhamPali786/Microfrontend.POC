import React from 'react';
import './styles.css';

export const TotalPrice = (props) => {
	const totalPrice = props.addToCartProducts.reduce((prev, currentval) =>({Total: prev.Total + currentval.Total})).Total;

	return (
		<div className="totalprice-cn">
			<h3>PRICE DETAILS</h3>
			<div className="pricelist-cn">
				<h5>Price</h5>
				<h5>{totalPrice}$</h5>
			</div>
			<div className="pricelist-cn">
				<h5>Delivery Charges</h5>
				<h5>20$</h5>
			</div>
			<div className="pricelist-cn-total">
				<h4>Total Amount </h4>
				<h4>{totalPrice + 20}$</h4>
			</div>
		</div>
	);
};
