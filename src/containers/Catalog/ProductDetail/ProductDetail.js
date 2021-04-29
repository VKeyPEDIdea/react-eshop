import React from 'react';
import { connect } from 'react-redux';

const productDetail = props => {
	console.log(props.products);
	return(
		<>
			<h1>Product detail</h1>
		</>
	);
};

const mapStateToProps = state => {
	return {
		products: state.products.products,
		basket: state.order.basket,
	};
};

export default connect(mapStateToProps)(productDetail);