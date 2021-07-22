import React from 'react';
import './styles.css';

export const Cart = (props) => {
	return (
		<div className="cart-cn">
			<div className="cart-cn-wrap">
				<h3>My Cart ({props.cartProducts.length})</h3>
				{props.cartProducts.map((item) => {
					return (
						<div key={item.Product.Id} className="cart-product-cn">
							<img alt="no-img" src={item.Product.Img} />
							<div className="cart-productdetail-cn">
								<h3>{item.Product.Name}</h3>
								<h5>Quantity : {item.Quantity}</h5>
							</div>
							<h2>{item.Total}$</h2>
						</div>
					);
				})}
               
			</div>
            <div className="cart-btn-wrap">
                <button type="button" className="btn">Place Order</button>
                </div>
		</div>
	);
};
